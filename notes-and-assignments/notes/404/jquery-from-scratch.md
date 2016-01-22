jQuery From Scratch
===================

### Overview

Understanding how jQuery is built is useful for the following reasons:
	
* understand the JS language better
* understanding common JavaScript patterns used by other libraries
* Helps you leverage and extend jQuery more
* If you ever have to build a custom JS library for whatever reason, you know of one good way


Building parts of jQuery from scratch demonstrating the following:

* jQuery is a constructor function that doesn't require the new keyword
* arguments keyword in functions
* method chaining
* for in loops
* static methods vs instance methods

Review of "this"? (slides)

* global functions
* calling methods off an objects
* reassigning object methods
* new keyword
* call() and apply()

Implementing jQuery's .on() method and using .call() and .apply()

### jQuery

* jQuery itself is a function used as a constructor
* You can access jQuery either using _jQuery()_ or _$()_
* jQuery doesn't force you to invoke it using the new operator like we've seen with the constructor functions we've learned about. If you don't do it, it will invoke jQuery with the new operator for you behind the scenes.
* jQuery plugins are functions/methods stored on _jQuery.prototype_. _jQuery.fn_ is just an alias for _jQuery.prototype_

### The 'arguments' keyword

All functions have access to a variable called _arguments_. It is like an array where it contains a list of all the function's argument values. Technically it is not an array but it has a lot of similarities to an array, like having a _length_ property which makes it easy to iterate over in a _for_ loop.

```js
function hello() {
	console.log(arguments);
	console.log(arguments.length)
}

hello('David', 29, 'something else');

// ['David', 29, 'something else']
// 3
```

### Method Chaining

jQuery implements a pattern called _method chaining_ or _fluent interfaces_ as known in some other languages. Let's look at an example.

In jQuery we can chain method calls together. This makes for great usability of the library and readability. Typically each method call returns the set of elements operated wrapped up in an instance of jQuery.

```js
$('p')
	.css('color', 'red')
	.css('background-color', 'yellow')
	.addClass('active')
	.removeClass('something');
```

In this example we are continually operating the same jQuery object containing paragraph elements. Without method chaining, this might look like:

```js
var $p = $('p');
$p.css('color', 'red');
$p.css('background-color', 'yellow');
$p.addClass('active');
$p.removeClass('something');
```

Sometimes a method might return a different instance of jQuery containing a different set of elements:

```js
$('ul')
	.css('margin', 0)
	.find('li')
		.css('color', 'blue');
```

In this example, the initial jQuery object contains all unordered list elements. Then we filter it down to all list-item elements within those unordered lists. When we call _.find()_, jQuery is returning another instance of jQuery derived from the first instance that was created.

### Iterating over objects with for...in loops

To iterate (or loop) over an object, we use the for...in construct.

```js
var config = {
  url: 'some-url-here',
  apiKey: '90399492',
  ajaxRoute: 'some-ajax-route'
};

for (var key in config) {
  console.log(key, config[key])
}
```

### Functions have methods

Unlike other programming languages, a function in JavaScript is an object with its own properties and methods. It sounds very weird but, a function can have methods. We'll look at this more in a bit. Functions are objects created from the _Function_ constructor function.

```js
var hello = new Function("alert('hello')");
hello();
```

This lends itself to poor readability and maintainability so the _Function_ constructor function is rarely used. But this illustrates how functions are objects. As we have learned, objects have properties and methods. If we define our function using a "function declaration" like the following, we can see it has a name property.

```js
function sup() {}
console.log(sup.name); // "sup"
```

However, if we define our function using the "function expression" style, it doesn't have a name property.

```js
var sup = function() {};
console.log(sup.name); // ""
```

As mentioned earlier, functions can have methods. These methods exist on _Function.prototype_ and include: .bind(), .call(), and .apply() to name the common ones. These methods control what the value of _this_ is when a function is called.

```js
var david = { name: 'David Tang' };
var name = 'Patrick Dent';

function hello(greeting) {
	console.log(greeting + this.name);
}

// Ex 1
hello('Hi my name is '); // Hi my name is Patrick Dent 

// Ex 2
hello.call(david, 'Hi my name is '); // Hi my name is David Tang

// Ex 3
hello.apply(david, ['Hi my name is ']); // Hi my name is David Tang
```

In the example above, we have a _hello()_ global function. If you call _hello()_, the value of this corresponds to the window object. Think of it kind of like the global scope owns this hello function. We have a global variable _name_ on the page, so _this.name_ corresponds to _window.name_ which equals "Patrick Dent".

If I want to change the value of _this_ inside _hello()_, I can use either _.call()_ or _.apply()_. These behave very similarly.

In example 2, I can invoking _hello()_ with a context of the _david_ object and specifying any parameters after. Anything passed to _.call()_ after the first parameter becomes the arguments of the function you are calling.

Example 3 is just like example 2 except that it takes an array as the 2nd parameter. This is handy when you have an unknown number of parameters to call a function with.

#### When would I ever use .call() and .apply()?

These methods can be very useful if you are creating a function that takes a user-specified function and you want to control what the value of _this_ is in that user specified function. For example, using jQuery you pass your function to jQuery's _.on()_ function and they execute it for you when a click event happens. They control what _this_ is so that it becomes the element that the event happened on.

```js
$('div').on('click', function() {
	// "this" corresponds to the div that gets clicked
});
```



