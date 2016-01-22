jQuery continued & JavaScript Good Practices
============================================

### Overview
* selector caching
  * schedule of classes example review and refactor
  * $this vs $(this)
* event delegation
  * Why event delegation?
    * reduce memory use & improve performance
      * example 
    * appending new elements to the DOM that should have event listeners
      * example 
  * How event delegation works behind the scenes
    * native event listeners: addEventListener()
    * the event object
      * e.target (most browsers)
* Immediately Invoked Function Expressions (IIFE)
  * prevent global variable pollution

### jQuery Selector Caching

When using jQuery, somtimes you will need to wrap an element within jQuery to be used in different places of your code. Rather than wrapping an element within jQuery each time, you can save the jQuery selection into a variable. This is known as selector caching.

Rather than doing this:

```js
$('button').on('click', function() {
  $(this).addClass('active'); // reference $(this) first time
  // some other code here
  $(this).parent().html('Saving'); // reference $(this) a second time
});	
```

Instead, do this:

```js
$('button').on('click', function() {
  var $this = $(this);
  
  $this.addClass('active');
  // some other code here
  $this.parent().html('Saving');
});
 
```

In the example above, I store (or cache) the jQuery-wrapped _this_ element in a variable called _$this_. This way, if I need to refer to $(this) several times in this function, I can reference _$this_ instead to prevent unnecessary jQuery function calls. 

Why did I call the variable _$this_? As a convention, some developers like to prefix variables that contain jQuery objects/selections with $. This is not required, but it is a convention that helps you remember if a variable contains a jQuery selection.

### Event delegation

Given the following HTML: 

```html
<ul id="tv-shows">
  <li>Big Bang Theory</li>
  <li>Burn Notice</li>
  <li>White Collar</li>
</ul>
```

If we wanted to add event listeners to each list item, we would typically do something like this in jQuery:

```js
$('#tv-shows').on('click', function() {
  // this refers to the li element that was clicked
});
```

But what happens when we have a really long list of TV shows, say 100? This piece of code would add an event listener to every single list item. Attaching an event listener to every single list item would not be very efficient on memory or performance. The solution to this is to use _event delegation_.

Event delegation is a technique that allows you to avoid adding event listeners to specific nodes. For example, say this list had 100 items. Instead, we could bind a SINGLE event listener to the parent unordered list element and then delegate the event to the actual list item that was clicked. The list item that was clicked can be found in the _event_ object. Here is an example using plain JavaScript:


```js
var list = document.getElementById('tv-shows');

list.addEventListener('click', function(evt) {
  var clickedElement = evt.target;
  console.log(clickedElement);
  clickedElement.style.backgroundColor = 'yellow';
});
```

Here is a [JSBin](http://jsbin.com/IYikEre/1/edit).

jQuery abstracts this away from you behind the scenes, so all you have to work with is an additional paramter in the on() function.

```js
$('#tv-shows').on('click', 'li', function() {
	// this refers to the li element that was clicked
});
```

When the user clicks on #tv-shows, as long as the element they have clicked on matches the selector _li_ in the 2nd argument, then the callback function will be invoked. Now we have reduced the number of event listeners from 3 to 1. 

Another reason to use event delegation is when you are appending new elements to the DOM. Once event listners have been bound to elements in the DOM, any new elements won't receive these same event listeners and you may want them to.

See this [JSBin](http://jsbin.com/IYikEre/4/edit) not using event delegation. Now see this [JSBin](http://jsbin.com/IYikEre/2/edit) using event delegation.

### Immediately Invoked Function Expressions (IIFE)

__PROBLEM__: In JavaScript, any variables you create outside of a function are global. Global variables can be bad if you have too many of them. For example, what if jQuery created a global variable in their library called _i_. This is a common variable used in _for_ loops. Now in your own JS code, what if you also created the variable _i_ in a for loop. One could potentially clash with the other and cause unexpected behaviors. This would be a really tough problem to track down since you wouldn't see any JavaScript errors in the console.

__SOLUTION__: To mitigate this issue, JavaScript developers are advised not to create too many global variables. The jQuery library itself only introduces 2 global variables, that is, _jQuery_ and _$_. How did they do this? Surely they would need to create variables somewhere in the library. Well, in JavaScript, functions are the way to create privacy. If you create a variable in a function, that variable is only accessible from within that function. Knowing this, what if we take all of our code, and wrap it within one giant function? This way, we can ensure that any variables we create will be local to this one giant function and they wont clash with any other variables.

```js
var go = function() {
  // code here
};

go();
```

This works, but there we have introduced 1 global variable called _go_ which is a function. Not bad, but we can do better. Let's take this function, wrap it in parenthesis, and invoke it like so:


```js
(function() {
  // your code here
})();
```

This is an immediately invoked function expression (IIFE). This function is not saved to a variable so we have not created a global variable. We have created an anonymous function that gets invoked immediately.
