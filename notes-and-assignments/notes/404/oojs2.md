Object Oriented JavaScript - Part 2
===================================

### Overview

* Objects review
	* properties and methods
	* typically nouns
* Creating multiple object instances using functions as constructors
	* also called custom data types, custom reference types, or "classes"
	* constructors are like templates or blueprints for creating objects
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

### Constructor Functions

Functions used as constructors are sometimes referred to as:

* constructor functions
* constructors
* data types
* reference types
* classes

Functions can be invoked with the _new_ operator. When a function is invoked with the _new_ operator, this function is being used as a constructor. Why is it called a constructor? The function is _constructing_ a new object.

Functions used as constructors are useful if you want to create _many_ objects with the same properties and methods. A function, when used as a constructor, is like a template which is used as a basis for creating 1 to many objects.

In the following example, I am creating 2 instances of the Person constructor. 

```js
var Person = function(name, position) {
	this.name = name;
	this.position = position;
};

var david = new Person('David Tang', 'Lecturer');
var patrick = new Person('Patrick Dent', 'Senior Lecturer');
```

When a constructor function is invoked with the _new_ keyword, the keyword _this_ refers to the current object that is being constructed (more on this later). 

If a constructor is invoked without _new_, _this_ will point to the global object, which is the _window_ object in the browser. This will end up creating properties on the window object (also known as global variables), and as we learned before, you want to minimize the number of global variables in your applications.

It is considered good practice to capitalize the first letter of a function used as a constructor so others know to invoke it using the "new" keyword. You don't have to, but it is a very common convention.

### Methods

To create methods for your objects, assign a function to a property. In the example below, the _hi_ property is assigned a function. When _hi_ is called off of a Person object, the keyword _this_ will correspond to the newly constructed Person object.

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

### Storing Methods on the Prototype

Above is one way you can create methods. However, this approach does have a downside. Every time an instance of Person is created, a new function is defined and assigned to the _hi_ property of that object. So if we create 5 Person objects, they will all have their own hi methods that behave the EXACT same. Having 5 copies of a function that does the same thing takes up more memory, especially if you are dealing with hundreds of objects. Wouldn't it be more efficient if we could define the _hi_ function once, and all object instances can share that same function definition? This is where prototypal inheritance comes in.

Methods can be shared across object instances via the _prototype_ property which is just an object. Object instances inherit the properties and methods defined on the prototype property of the constructor function that created the object. This is called __prototypal inheritance__. That sounds like a mouthful so let's look at an example:

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

Here we have defined a Person constructor or Person "class". Every function in JavaScript has a property called _prototype_ which is just an almost empty object. This property is useful when you are using a function as a constructor. We are attaching 2 methods to Person.prototype, hi and sleep. Whenever a Person instance is created, the object constructed will inherit any properties or methods defined on Person.prototype.

### Redefining the Prototype Object

We could have written the example above like this:

```js
var Person = function(name) {
	this.name = name;
};

Person.prototype = {
	constructor: Person,

	hi: function() {
		console.log('hi, my name is ' + this.name);
	},

	sleep: function() {
		console.log(this.name + ' is sleeping.');
	}
};
```

Rather than adding new methods to Person.prototype in several statements, we can just redefine the Person.prototype object. There is one caviat though. Remember when I said that the prototype is an "almost empty" object? Technically it has a property on it named _constructor_ that points back to its constructor function. If we override the prototype by setting it to a completely new object, we _should_ reset this _constructor_ property. Many times this might not make a difference, especially if you never use that _constructor_ property, but it is recommended just to be safe.

### What should you put on the prototype?

Because anything on the prototype is shared across all object instances of that constructor, typically you see only methods being placed on the prototype and properties stored on the constructed object itself. Methods are shared behaviors so each object doesn't need its own unique method. However, each object does need to have its own unique set of properties. Properties defined on the an object itself and not the prototype are referred to as "own properties".

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

So what will get logged to the console when mj.walk() is called? 

The way objects work is that JavaScript will try and lookup a property on the object itself (an "own property"). If it exists, that property is used. If not, it will look at the prototype of the function that created the object.

So in the example above, walk() is found on the mj object itself so it will log "moon walking" to the console. If our Person function looked like this:

```js
var Person = function(name) {
	this.name = name;	
};
```

then "normal walking" would be logged to the console because a walk() method was not found on the object itself (it wasnt an own property), so it next looked on the prototype where it did find a walk() method.

### Inheritance

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

Cat objects should also be able to eat. Clearly there is a hierarchy here because a cat __is an_ Animal. How can Cat objects inherit Animal methods? This is one way we can do it:

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

Because inheritance in JS is kind of clunky, many libraries abstract this to make inheritance a little more digestable.

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



