var db = require('./db');

var Thread = function() {};

Thread.all = function(course, cb) {
	var sql, data = [];

	sql = "SELECT * FROM threads";

	if (course) {
		sql += " WHERE course = ?";
		data = [course];
	}

	db.connect();

	db.query(sql, data, function(err, data) {
		if (err) throw err;

		cb(data);
		db.disconnect();
	});
	
};

Thread.find = function(id, cb) {
	var sql = "SELECT * FROM threads WHERE id = ?";

	db.connect();
	db.query(sql, [id], function(err, data) {
		cb(data);
		db.disconnect();
	});
};

module.exports = Thread;