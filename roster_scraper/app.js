var cheerio = require('cheerio');
var fs = require('fs');
var html = fs.readFileSync('Student Roster.html', 'utf8');
var $ = cheerio.load(html);
var $rows = $('#top div p table tr');

var courseFilename = process.argv[2];

var StudentCollection = function() {
	this.students = [];
};

StudentCollection.prototype.add = function(student) {
	this.students.push(student);
};

StudentCollection.prototype.toJsonString = function() {
	return JSON.stringify(this.students);
};

var studentCollection = new StudentCollection();

$rows.each(function(index) {
	var img, fullname, username, imageCount = 0;
	var $this;
	// console.log(index)
	if (index !== 0) {
		// var row = $(this).html();
		// console.log(row);

		$this = $(this);
		img = $this.find('img').attr('src').match(/image\S+/)[0];
		// console.log(img);

		fullname = $this.find('td').eq(1).text();
		username = $this.find('a').eq(0).text().replace('@usc.edu', '');
		// console.log(img, fullname, username);
		studentCollection.add({
			name: fullname,
			img: img,
			username: username
		});
	}
});

fs.writeFileSync('./../public/students/' + courseFilename + '.json', studentCollection.toJsonString());