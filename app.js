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
	app.use(function(req, res) {
		res.render('404');
	});
});

app.configure('dev', function() {
	app.set('url', 'http://localhost:' + port);
});

app.configure('prod', function() {
	app.set('url', 'http://itpwebdev.herokuapp.com/');
});

/*
 ******************************************************************************************
 * ROUTE DEFINITIONS
 ******************************************************************************************
 */

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/playground', function(req, res) {
	res.render('playground');
});

// app.post('/playground/render', function(req, res) {
// 	var html = req.body.html;
// 	res.send(html);
// });

/*
 * AJAX: Shows the home page for a specific course
 */
app.get('/courses/:courseNum', function(req, res) {
	var courseNum = req.params.courseNum;
	var file = 'courses/' + courseNum + '.json';
	var stream = fs.createReadStream(file);

	stream.on('data', function(chunk) {
		res.write(chunk);
	});

	stream.on('end', function() {
		res.end();
	});

	stream.on('error', function(err) {
		var code, message;

		if (err === 'ENOENT') {
			code = 404;
			message = 'Course file not found';
		} else {
			code = 500;
			message = 'Interal server error. See /courses/:courseNum';
		}

		return res.json(code, {
			error: code,
			message: message
		});
	});

});

/*
 * AJAX: Returns the contents of a markdown file as HTML
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