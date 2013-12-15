var host = 'mongodb://itpwebdev:itpwebdev@ds053808.mongolab.com:53808/itpwebdev';
var MongoClient = require('mongodb').MongoClient;

exports.connect = function(cb) {
	MongoClient.connect(host, function(err, db) {
		if (err) throw err;

		cb(db);
	});
};