Introduction to Programming and JavaScript
==========================================

******************************************************************
Please download the following zip file and extract it to a folder: 
[starter files](http://itpwebdev.herokuapp.com/starters/301/intro_to_js_and_programming.zip)
******************************************************************

### Javascript

* Important to understand how certain objects work in HTML in order to understand how JS will interact with them
* Javascript's ability to interact with objects on the page is what makes pages interactive.
*	DHTML = HTML + Javascript (+ CSS Styles)
*	Objects within HTML documents
	*	Objects: window, document, HTML objects in document
	*	Properties of objects
	*	Methods - programs/functionalities of objects
	*	Events / event handlers
*	DOM: Document Object Model - tree of HTML objects that make up the web page
*	Functions: Routines written in JS and called within HTML
*	JS within head, body or in HTML tags (in event handlers)
*	Filtering out non-JS browsers
*	Browser compatibility issues
*	It detects actions or activities of objects
*	It can read/parse aspects and values of objects
*	It can manipulate and alter objects.

  
### Document Object Model (DOM)

*	Defines the object tree of a web page, from the window, browser (navigator) and document objects, to all of their possible sub-objects.
*	Defines the properties of objects (src for img, bgColor for document, etc.)

### Some common/major page objects in Javascript

*	window -- this represents the browser   
*	document -- this represents the page inside the browser, the HTML file or document that was loaded   
*	document.body -- the body of the page (what you are seeing on the screen)   
*	document.getElementById('content') - an individual object in a webpage that has an ID of 'content'. So for instance:

```html
<div id="content">Some div</div>
```

### Objects

*	When an object is created (in HTML) the browser defines an object in memory. 
*	An object can be anything from the entire document to a small text input field in a form in the document.
*	There are three CRUCIAL aspects to objects:
	*	Properties: Features of an object. Commonly set in HTML through tag attributes such as width, height, src, etc. CSS added all sorts of new properties for objects.
	*	Methods: Actions that object can perform or behaviors they can do such as writing content to a document (page) or submitting a form to another page/server.
	*	Event Handlers: Events that objects can undergo and that be used as triggers such as a user clicking on an object or the contents of a form field changing.

### Object Properties

*	Most common object properties are set through HTML tag attributes
*	HTML tags have 'default attributes' which means that those objects have default attributes such as the 'fgcolor' and 'bgcolor' properties of a document, the border property of an image, or the cellspacing and cellpadding properties of a table object.
*	All CSS style properties (such as background-color) have slightly different name syntax (backgroundColor instead of background-color) in JS, and reside inside of a sub-object called "style" inside of their object (OBJ1.style.backgroundColor not OBJ1.backgroundcolor).
*	Perhaps the most important property is the 'name' of an object. HTML elements can have "id" attributes. Using a named ID is the most widely compatible way to script objects in a web page.
*	Besides typically having unique identifiers, objects are also listed (in an array) and numbered according to their object type or group, and the order they were created in. The number order starts with 0 (this is a typical JS convention). So the second form on a page would be form[1].
*	Objects typically have hierarchical nesting orders according to the DOM (document object model). In many cases you can refer to an object without using its parent (so for instance you can refer to a document without window.document, and it is assumed to be the current document (within the active window).
*	There are typically multiple ways to reference to objects:
	*	window.document.obj1
	*	document.obj1
	*	document.getElementById('obj1') -- most cross-browser compatible

### Object Methods

*	Methods are "actions" that objects can perform, such as writing information (HTML and text) to a document, submitting a form to a page/server, or changing or formatting certain kings of data.
*	Methods tend to be specific to objects, although similar objects often have similar methods. For instance, the close() method is typically used only with the window object (to close a window), and the round() method is used with the Math object to round off numbers. But the select() method works with multiple form objects to highlight or select their content, and the indexOf method returns the location of a specified character or string within any kind of string data object.
*	Methods 'do something'

### Object Event Handlers

*	Event handlers or 'triggers' detect user activity on a page. For instance, when a user selects the contents of a form element, clicks an HTML object on a page, moves off of one object by highlighting or clicking another, etc. 
*	Event handlers are typically used to delay the execution of code until a certain action occurs. For instance, to wait to bring up a pop-up window until someone clicks on a link that says "Pop-up information".



Ok, so beyond the basic theory, let's dig into two core concepts -- __setting an object's property to a new value, and where do we put Javascript code.__


### Setting an object's property:

First you have to find/locate the HTML object.

```js
document     // (the main page/body)
document.getElementById('Pic1')     // (object in the page that is IDed as Pic1)
```
	
Once you have a reference to an object, then you can add on a property

```js
document.bgColor     // (the background color property of the page)
document.getElementById('Pic1').src     // (the html src property of the object IDed as Pic1)
```

Then if you want to set a new value for that property, you set the obj.prop = 'value'

```js
document.bgColor = 'teal'
document.getElementById('Pic1').src = 'newpic.jpg'
```

When dealing with values in Javascript, need to use QUOTE marks around all non-number data

__But like with jQuery, once question is do you want that code to run right away, or be delayed?__

### Where do we place Javascript?

In an inline script block anywhere in the page, but again we'll start off putting it in the head. This executes when that line is encountered.

```html
<p>First paragraph</p>
<script>
	alert('You should see this pop-up message BEFORE the second paragraph eppears on the page.');
</script>
<p>Second paragraph</p>
```
	
In event handler INSIDE an HTML tag -- executes when event of event handler occurs, i.e. delayed code, and does NOT have a script tag

```html
<div id="div1" 
	onmouseover="document.getElementById('div1').style.backgroundColor = 'yellow'" 
	onmouseout="document.getElementById('div1').style.backgroundColor = 'white'">
	Mouse over this paragraph to see a highlight background color
</div>
```

In a separate file that is included in a page like how we included jQuery. This can be a relative or absolute path, just like how we specify an image src or anchor's href.

```html
<script src="main.js"></script>
```

*****************************************************************************************************************

* Sample Page: [start](http://webdev.usc.edu/itp301/lecture_examples/js1a_start.html)
* End page [finished](http://webdev.usc.edu/itp301/lecture_examples/js1a_end.html)

