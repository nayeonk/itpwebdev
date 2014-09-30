Building jQuery
===============

Use the following starter code: https://bitbucket.org/skaterdav85/building-jquery/src

To test each scenario, I have set up an automated test suite with several unit tests for what is required for this assignment. We will get to unit testing later in the semester, but for this assignment, just open up SpecRunner.html in a browser. You should see all red. As you start implementing your homework in _src/my-jquery.js_, you will see the tests pass and turn green (you have to refresh SpecRunner.html). By the end of the assignment, you should see "Passing 11 specs" and ALL green.

### 1. .html() instance method

This method sets the innerHTML on 1 to many elements, or retrieves it from the first element in the matched set. Given the following HTML:

```html
<div><a href="#">Box 1</a></div>
<div><a href="#">Box 2</a></div>
<div><a href="#">Box 3</a></div>
```

#### Setting the innerHTML on 1 to many elements

```js
$('div').html('<strong>sup</strong>');
```

results in:

```html
<div><strong>sup</strong></div>
<div><strong>sup</strong></div>
<div><strong>sup</strong></div>
```

Make sure this method is chainable when it is setting the innerHTML.

#### Getting the innerHTML

When getting the innerHTML, it retrieves the innerHTML on the first element in the matched set and returns the contents as a string.

```js
var html = $('div').html();
console.log(html); // "<a href="#">Box 1</a>"
```

### 2. .css() instance method

Build out the .css() method from what was started in class so that it can also take an object of CSS properties. Make sure it is still chainable.

```js
$('#groceries li')
	.css({ color: 'green' })
	.css({ 'background-color': 'yellow', 'font-size': '26px' });
```

### 3. .attr() instance method

Create the _.attr()_ instance method. This should be able to both read and write attributes. If the method is being used in write mode, it should be chainable.

```html
<a href="index.html" title="Home Page">Home</a>
<a href="index.html" title="About Page">About</a>
<a href="index.html" title="Contact Page">Contact</a>
```

To read an attribute:

```js
$('a').attr('title'); // Home Page
```
This should only read the attribute from the first element in the matched set.

To write an attribute:

```js
$('a')
	.attr('href', 'http://google.com')
	.attr('title', 'Google');
```

results in:

```html
<a href="http://google.com" title="Google">Home</a>
<a href="http://google.com" title="Google">About</a>
<a href="http://google.com" title="Google">Contact</a>
```

### 4. jQuery.each() static method

Recreate the _.each()_ static method. _.each()_ is an iterator method that makes it easy to loop over arrays, objects, and array-like objects such as _arguments_.

#### Used with an array:

```js
$.each([1, 2, 3], function(index, number) {
	console.log(number);
});

// 1
// 2
// 3
```

#### Used with objects:

```js
var cat = { name: 'Spot', age: 10, sex: 'male' };
$.each(cat, function(key, value) {
	console.log(key, value);
});

// name, Spot
// age, 10
// sex, male
```

#### Optional

Make the value of _this_ equal to the _value_ in each iteration.