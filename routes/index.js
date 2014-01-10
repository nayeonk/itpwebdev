var announcements = require('./announcements');
var subscriptions = require('./subscriptions');
var forum = require('./forum');

exports.home = function(req, res) {
	res.render('index');
};

exports.playground = function(req, res) {
	res.render('playground');
};

exports.announcements = announcements;
exports.subscriptions = subscriptions;
exports.forum = forum;