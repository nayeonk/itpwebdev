var Mongo = require('./../app/mongo');
var mail = require('nodemailer').mail;

exports.create = function(req, res) {
	res.render('announcements/create');
};

exports.store = function(req, res) {
	var emails = [];

	Mongo.connect(function(db) {

		var collection = db.collection('students').find().toArray(function(err, docs) {
			console.log('=====DOCS====', docs);

			docs.forEach(function(doc) {
				console.log(doc.email);
				emails.push(doc.email);
			});

			mail({
				from: 'dtang@usc.edu',
				to: emails.join(','),
				subject: 'itp announcement',
				html: '<strong>david</strong>'
			});

			res.end('Announcement created');
		});
	});

};