var db = require('./db');
var Validator = require('validatorjs');

var UserAccount = function(properties) {
	this.table = 'users';

	this.fields = [
		'first_name', 'last_name', 'username', 'password', 'student_id', 'created_at', 'updated_at'
	];

	this.first_name = properties.first_name;
	this.last_name = properties.last_name;
	this.username = properties.username;
	this.password = properties.password;
	this.student_id = properties.student_id || null;
};


UserAccount.prototype.createInsert = function() {
	var values = [
		db.escape(this.first_name),
		db.escape(this.last_name),
		db.escape(this.username),
		'SHA1(' + db.escape(this.password) + ')',
		db.escape(this.student_id),
		'NOW()',
		'NOW()'
	].join(',');

	return [
		'INSERT INTO',
		this.table,
		'(' + this.fields.join(',') + ')',
		'VALUES',
		'(' + values + ')'
	].join(' ');
};

UserAccount.prototype.save = function(cb) {
	var sql = this.createInsert();

	db.connect();
	db.query(sql, function(err, result) {
		if (err) throw err;

		db.disconnect();
	});

	console.log(sql);
	cb();
};


UserAccount.validate = function(input) {
	return new Validator(input, {
		first_name: 'required|max:15',
		last_name: 'required|max:15',
		username: 'required|max:15',
		password: 'required|max:40',
		student_id: 'required|max:15'
	});
};

module.exports = UserAccount;