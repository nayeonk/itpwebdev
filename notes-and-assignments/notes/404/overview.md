Course Introduction
===================

* Course introduction
* About me
* Syllabus
* Course Concepts
	* JavaScript Applications
	* Web services & Application Programming Interfaces (APIs)
  * Document Object Model 
  * JavaScript libraries vs Frameworks
  * Design patterns / good programming techniques (JS specific and more general ones)
* What framework(s) do you want to learn?
* Final project ideas / samples, Mashups
 * [Programmable Web](http://www.programmableweb.com/) 

### Web Services

Web services allow for interaction / communication between 2 machines over a network using the HTTP protocol. In order to communicate with Facebook for access to their data and functionality, we can use their web service. How developers interface with their web service is defined in their API.

Some of the web services we will explore include (subject to chnage):

* iTunes
* Flickr
* Twitter
* Facebook
* Instagram

### Application Programming Interfaces (APIs)

An API is an interface that gives developers programmatic access to other software. For example, if you want to access
data on Facebook (a list of your freinds, events, etc), Facebook has a public API so that you as a developer 
can access that data and functionality programmatically from your own site / application without having to use their
web pages. Their API will define how you can interact with their software and what types of operations you can do.

As another example, the jQuery library is another peice of software. In order to work with the library, jQuery provides
functions / methods as an API to access the library functionality. When you want to find out what these methods / functions do, you will look at the [API Documentation](http://api.jquery.com/).

### Document Object Model (DOM)

The Document Object Model is an important concept when working in JavaScript. Think of it as the hierarchy of nodes/elements in your web page. When you write JavaScript for your web pages, you are interacting with the DOM. You
are adding classes to different elements, adding and removing elements, changing element properties, etc. The DOM provides an API
for you to access these elements in your JavaScript. A few DOM API methods / functions include:

* document.getElementById()
* document.getElementsByTagName()
* document.querySelector()
* document.querySelectorAll()
* document.addEventListener() (Chrome, FF, IE9 and above)
* document.attachEvent() (IE8 and below)
* document.createElement()

### Libraries

Think of a library as a toolkit. You can build a number of things using your tools. In this course, we will dig deeper into the popular JavaScript library jQuery that abstracts away browser differences when writing JavaScript so that you can focus on writing your site / application. We will also explore libraries like Handlebars
and Underscore for client-side templating.

### Frameworks

You might hear the term framework and library used interchangably, but technically they are different things. Frameworks help provide structure to what you are building whereas a library acts more like a toolbox. You can think of jQuery as a library because it provides the tools necessary to manipulate the DOM and make AJAX requests without having to worry about browser inconsistencies. It is very easy to write unstructured JavaScript / jQuery. You can create a JavaScript file and start writing code just to make things work. But what happens when this code grows to 300+ lines long? Having structure in your JavaScript is important for maintainability and scalability. We will explore several techniques and design patterns that will help provide some structure to your JavaScript. Then we will explore an actual JavaScript framework.

### Design Patterns

Design Patterns can be described as the following, as stated in the book [Learning JavaScript Design Patterns by Addy Osmani]((http://addyosmani.com/resources/essentialjsdesignpatterns/book/))

* "Design patterns are reusable solutions to commonly occurring problems in software design."
* "Design patterns also provide us a common vocabulary to describe solutions. This can be significantly simpler than describing syntax and semantics when we're attempting to convey a way of structuring a solution in code form to others."




