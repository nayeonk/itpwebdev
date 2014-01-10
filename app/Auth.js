var db = require('./db');

exports.attempt = function(username, pw, session, cb) {
	var sql = 'SELECT COUNT(*) AS userCount FROM users WHERE';
	sql += ' username=' + db.escape(username);
	sql += ' AND password = SHA1(' + db.escape(pw) + ') LIMIT 1';

	console.log(sql);
	db.connect();
	db.query(sql, function(err, result) {
		var userCount = result[0].userCount;

		if (userCount == 1) {
			session.loggedin = true;
			session.username = username;
		}

		cb();
		
		db.disconnect();
	});
};

exports.loggedin = function(session) {
	if (session.loggedin == true)
		return true;

	return false;
};

exports.logout = function(session) {
	delete session.loggedin;
	delete session.username;
};