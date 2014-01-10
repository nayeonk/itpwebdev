var UserAccount = require('./../app/UserAccount');
var Thread = require('./../app/Thread');
var Flash = require('./../app/Flash');
var Auth = require('./../app/Auth');

exports.index = function(req, res) {
	if (Auth.loggedin(req.session)) {
		return res.render('forum/forum-topics');
	}

	res.render('forum/index', {
		accountCreated: Flash.get('accountCreated', req),
		accountCreationError: Flash.get('accountCreationError', req)
	});
};

exports.accountCreate = function(req, res) {
	res.render('forum/account/create');
};

exports.accountStore = function(req, res) {
	var account;
	var validation = UserAccount.validate(req.body);

	if (validation.fails()) {
		req.session.accountCreationError = true;
		return res.redirect('/forum');
	}

	account = new UserAccount(req.body);

	account.save(function() {
		req.session.accountCreated = true;
		res.redirect('/forum');
	});
};

exports.login = function(req, res) {
	Auth.attempt(req.body.username, req.body.password, req.session, function() {
		res.redirect('/forum');
	});
};

exports.logout = function(req, res) {
	Auth.logout(req.session);
	res.redirect('forum');
};

exports.threads = function(req, res) {
	var course = req.query.course; // HOW DO I GET THE QUERY STRING PARAMS?

	Thread.all(course, function(threads) {
		res.json({
			thread: threads
		});
	});
};

exports.show = function(req, res) {
	var threadID = req.params.id;

	Thread.find(threadID, function(thread) {
		res.json({
			thread: thread[0]
		});
	});
};