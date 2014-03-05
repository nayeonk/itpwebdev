JavaScript cross-browser, page info
===================================


Review of cross-browser DHTML issues. Page/window environment info.

******************************************************************
Yuanbo's class: http://itpwebdev.herokuapp.com/starters/301/dhtml_cross-broswer_page_info.zip [Finalized](http://itpwebdev.herokuapp.com/starters/301/dhtml_cross-broswer_page_info_finalized.zip)

David's class: http://itpwebdev.herokuapp.com/starters/301/can-you-write-js-to.zip
******************************************************************

### Overview

* Cross browser JS and jQuery
	* querying the DOM
		* getElementById(), querySelectorAll(), getElementsByTagName(), getElementsByClassName()
	* .css() vs .style
		* reading properties set from stylesheet
		* camel casing of style properties
* Layers / AP Divs review
	* visibility, top, left, bottom, right, position absolute
* Getting info about the window
	* document.documentElement.clientWidth vs $(window).width()
* event object e.pageX, e.pageY

### JavaScript across browsers

*	All major browsers support JavaScript, but they implement it differently (in particular finding and manipulating objects)
*	While all browsers treat block elements (like divs) as elements with positional and state properties that can be changed, some use different syntax
*	All browsers support conventional implementation of CSS through style instructions to create objects/layers, but have proprietary approaches to changing properties of objects/layers set through CSS
*	So the simple solution to cross-browser compatiblity it to use methods and properties that overlap (that all support). The improved approach is to first detect what properties, methods and objects a browser can read/understands, and then to use the supported approaches.
*	So for instance, since all major browsers support the document.getElementById() method, we use that to "find" objects in JS... as opposed to document.layerID or doucment(layerID) or document.all.layerID or other methods
*	But also remember what one of the major advatnages of jQuery is -- cross browser compatility. One major advantage of using jQuery is to bridge any browser and environment differences.
 
### Dynamic layers / AP Divs & Browser/Window Information

*	We can re-write the content of any div using its .innerHTML property
*	You can of course change the locations and visibility of a layer through its .style.left and .style.top and .style.visibility properties.. or through jQuery .css() settings
*	When reading and writing a layer's location, remember to set locations in pixels (200px NOT 200). And when reading and manipulating their coordinates remember to convert (parseFloat) the data to numbers first
*	How do we center a layer on the screen? Well if we knew the width of the browser, then we could do some math to make it work. Most browser support document.documentElement.clientWidth ... which you can use to figure out the browser's width. Or the jQuery equivalent property of the window/browser which is $(window).width()


__Some browser environmental properties such as browser/window size and mouse position__

Take a look at the output of the JS page [js_info.html](http://webdev.usc.edu/itp301/lecture_examples/js_info.html). It parses:

```js
navigator.appName
navigator.appVersion
document.documentElement.clientWidth
document.documentElement.clientHeight
document.bgColor
document.body.style.backgroundColor
```

Now jQuery takes a different approach. First off, we can parse properties of the literal window object in jQuery, such as its width() and height(). And of course to find out the background color of the page we check the "body" selector. So compare the Javascript properties above with the environment info output from the jQuery version [jq_info.html](http://webdev.usc.edu/itp301/lecture_examples/jq_info.html):

```js
$(window).width()
$(window).height()
$("body").css("background-color")
```

How about finding the location of the mouse? Well, when an event takes place (mouseover, click, etc.) you can parse the pageX and pageY properties of THE EVENT. How do we get properties of an event? Well when we create a "on" and write a function inside that on, the event itself can be included (automatically) in the function and parsed out.

So, for instance, look at the jQuery code below:

```js
$("body").on("click", function(e) {
	alert("User clicked at " + e.pageX + " across and " + e.pageY + "down");
});
```


Although it is a bit confusing at first, when you create a function inside an "on" if you give it a parameter variable (of the function) then jQuery automatically passes the "event" object of the "on" into the function, and the pageX and pageY properies of that event represent where the mouse was (in relation to the page) at the time the event occurred.

To draw all of this together, and use many of those environmental properties from the Info page, let's load up a new object manipulation demo called layer_practice.html. The page has built in instuctions/tasks to complete. You can see a mostly completed version of the page from spring 2012 at [layer_practice2.html](http://webdev.usc.edu/itp301/lecture_examples/layer_practice2.html) or spring 2013 at [layer_practice2_20131.html](http://webdev.usc.edu/itp301/lecture_examples/layer_practice2_20131.html)