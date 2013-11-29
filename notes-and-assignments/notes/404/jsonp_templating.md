JSONP, Client-side Templating, Facebook Graph API
=====

### Overview

* Asynchronous Requests
* AJAX limitations - same origin policy
* JSONP
	* Facebook Graph API JSONP endpoint
* Generating HTML onthe client-side
	* HTML strings
	* Native DOM methods
	* Client-side templating libraries 

### Same Origin Policy
AJAX requests are limited by the [Same Origin Policy](http://en.wikipedia.org/wiki/Same_origin_policy), which essentially says that you cannot make requests to resources outside of your current domain.

To get around this, we use a server-side proxy. For example, rather than our browser making a request to Twitter's API, our page will make a request to a PHP script on our server, which then makes a request to Twitter's API using file_get_contents() or CURL. This latter approach requires 2 requests, 1 request from the browser to our server side script, and another request from our server side script to Twitter's API. Wouldn't it be efficient if we could reduce the number of requests to 1 by having our browser directly access Twitter's API?

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

myFunction({"name": "Coca Cola", "likes": 98463, "about": "some text here"})

You will need to have myFunction predfined on the page accessible in the __global__ scope, but this allows us to utilize all the JSON data that we are requesting.


### Generating HTML on the client-side

1. You can create strings of HTML and concatonate your dynamic data. However, with complicated HTML chunks, this can become quite messy and hard to maintain.
2. Alternatively, we can generate HTML using native DOM methods / properties like:
	* document.createElement()
	* element.appendChild(node)
	* document.removeElement()
	* element.innerHTML
Again, this can get kind of long and hard to maintain with complicated HTML chunks. It is also hard to see what the HTML fragment looks like at a quick glance
3. Client-side templating libraries allow you to create HTML chunks with placeholders for your dynamic data. These libraries allow you to pass data to a template which will replace all instances of the placeholders in a template with the actual data themselves. Templating libraries include:
	* [Handlebars](http://handlebarsjs.com/)
	* [Underscore JS library](http://underscorejs.org/) - more than just templating
	* [Mustache](https://github.com/janl/mustache.js/)

* Client side templates can be created by placing HTML fragments within a script tag with a __type="template"__ as an attribute.
* Scripts without a type specified default to "text/javascript". With a type attribute set to 'template' (or anything the browser can't interpret), the browser will not recognize this type and won't evaulate what is inside the script tag as Javascript. 
* This makes for a good place to store HTML templates. Note that you cannot place HTML templates inside external script references. They must be internal script blocks. Other common script type attribute values for templates include "text/template", 'handlebars/template', etc.


