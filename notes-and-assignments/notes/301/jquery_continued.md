jQuery Continued
================

Review of jQuery Syntax, CSS Selectors, effects/animations, manipulations, and expanded complexity

******************
Save this zip file and extract the folder to your desktop
[starter files](http://itpwebdev.usc.edu/starters/301/jquery-continued.zip)
******************

### Overview

* review document ready
* review jQuery syntax -- selectors, manipulations: .hide(), .addClass(), .removeClass(), animations, 
* review events with .on()
* .html()
* .attr()
* .css()
* .fadeTo(200, 0.5)
* method chaining
* DOM traversal
	* .next() - list of jQuery core functions: jq_effects-start.html
	* .children() - Dropdown menu example: jqmenu-start.html
* homework & example

### Basic jQuery concepts

Load the jQuery library into a page, then set up a script block and a document ready statement:

```html
<script src="http://jquery.com/src/jquery-latest.js"></script>
<script>
  $(document).ready(function() {
  	// CODE HERE
  });
</script>
```

First we need to "find" objects before we can manipulate them. In jQuery you can use __CSS selectors__ to find objects in the DOM. So $("#header") would target an object with an ID of header, and $(".headline") would target all objects of class _headline_. 
 
jQuery has DOM manipulation functions to achieve common tasks such as setting style properties or HTML attributes of objects, and can animate elements through fades, hides, and slides. The examples below would hide all objects of class definition and fade in the object of class animation over 2 seconds.

```js
$(".definition").hide();
$("#animation").fadeIn(2000);  
```
 	
Instead of only executing statements on page load, we can bind __actions__ to user events on objects. These actions can be a series of jQuery statements like we have been learning.
 
When manipulating objects inside "on()", you can use the __this__ object to target the object that triggered the event. The following statement would bind a mouseover event to all anchors, and then would target a specific anchors (when moused over) to add the class 'highlight' to it. And then the second "on" would remove that class:
   
```js
$("a").on("mouseover", function() {
	$(this).addClass("highlight");
});

$("a").on("mouseout", function() {
	$(this).removeClass("highlight");
});
```
 
### Event handlers in jQuery

"Events" are the different types of user interactions that we "on" to objects such as mouseover, click, etc. There are also some "shortcut' events and syntax.

The main events we will use are mouseover, mouseout, click, dblclick, blur, focus, and change.

The full list of supported events can be found on the jQuery Events list at http://api.jquery.com/category/events/.


### Method Chaining

We can select elements based on other elements using a pattern in jQuery called chaining. To see how this could be useful, let's revisit a previous example where we collapsed open and closed panels.

Let's go back to the page of jQuery effects and manipulations terms and their definitions. Open up [jq_effects2a.html](http://webdev.usc.edu/itp301/lecture_examples/jq_effects2a.html). Now this time instead of binding events to individual objects (through their IDs) we instead want to be able to bind to ALL dt tags an instruction that toggles the visibility of the __NEXT__ object on the page -- which would be the dd with definitions:

```js
$("dt").on("click", function() {
	$(this).next().toggle();
});
```
See how afer the __this__ object... which targets the dt that was clicked, it then selects the next element in the DOM using next(). That targets the VERY NEXT object on the page after the clicked one. And then runs a toggle visibility command on that. You can see that working in jq_effects2b.html.

So we can not only add additional selectors on to objects, but we can then add actions on top of those. We can even "chain" actions together. For instance, what if when the page first loaded it hid all definitions, then animated all of them open at once, and thenn closed all of them. Take a look at line below:

```js
$("dd").hide().slideDown(1000).slideUp(1000);
```
	
In effect that line is executing three actions on the same set of objects, one after another.

 
### Effects/Animations

jQuery has a set of stock effects that are easy to use on objects such as:

* fadeIn()
* fadeOut()
* fadeToggle()
* hide()
* show()
* toggle()
* slideDown()
* slideUp()
* slideToggle()

As mentioned above, you can "chain" more than one animation in a row.

There is also a delay action that lets you put a pause in. So for instance, in the example below it fades in all dd objects, pauses for 2 seconds, and then fades them out:

```js
$("dd").hide().fadeIn().delay(2000).fadeOut();
```
	
There is also an effect called "animate" that lets you set up manual animations of individual properties. But its implementation is more complex and something we will revisit later.

A full list can be found on the jQuery Effects page at http://api.jquery.com/category/effects/

 
### jQuery manipulation actions including css() and attr() and html():

We also previously looked at common jQuery manipulation actions such as addClass, removeClass and toggleClass. There are many other types of manipulation, some of which we will come back to after we get into Javascript. But the following three are worth mentioning:

__css()__ sets a CSS property of an object. So for instance $("a").css("color","green") would set all css color properties of all anchor tags to green.
 
__attr()__ sets an attribute to HTML objects, so for instance $("img#bigimage").attr("src", "mainpic.jpg") would set the _src_ of the image IDed as bigimage to mainpic.jpg
 
__html()__ sets the html CONTENT of an object. So for instance $("div#caption").html("This is a picture of a dog") would set the contents of a div IDed as caption to the text 'This is a picture of a dog'. You CAN include html instructions inside of the html() function... so the previous statement could also be:

```js
$("div#caption").html("This is a <strong>picture</strong> of a dog");
```

You can see the complete list of jQuery Manipulation actions at http://api.jquery.com/category/manipulation/

