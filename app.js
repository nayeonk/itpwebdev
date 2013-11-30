var express = require('express');
var app = express();
var fs = require('fs');
var marked = require('marked');
var port = process.env.PORT || 3000;

app.configure(function() {
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');

	app.use(express.logger());
	app.use(express.bodyParser());
	app.use(app.router); // parse the routes before static assets
	app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res) {
	res.render('index', {
		title: 'welcome'
	});
});

/*
 * Shows the home page for a specific course
 */
app.get('/courses/:courseNum', function(req, res) {
	var courseNum = req.params.courseNum;
	var file = 'courses/' + courseNum + '.json';

	fs.readFile(file, { encoding: 'utf8' }, function(err, data) {
		if (err) {
			return res.redirect('/');
		}

		res.send(data);
	});
});

/*
 * Returns the contents of a markdown file as HTML
 */
app.get(/(\d+)\/(notes|assignments)\/(\S+)\/?/, function(req, res) {
	var courseNum = req.params[0];
	var type = req.params[1];
	var file = req.params[2];

	var path = [
		'notes-and-assignments',
		type,
		courseNum,
		file + '.md'
	].join('/'); 

	fs.readFile(path, { encoding: 'utf8' }, function(err, markdown) {
		var html;

		if (err) {
			return res.redirect('/');
		}

		html = marked(markdown);
		res.send(html);
	});
});

app.listen(port, function() {
	console.log('Listening on port ' + port)
});