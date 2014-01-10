var mysql = require('mysql');
var connection;

exports.connect = function() {
	connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'root',
	  database: 'itpwebdev'
	});

	connection.connect();
};

exports.disconnect = function() {
	connection.end();
};

exports.query = function(sql, data, cb) {
	connection.query(sql, data, cb);
};

exports.escape = mysql.escape;