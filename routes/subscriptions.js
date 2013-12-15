var Mongo = require('./../app/mongo');

exports.create = function(req, res) {
	Mongo.connect(function(db) {
		var collection = db.collection('students');

		collection.insert({
			email: req.body.email,
			course: req.body.course
		}, function(err, docs) {
			console.log(docs);
			res.json(docs[0]);
		});
	});
};