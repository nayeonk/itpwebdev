var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var routes = require('./routes');

var CourseQuery = require('./app/CourseQuery');
var MarkdownQuery = require('./app/MarkdownQuery');

app.configure(function() {
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');

	app.use(express.logger());
	app.use(express.cookieParser());
	app.use(express.session({ secret: 'bazinga' }));
	app.use(express.bodyParser());
	app.use(app.router); // parse the routes before static assets
	app.use(express.static(__dirname + '/public'));
	app.use(function(req, res) {
		res.render('404');
	});
});

app.configure('dev', function() {
	app.set('url', 'http://localhost:' + port);
	console.log(app.get('url'), '###############################################')
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

app.get('/forum', routes.forum.index);
app.get('/forum/account/create', routes.forum.accountCreate);
app.post('/forum/account/store', routes.forum.accountStore);
app.post('/forum/login', routes.forum.login);
app.get('/forum/logout', routes.forum.logout);

app.get('/threads', routes.forum.threads);
app.get('/threads/:id', routes.forum.show);


app.listen(port, function() {
	console.log('Listening on port ' + port)
});