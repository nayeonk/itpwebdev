Object Oriented JavaScript - Part 1
===================================

### Overview
* What are objects?
  * properties = variables
  * methods = functions
* Object literals & syntax (person example)
  * properties / values
  * properties containing functions
    * the keyword _this_
    * _this_ is determined at function invocation time
  * Iterating over object properties
  * Bracket notation
* Practical applications of object literals
  * Module pattern / application namespacing [todo list final](http://jsbin.com/uXAzeGi/2/edit), [In class version](http://jsbin.com/ENEwaHu/1/edit)
  * Passing objects as arguments

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


Object literals are great for preventing pollution of the global scope. For example, say you want to create a collection of configuration properties. You can create a config object rather than several global variables to house your configuration settings. Now, there is only one global variable _config_ versus the 3 created for each property in the example below:

```js
	var config = {
		url: 'some-url-here',
		apiKey: '90399492',
		ajaxRoute: 'some-ajax-route'
	};
	
	// versus
	
	var url = 'some-url-here';
	var apiKey = '90399492';
	var ajaxRoute = 'some-ajax-route';
```

#### Application Namespacing
* Object literals are great for namespacing your application. 
* You can organize units of code using nested object literals, similar to a directory structure.
* you can also create self-contained units that represent different widgets on the page or _modules_.

```js
var APP = {
  Utils: {}
};

APP.Utils.log = function() { /* implementation */ };
APP.Utils.isNumber = function() { /* implementation */ };

APP.Twitter = {
  lastFetched: '2013-09-25 08:15:32',
  fetchTweets: function() {},
  sortTweets: function(tweets) {
    /* implementation */
    return sortedTweets;
  };
};

APP.Player = {
  playlist: [ /* list of songs here */ ],
  play: function(song) { /* implementation */ },
  pause: function(song) { /* implementation */ },
  stop: function(song) { /* implementation */ }
};
```

#### Function Arguments
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
  'font-size': '18px'
});
```

### Bracket Notation

Objects key values can be accessed using dot notation as shown in the examples above. You can also access object key values using a bracket notation. Bracket notation is typically used when the key you want to access is a variable.

```js
  var config = {
    url: 'some-url-here',
    apiKey: '90399492',
    ajaxRoute: 'some-ajax-route'
  };
  
  config['url'];
  config['apiKey'];

  // bracket notation with a variable as a key
  var apiKey = 'apiKey';
  config[apiKey];
```

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

