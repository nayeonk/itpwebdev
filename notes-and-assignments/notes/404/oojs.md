#Object Oriented JavaScript

##Overview
* Objects review
* Object instances via constructor functions
* Native constructor functions (String, Number, Boolean, Function, Object, RegExp)
* Shorthand for native objects
* Custom constructor functions or data types
* The prototype property
* fluent interfaces / method chaining
* jQuery insights

### What are objects?
Objects are containers for a collection of related properties (variables) and methods (functions). Examples of objects include:

* native objects include:
	* the _document_ object
	* the window object
	* elements you select from the DOM 
* Everytime you wrap a set of elements within jQuery, you are creating a unique object with a set of properties and jQuery methods
* On Google Maps, objects are created for:
	* map markers [example](http://www.housingmaps.com/) 
	* the entire map
	* info windows that open for map markers

### Native Constructor Functions & their Shorthand Counterparts
```js
	var str = new String('some string');
	// OR
	var str = 'some string';
```

```js
	var age = new Number(26);
	// OR
	var age = 26;
```

```js
	var person = new Object();
	// OR
	var person = {};
```

__See Ch 10, 11, 12 in JavaScript Enlightenment for more on native object constructors__


### Constructor Functions

Functions can be invoked with the _new_ operator. When a function is invoked with the _new_ operator, you are creating an object instance of that constructor. In the following example, I am creating an instance of the Person constructor (or data type) and assigning it to the variable _david_. It is considered good practice to capitalize the first letter of a constructor function to differentiate it from other functions, but it is not required.

```js
	var Person = function(name) {
		this.name = name;
	};
	
	var david = new Person('David');
```

Constructor functions that are invoked without the new operator will yield unintended results. When a constructor function is invoked with the _new_ keyword, the keyword _this_ refers to the current instance that is created. If invoked without _new_, this will point to the head object, which is the Window object in the browser. This will endup creating global properties on the window object, and as we learned before, global variables are evil!

You can give objects methods too, like below. The keyword _this_ within object methods refers to the current object instance.

```js
	var Person = function(name) {
		this.name = name;
		
		this.sayHello = function() {
			alert('hello! my name is ' + this.name);
		};
	};
	
	var david = new Person('David');
```

Although you can do this, this is considered bad practice. Every time an instance is created, a new function is defined and assigned to the sayHello property, thus taking up more memory. Wouldn't it be more efficient if we could create the sayHello function once, and all object instances can share that same function definition? You can!

### Prototypal Inheritance

Methods can be shared across object instances via the _prototype_ property. Object instances inherit the properties and methods defined on the prototype property of the constructor function that created the object.

```js
	var Person = function(name) {
		this.name = name;
	};

	Person.prototype.sayHello = function() {
		alert('hi, my name is ' + this.name);
	};
	
	Person.prototype.sleep = function() {
		alert(this.name + ' is sleeping.');
	};
	
	var david = new Person('David');
	david.sayHello(); // hi, my name is David
	david.sleep(); // David is sleeping
	
	var patrick = new Person('Patrick');
	patrick.sayHello(); // hi, my name is Patrick
	patrick.sleep(); // Patrick is sleeping
```

### jQuery
* jQuery itself is a custom constructor function
* jQuery doesn't force you to invoke it using the new operator. If you don't do it, it will invoke jQuery with the new operator for you behind the scenes.
* jQuery plugins are functions/methods stored on the prototype property of the jQuery constructor function. _fn_ is just an alias for jQuery's prototype property

### Reading
* [JavaScript Enlightenment](http://www.javascriptenlightenment.com/)
	* Ch 1,2,3 

