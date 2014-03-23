Custom Objects with Object Literals
==============

### Overview

* What are objects?
  * properties = variables
  * methods = functions
* Object literals & syntax (person example)
  * properties / values
  * reading properties
  * writing properties
  * objects as function args
  * jQuery .css()
  * properties containing functions
  * bracket notation

### What are objects?

Objects are containers for a collection of related properties (variables) and methods (functions). Examples of objects include:

Native objects include:

* the _document_ object
* the _window_ object

The document object contains methods like:

* getElementById()
* getElementsByTagName()
* querySelectorAll()

The window object contains methods like:

* alert() or window.alert()
* parseFloat() or window.parseFloat()
* parseInt() or window.parseInt()

### Object literals

To create an object, use the {} braces and create key-value pairs separated by commas.

Object keys must:

* start with a letter, dollar sign, or underscore
* only contain alphanumeric characters, underscores, and dollar signs
* cannot be a reserved word in JavaScript
* If you must use a reserved word or a special character for the key name, you must put the key in quotes

Object keys can contain:

* strings
* numbers
* booleans
* arrays
* functions
* other objects

```js
var david = {
  firstName: 'David',
  lastName: 'Tang',
  interests: ['web development', 'hockey', 'skateboarding']
};

// versus

var firstName = 'David';
var lastName = 'Tang';
var interests = ['web development', 'hockey', 'skateboarding'];
```

#### Objects as Function Arguments

* Object literals are great for passing into functions as an argument when a function takes multiple parameters. 
* This eliminates the need to specify the function arguments in a specific order.

```js
function getTweets(user, count, startDate, stopDate) {
  // the order of these params might be hard to remember
}

getTweets('BurnNoticeUSA', 10, '2013-05-12', '2013-09-22');
```

Instead, you can pass the data into the function as an object and the keys can be in any order you like:

```js
function getTweets(properties) {
  // properties.user
  // properties.count
}

getTweets({
  stopDate: '2013-09-22',
  count: 10,
  startDate: '2013-05-12',
  user: 'BurnNoticeUSA'
});
```

The .css() method in jQuery can also accept an object containing several style properties you want to set.

```js
$('#some-element').css({
  color: 'yellow',
  'background-color': 'black',
  fontSize: '18px'
});
```

### Objects containing functions

Objects can contain functions, which are called methods.

```js
var david = {
  firstName: 'David',
  lastName: 'Tang',
  interests: ['web development', 'hockey', 'skateboarding'],
  talks: function(words) {
    alert(words);
  }
};

david.talks('sup'); // alerts sup
```


### Bracket Notation

Objects key values can be accessed using dot notation as shown in the examples above. You can also access object key values using a bracket notation. Bracket notation is typically used when the key you want to access is a variable.

```js
var david = {
  firstName: 'David',
  lastName: 'Tang',
  interests: ['web development', 'hockey', 'skateboarding'],
  talks: function(words) {
    alert(words);
  }
};

david.firstName; // David
david['firstName']; // David

var property = 'firstName';
david[property]; // David

```
