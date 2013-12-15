var announcements = require('./announcements');
var subscriptions = require('./subscriptions');

exports.home = function(req, res) {
	res.render('index');
};

exports.playground = function(req, res) {
	res.render('playground');
};

exports.announcements = announcements;
exports.subscriptions = subscriptions;