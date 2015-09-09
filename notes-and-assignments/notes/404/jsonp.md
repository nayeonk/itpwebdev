JSON & JSONP
============

__The code in this post no longer works because Facebook changed their API but the content is still relevant.__

### What is JSON?

JSON stands for JavaScript Object Notation. JSON is a data exchange format that __is valid JavaScript__. JSON is made up of JavaScript objects, arrays, strings, booleans, numbers, and null.

Here is some valid JSON from Facebook's API giving us information about Coca-Cola:

https://graph.facebook.com/cocacola

### Differences between JSON and JavaScript Objects

A JS object created using an object literal might look like this:

```js
{
  name: 'Fiona',
  age: 1.5,
  siblings: ['Chestnut', 'Biscuit']
}
```

The equivalent of this JavaScript object formatted to JSON requirements is:

```js
{
  "name": "Fiona",
  "age": 1.5,
  "siblings": ["Chestnut", "Biscuit"]
}
```

__JSON keys__ - Notice the double quotes around keys and strings? Object keys must be in double quotes to be valid JSON whereas in JavaScript object keys can optionally be in quotes.

__JSON values__ - As stated on the [JSON site](http://www.json.org/), a value can be a string in double quotes, or a number, or true or false or null, or an object or an array. These structures can be nested.

### Getting the JSON data into your application

So how do you get that JSON data into your application so you can work with it? There are a few different options:

1. JSONP
2. AJAX
3. AJAX with CORS (Cross Origin Resource Sharing)

### Same Origin Policy

AJAX requests are limited by the [Same Origin Policy](http://en.wikipedia.org/wiki/Same_origin_policy), which essentially says that you cannot make requests to resources outside of your current domain.

To get around this, we use a server-side proxy. For example, rather than our browser making a request to Twitter's API, our page will make a request to a PHP script on our server, which then makes a request to Twitter's API. This latter approach requires 2 requests, 1 request from the browser to our server side script, and another request from our server side script to Twitter's API. Wouldn't it be efficient if we could reduce the number of requests to 1 by having our browser directly access Twitter's API?

### JSONP

JSON with Padding (JSONP) is a technique used to circumvent the same origin policy in AJAX.

If you recall, the script tag is not restricted by the same origin policy. For example, we include jQuery on our pages by referencing the jQuery source hosted on Google's Content Delivery Network (CDN).

With this in mind, why don't we dynamiclaly create a script element on our page that references the JSON served from another domain?


```js
var script = document.createElement('script');
script.src = "https://graph.facebook.com/cocacola";
document.getElementsByTagName('head')[0].appendChild(script);
``` 

Scripts injected into the page dynamically like this are __asynchronous__ requests like AJAX.

The problem with this is that once the script is appended to the head of our page, we have no way of accessing the data. You can think of this as one giant object literal sitting in a script tag, but the data hasn't been saved to a variable so we cannot access it.

To utilize the returned data from the dynamic script injection, a lot of web services offer a JSONP option. JSONP requests allow us to specify a function we want to execute with the data passed to it when we receive a response.

Typically this is achieved by passing a query string parameter named 'callback' to the JSONP service, like this:

__https://graph.facebook.com/cocacola?callback=myFunction__

```js
	var script = document.createElement('script');
	script.src = "https://graph.facebook.com/cocacola?callback=myFunction";
	document.getElementsByTagName('head')[0].appendChild(script);
``` 

The API has to allow for this functionality, but if they do, they will return JSON data wrapped within a function call named whatever your function name is, which in this case is 'myFunction'.

When the request returns, the response will look like something like this:

```js
myFunction({"name": "Coca Cola", "likes": 98463, "about": "some text here"})
```

You will need to have myFunction predfined on the page accessible in the __global__ scope, but this allows us to utilize all the JSON data that we are requesting.





