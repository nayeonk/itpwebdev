jQuery Overview / Review
========================

* What is jQuery?
  * jQuery is a JavaScript library that is really good at querying and manipulating the DOM in a cross-browser compatible way
  * DOM review
* Loading the jQuery library
  * You can use the Content Delivery Network (CDN) - _recommended_
  * Download the minified file (for production), or the uncompressed file (for development). The uncompressed file is more useful when it comes to debugging
* Where to place your jQuery code?
  * document.ready block - waits for the DOMContentLoaded event
    * [DOMContentLoaded event vs onload event](https://developer.mozilla.org/en/DOM/DOM_event_reference/DOMContentLoaded)
  * alternatively can be placed at the bottom of the page (before the closing body tag)
* Querying the DOM
  * native DOM selection methods (document methods)
  * The jQuery object and CSS selectors
* Manipulating styles / CSS classes
  * [.css()](http://api.jquery.com/css/)
  * [.addClass()](http://api.jquery.com/addClass/)
  * [.removeClass()](http://api.jquery.com/removeClass/)
* Basic Animation
  * [.show()](http://api.jquery.com/show/) / [.hide()](http://api.jquery.com/hide/)
  * [.slideUp()](http://api.jquery.com/slideUp/) / [.slideDown()](http://api.jquery.com/slideDown/)
  * [.toggle()](http://api.jquery.com/toggle/) - use when you want to toggle the display property
* DOM Events
  * [.on()](http://api.jquery.com/on/), [.click()](http://api.jquery.com/click/)
  * callback functions - functions that get passed as arguments to other functions
  * _this_ keyword 
* DOM Traversal
  * [next()](http://api.jquery.com/next/)
  * [prev()](http://api.jquery.com/prev/)
  * [find()](http://api.jquery.com/find/)
* Selection filtering
  * [.eq()](http://api.jquery.com/eq/)
  * [.first()](http://api.jquery.com/first/) => equivalent to .eq(0)
  * [.find()](http://api.jquery.com/find/)
* Method chaining
  * sometimes called Fluent interfaces
  * allows you to perform operations on your jQuery selection by chaining methods together

### Class Demo - Schedule of classes
* [Start](http://jsbin.com/ERahovu/2/edit), [Final](http://jsbin.com/ERahovu/1/edit)
* Progressive enhancement approach (for good practice) and to demonstrate practical uses of several jQuery methods
* Create a document ready block
* hide all .course paragraphs
* prepend <span class="expand-icon">+</span> to each h3 element AND add class .clickable to h3
* add click event listener to .course h3
* read display property of the next p element and toggle it manually
* also change the h3 span innerHTML to - or + sign
* change the toggling of the p element to use animation via show() and hide() 
