AJAX
====

### Overview

* What is AJAX?
	* applications of AJAX in the real world
	* response formats
	* Same origin policy
* What is an asynchronous request? (vs synchronous requests)
* AJAX in jQuery
* The promise pattern
* AJAX w/ JSON
* AJAX loaders
* XMLHttpRequest constructor
* Event listeners on AJAXed content using event delegation

### What is AJAX?

* AJAX is not a programming language
* AJAX is a __technique using JavaScript__ that allows for updating parts of a web page without reloading the whole page. AJAX is a way to interact and exchange data with the server through JavaScript
* AJAX stands for Asynchronous JavaScript and XML
* Asynchronous means that you can make HTTP requests to the server without making the user wait around for a response. Essentially, the browser is not locked and it can continue doing other things (like processing other JS).
	* Other asynchronous requests include JSONP requests, setTimeouts, and setIntervals
* XML used to be the defacto format for data being transferred. Responses can be whatever format you like. A lot of times, dynamic templates are returned (server-side generated HTML) or JSON data.

### Examples of AJAX

* Google Search autosuggestions
* posting on a Facebook wall
* panning Google maps
* Gmail (versus Gmail without JS)

### Why is AJAX useful?

* More responsive interface. User feels that changes are instantaneous
* Reduced waiting time
* Less traffic

### AJAX with jQuery

jQuery has a _static method_ called _ajax()_ that takes in a configuration object as a parameter.

```js
$.ajax({
	url: 'some/path/to/script.php',
	data: {},
	type: 'GET',
	success: function() {},
	error: function() {}
});
```

In the AJAX example above, one issue is that we can only attach one callback function per AJAX request. What if we want to perform several operations, like update different sections of our UI? Well we could do it all within that one success callback function but that can become unwieldy and difficult to maintain as the functionality changes or the site grows. The next approach is to use the __promise__ pattern.

### The Promise Pattern

The promise pattern allows us to attach _multiple_ callback functions to an AJAX request. Or in other words, a promise is used to __schedule__ functions to be executed for when an asynchronous operation is completed. A promise is an object that represents the result of an asynchronous operation. As stated on [https://www.promisejs.org/](https://www.promisejs.org/), a promise object is in 1 of 3 different states:

* pending - The initial state of a promise.
* fulfilled - The state of a promise representing a successful operation.
* rejected - The state of a promise representing a failed operation.

```js
var promise = $.ajax({
	url: 'example.php',
	type: 'GET',
	data: {
		name: 'David',
		school: 'USC'
	}
});

promise.done(function(response) {
	$('#ajaxResponse').html(response);
});

promise.done(function(response) {
	$('#ajaxResponse').css('color', 'red');
});

promise.fail(function() {
	alert('Aw snap! Something went wrong!');
});
``` 

As you can see, we can attach multiple SUCCESS callbacks to this promise by calling the __done()__ method on the promise object. Likewise, we can call __fail()__ to specify callback functions to run when an AJAX request fails. An ajax request might fail if there was a problem on the backend and the HTTP code returned was not 200.

Interally, the promise object will store all of your functions and when the AJAX request SUCCESSFULLY finishes, it will execute all of them.

### AJAX w/ JSON

In the previous examples we have been using HTML as the response format. What if we have a PHP script that fetches some JSON data and we want to send JSON back down to the browser? jQuery allows for another property to be passed into the $.ajax configuration object called __dataType__ and we give it a value of __json__.

```js
var promise = $.ajax({
	url: 'facebook-page-fetch.php',
	type: 'get',
	dataType: 'json'
});
```

### AJAX with Plain JavaScript

* create an XHR object using XMLHttpRequest constructor
* __onreadystatechange__	stores a function (or the name of a function) to be called automatically each time the __readyState__ property changes
* __readyState__	holds the status of the XMLHttpRequest. Changes from 0 to 4: 
	* 0: request not initialized 
	* 1: server connection established
	* 2: request received 
	* 3: processing request 
	* 4: request finished and response is ready
* __status__:	200: "OK", 404: Page not found
* __responseText__ property holds the response data as a string

### References
* [jQuery ajax method](http://api.jquery.com/jQuery.ajax/)
* [AJAX loaders](http://ajaxload.info/)
* [https://www.promisejs.org/](https://www.promisejs.org/)