var Student = function() {};
Student.getImageSrc = function(rawPath) {
	var src = rawPath.match(/image\S+/);

	if (src) {
		return src[0];
	}

	return 'trojan.gif';
};

module.exports = Student;