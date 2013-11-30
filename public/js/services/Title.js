angular.module('itpwebdev').service('Title', function() {
	var accronyms = ['php', 'html', 'css', 'js', 'ftp', 'oojs'];

	this.makeFromFilename = function(filename) {
		var title = filename;

		title = title.replace(/-|_/g, ' ');
		title = this.capitalizeAcronyms(title, accronyms);

		return title;
	};

	this.capitalizeAcronyms = function(str, accronyms) {
		var newStr = str;

		angular.forEach(accronyms, function(accronym) {
			var re = new RegExp(accronym, 'ig');
			newStr = newStr.replace(re, accronym.toUpperCase());
		});

		return newStr;
	};

});