Object Oriented JavaScript - Part 2
===================================

### Overview

* Objects review
	* properties and methods
* Creating multiple object instances using functions as constructors
	* also called custom data types, custom reference types, or "classes"
	* the keyword _this_
  * storing properties and functions on instance
  * instanceof operator
* Prototype pattern and inheritance
  * own properties vs inherited properties - hasOwnProperty()
  * property lookups
* Extending constructors
* Native constructors 
	* String, Number, Boolean, Array, Function, Object, RegExp, Date
	* Run 'String' in console
	* String.prototype.indexOf()
	* String.prototype.replace()
	* Array.prototype.push()
	* "Everything in JS is an object"
	* Extending native constructors   

### Functions as Constructors

Functions used as constructors are sometimes referred to as:

* constructor functions
* data types
* reference types
* classes

Functions can be invoked with the _new_ operator. When a function is invoked with the _new_ operator, this function is being used as a constructor. The function is constructing a new object.

Functions used as constructors are useful if you want to create many objects with the same properties and methods.

In the following example, I am creating 2 instances of the Person "class". 

```js
var Person = function(name, position) {
	this.name = name;
	this.position = position;
};

var david = new Person('David Tang', 'Lecturer');
var patrick = new Person('Patrick Dent', 'Senior Lecturer');
```

It is considered good practice to capitalize the first letter of a function used as a constructor so others know to invoke it using the "new" keyword.Functions intended to be used as constructors that are NOT invoked with the "new" operator will yield unintended results. 

When a constructor function is invoked with the _new_ keyword, the keyword _this_ refers to the current object that is being constructed. If invoked without _new_, _this_ will point to the global object, which is the _window_ object in the browser. This will end up creating properties on the window object also known as global variables, and as we learned before, you want to minimize the number of global variables in your applications.

### Methods

To create methods for your objects, assign a function to a property. In the example below, the _hi_ property is assigned a function. When _hi_ is called off of a Person object, the keyword _this_ will correspond to the newly constructed object.

```js
var Person = function(name) {
	this.name = name;
	
	this.hi = function() {
		console.log('Hi! my name is ' + this.name);
	};
};

var eminem = new Person('Slim Shady');
eminem.hi(); // Hi! my name is Slim Shady
```

This is one way you can create methods. However, this approach does have a downside. Every time an instance of Person is created, a new function is defined and assigned to the _hi_ property, thus taking up more memory. Wouldn't it be more efficient if we could define the _hi_ function once, and all object instances can share that same function definition? This is where prototypal inheritance comes in.

### Prototypal Inheritance

Methods can be shared across object instances via the _prototype_ property. This is called prototypal inheritance. Object instances inherit the properties and methods defined on the prototype property of the constructor function that created the object. That sounds like a mouthful so let's look at an example:

```js
var Person = function(name) {
	this.name = name;
};

Person.prototype.hi = function() {
	console.log('hi, my name is ' + this.name);
};

Person.prototype.sleep = function() {
	console.log(this.name + ' is sleeping.');
};

var david = new Person('David');
david.hi(); // hi, my name is David
david.sleep(); // David is sleeping

var patrick = new Person('Patrick');
patrick.hi(); // hi, my name is Patrick
patrick.sleep(); // Patrick is sleeping
```

Here we have defined a Person "class" or Person reference type. Every function in JavaScript has a property called _prototype_. This property is useful when you are using a function as a constructor. We are attaching 2 methods to Person.prototype, hi and sleep. Whenever a Person instance is created, the object constructed will inherit any properties or methods defined on Person.prototype.

Because anything on the prototype is shared across all object instances of that reference type, typically you see only methods being placed on the prototype and properties stored on the constructed object itself. Methods are shared behaviors so each object doesn't need its own unique method. However, each object does need to have its own unique set of properties. Properties defined on the an object itself and not the prototype are referred to as "own properties".

### Property lookups

So what happens if we define a property with the same name on an object and on the prototype? For example:

```js
var Person = function(name) {
	this.name = name;	
	this.walk = function() {
		console.log('moon walking');
	};
};

Person.prototype.walk = function() {
	console.log('normal walking');
};

var mj = new Person('Michael Jackson');
mj.walk();
```

So what will get logged to the console whe mj.walk() is called? 

The way objects work is that JavaScript will try and lookup a property on the object itself (an "own property"). If it exists, that property is used. If not, it will look at the prototype of the function that created the object.

So in the example above, walk() is found on the mj object itself so it will log "moon walking" to the console. If our Person function looked like this:

```js
var Person = function(name) {
	this.name = name;	
};
```

then "normal walking" would be logged to the console.

### Extending Reference Types

Let's say we have an Animal constructor.

```js
var Animal = function() {};
Animal.prototype.eat = function() {
	console.log('eating');
};
```

Now let's say we have a Cat constructor:

```js
var Cat = function() {};
Cat.prototype.meow = function() {};
```

Cat objects should also be able to eat. How can Cat objects inherit Animal methods. Clearly there is a hierarchy here because a cat __is an_ Animal. This is one way we do it:

```js
var Animal = function() {};
Animal.prototype.eat = function() {
	console.log('eating');
};

var Cat = function() {};
Cat.prototype = new Animal();
Cat.prototype.meow = function() {};
```

_prototype_ is just a unique object on every function. Because all cat instances inherit from the Cat.prototype object, we can set that Cat.prototype object equal to an an Animal object. That Animal object will inherit from Animal.prototype where eat() is contained.

Because inheritance in JS is kind of clunky, many libraries abstract this to make inheritance cleaner.

### Native Constructor Functions & their Shorthand (literal) Counterparts

JavaScript has several built in functions used as constructors. They are: String, Number, Boolean, Array, Function, Object, RegExp, and Date.

```js
var str = new String('some string');
// OR
var str = 'some string'; // literal sytax
```

```js
var age = new Number(26);
// OR
var age = 26; // literal sytax
```

```js
var person = new Object();
// OR
var person = {}; // literal sytax
```

Even though you can techincally create numbers, strings etc using the native constructors, it is almost always simpler and more straighforward to use the literal syntax.

### Extending Native Constructors

Native constructors can be extended. This is often considered a bad practice because if you for example create a custom String method and browsers in the future implement that method, then there can be lots of confusion among a team of developers and your code may not always work as expected. Despite that, it is still a good exercise and worthwhile to learn for understanding prototypes.

```js
String.prototype.dashify = function() {
	return this.replace(/\s/g, '-');
};
```



