var cheerio = require('cheerio');
var fs = require('fs');
var StudentCollection = require('./../app/StudentCollection');
var Student = require('./../app/Student');

var courseFilename = process.argv[2];
var html = fs.readFileSync('Student Roster.html', 'utf8');
var $ = cheerio.load(html);
var $rows = $('#top div p table tr');
var studentCollection = new StudentCollection();

$rows.each(function(index) {
	var img, fullname, username, classLevel, $this, imageCount = 0;

	if (index !== 0) {
		$this = $(this);
		fullname = $this.find('td').eq(1).text();
		username = $this.find('a').eq(0).text().replace('@usc.edu', '');
		console.log(fullname);
		img = Student.getImageSrc($this.find('img').attr('src'));
		classLevel = $this.find('td').eq(4).html();
		// console.log(img, fullname, username);
		studentCollection.add({
			name: fullname,
			img: img,
			username: username,
			classLevel: classLevel
		});
	}
});

fs.writeFileSync('./../public/students/' + courseFilename + '.json', studentCollection.toJsonString());