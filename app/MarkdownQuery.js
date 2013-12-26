var fs = require('fs');
var marked = require('marked');

function MarkdownQuery(options) {
	this.type = options.type;
	this.course = options.course;
	this.file = options.file;
}

MarkdownQuery.prototype.buildFilePath = function() {
	return [
		'notes-and-assignments',
		this.type,
		this.course,
		this.file + '.md'
	].join('/');
};

MarkdownQuery.prototype.getHtml = function(successCb, errorCb) {
	var path =  this.buildFilePath();

	fs.readFile(path, { encoding: 'utf8' }, function(err, markdown) {
		var html;

		if (err) {
			return errorCb();
		}

		html = marked(markdown);
		return successCb(html);
	});
};

module.exports = MarkdownQuery;