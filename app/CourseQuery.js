var EventEmitter = require("events").EventEmitter;
var fs = require('fs');

function CourseQuery() {}

CourseQuery.prototype.find = function(courseNum) {
	var file = __dirname + '/../courses/' + courseNum + '.json';
	console.log(file)
	var ee = new EventEmitter();
	var stream = fs.createReadStream(file);

	stream.on('data', function(chunk) {
		ee.emit('loading', chunk);
	});

	stream.on('end', function() {
		ee.emit('loading-complete');
	});

	stream.on('error', function(err) {
		var code, message;

		if (err === 'ENOENT') {
			code = 404;
			message = 'Course file not found';
		} else {
			code = 500;
			message = 'Interal server error. See /courses/:courseNum';
		}

		ee.emit('error', {
			code: code,
			message: message
		});
	});

	return ee;
};

module.exports = CourseQuery;