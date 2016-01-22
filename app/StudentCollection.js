var StudentCollection = function() {
	this.students = [];
};

StudentCollection.prototype.add = function(student) {
	this.students.push(student);
};

StudentCollection.prototype.toJsonString = function() {
	return JSON.stringify(this.students);
};

module.exports = StudentCollection;