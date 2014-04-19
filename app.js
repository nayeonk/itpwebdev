var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var routes = require('./routes');
var marked = require('marked');
var fs = require('fs');

var CourseQuery = require('./app/CourseQuery');
var MarkdownQuery = require('./app/MarkdownQuery');


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

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


app.get('/jobs', function(req, res) {
	fs.readFile('./views/jobs.md', { encoding: 'utf8' }, function(err, markdown) {
		var html = marked(markdown);
		res.send(html);
	});
});

/*
 * AJAX: Shows the home page for a specific course
 */
app.get('/courses/:courseNum', function(req, res) {
	var courseNum = req.params.courseNum;
	var course = new CourseQuery().find(courseNum);

	course.on('loading', function(chunk) {
		res.write(chunk);
	});

	course.on('loading-complete', function() {
		res.end();
	});

	course.on('error', function(err) {
		res.json(err.code, err);
	});
});

/*
 * AJAX: Returns the contents of a markdown file as HTML
 */
app.get(/(\d+)\/(notes|assignments)\/(\S+)\/?/, function(req, res) {
	var courseNum = req.params[0];
	var type = req.params[1];
	var file = req.params[2];

	var query = new MarkdownQuery({
		type: type,
		course: courseNum,
		file: file
	});

	query.getHtml(function(html) {
		res.send(html);
	}, function() {
		res.redirect('/');
	});
});

app.get('/me', function(req, res) {
	res.json({
		loggedin: req.session.loggedin,
		username: req.session.username
	});
});


app.get('/buzzfeed', function(req, res) {
	var random = Math.floor(Math.random() * 2);
	var data = [];

	data[0] = {
		status: 'error',
		message: 'Aw Snap! Something went wrong!'
	};

	data[1] = {
		status: 'success',
		source: {
			name: 'Buzzfeed',
			title: '27 Things Only Developers Will Find Funny',
			url: 'http://www.buzzfeed.com/lukelewis/28-things-only-developers-will-find-funny',
			date: 'July 25, 2013'
		},
		data: [
			{ id: 0, title: 'CSS is Awesome', img: 'http://s3-ec.buzzfed.com/static/enhanced/webdr03/2013/7/25/6/enhanced-buzz-20746-1374746508-22.jpg' },
			{ id: 1, title: 'This Comparison', img: 'http://s3-ec.buzzfed.com/static/enhanced/webdr06/2013/7/25/6/enhanced-buzz-29278-1374748083-4.jpg' },
			{ id: 2, title: 'A Developer\'s Week', img: 'http://s3-ec.buzzfed.com/static/enhanced/webdr03/2013/7/25/5/enhanced-buzz-18231-1374744160-12.jpg' },
			{ id: 3, title: 'This common relationship problem', img: 'http://s3-ec.buzzfed.com/static/enhanced/webdr03/2013/7/25/3/enhanced-buzz-17903-1374739080-12.jpg' },
			{ id: 4, title: 'This cartoon strip', img: 'http://s3-ec.buzzfed.com/static/enhanced/webdr01/2013/7/25/5/enhanced-buzz-7412-1374744272-18.jpg' }
		]
	};

	res.json(data[random]);
});

app.use(function(req, res) {
	res.render('404');
});

app.listen(port, function() {
	console.log('Listening on port ' + port)
});