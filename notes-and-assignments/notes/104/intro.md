Course Overview & Intro to the web
==========

Slides can be downloaded [here](/slides/104/itp104_lecture_w01_sp2016.pdf). **Note:** This is probably the only lecture slides are ever used. 

**Syllabus:**
* can be found [here](http://web-app.usc.edu/soc/syllabus/20163/31809.pdf) and also on Blackboard

###Class Administrative Details
* All lecture notes and assignments will be posted weekly on this class website. Blackboard is only used for posting grades.
* Lecture is generally from 6-7:30pm and lab is from 7:30-8:50pm. 
* During the first two-thirds of the courses, there will generally be assignments due every week. During some weeks, there may be lab exercises to complete during lab as well as assignments. You can use this lab time for both assignments and labs.
* TAs will be present at lab time to help with any labs or assignments. 
* No labs on the first week of class.
* Each student will create their own website as a **final project**, which is due on the last day of classes. This project is in place of a final exam, and will count significantly toward your final grade in the course.
* All assignments will be submitted via FTP to your USC site

###Course Grading Information
* Final grading for ITP104 generally breaks down as follows (~5% margin for change):
	* Participation: 15%
	* Assignments: 30%
	* Examination: 20%
	* Final Project: 35%
* The participation component of your grade consists of lecture attendance and completion of lab exercises. Lab attendance is optional. 
* If you turn in a late assignment, you MUST notify the grader and/or instructor.
* The last modified timestamp will count as the final timestamp of when your assignment was turned in. Do not modify your assignment after you have submitted it. 

###Brief Lecture about the Web
#### What is involed in web pages?
* Content such as text, hyperlinks, images, video and audio
* Page "code" such as HTML, CSS, and Javascript
* Server-Side scripting such as ASP/.Net, PHP, ColdFusion, etc.
* Programming such as Perl or Java. Side technologies and endeavors such as databases, e-commerce, security, et al.
* Actual server machines, networks, routers and switches, connections, etc.

*Side note:* ITP104 focuses on **web publishing**, which means we will primarily be learning HTML and CSS with a little bit of interactivity through Javascript or jQuery. There will be no actual programming taught in this class. You will, however, still be able to create a fully functioning website by the end of the course. Here are some examples of final projects from students who took ITP104
* http://scf.usc.edu/~catherjc/itp104/finalproject/index.html
* http://www-scf.usc.edu/~hanqingz/itp104/portfolio/
* http://www-scf.usc.edu/~bielas/itp104/scsihomepage.html

### Domain, IP address, DNS, website
The web works similarly to how post offices work. Just like each house or apartment has an address (e.g. 1234 State St. ), each website has an address, which is called **IP address**. We as the user usually only sees www.facebook.com or www.yahoo.com, but these names are actually aliases for the **IP address**. These websites also live in their own form of "houses," which is called web servers. You can think of a web server as a very powerful computer where all the files, images, content, etc of a website lives in.

When we type something like www.facebook.com on the browser, the **Domain Name Service (DNS)** "looks up" www.facebook.com's IP address. Think of it as a phone book or a post office. Then your computer sends a **HTTP request** to the www.facebook.com server (house). The two diagrams may help you understand this concept:

<img width="45%" src="/images/intro_img01.png"/> 
<img width="45%" src="/images/intro_img02.png"/> 


### Inside a Webpage
The website then returns a HTML page to your computer. Your **browser** like Chrome, Firefox, Safari, etc will read this HTML page and render a nice looking page on your screen. Now let's talk about what's in this HTML page.

* **HTML (Hyper Text Markup Language)** - used to structure the content of your web
* **CSS (Cascading Stylesheet)** - used to control the look and feel of the page
* **Javascript** - extra scripts that often control the interactivity, data validation, etc on your page
* Text, images

In this class we will be focusing on mainly HTML and CSS. You will learn how to code HTML and CSS from an empty Notepad or TextEdit .html file and upload this via FTP to your webspace hosted by USC. I will show you how to do this step by step starting the next lecture.
