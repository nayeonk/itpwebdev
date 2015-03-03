REST and Web APIs
======================

### What is an API?

> "In computer programming, an application programming interface (API) is a set of routines, protocols, and tools for building software applications. An API expresses a software component in terms of its operations, inputs, outputs, and underlying types." - Wikipedia

* Application Programming Interface
* In short, it's a way to interact with other software.
* In terms of the web, our applications want to interact with APIs like Facebook, Google Maps, Twitter, and Instagram. Instagram, for example, has defined an API which allows developers to get access to Instagram functionality and data.
* A user interface is an easy, visual way for users to work with an application. An application programming interface is similar but geared towards developers so that they can work with another application from the application they are building. 


### What is REST?


* REST makes use of simple URL's to identify the __resources__ we want to operate on
* Resources are thought of as __nouns__
* REST makes use of the URL and request type (HTTP verb) to signify what operation should happen on a particular resource
* Request types / HTTP Verbs
	* GET - should be used for __reading__ data
	* POST - creating records/data
	* PUT - updating records
	* DELETE - deleting records

HTML forms only support __GET__ and __POST__ requests. However, when interacting with APIs, we are typically doing this from either JavaScript or a server-side language like PHP. In either of these technologies, we can make requests using these other HTTP verbs.

Imagine we have a database that contains music, something like the iTunes library. We want to expose the list of artists through an API. I have left off the hostname in the examples below. When viewing REST API documentation, you will often see the hostname left off.

Here we have an __artist__ resource. Notice how the URLs are very simple?

<table border="1" cellpadding="4" cellspacing="0">
	<tr>
		<td>GET</td>
		<td>/artists</td>
		<td>return a collection of artists</td>
	</tr>
	<tr>
		<td>GET</td>
		<td>/artists/5</td>
		<td>Return a single artist with a unique identifier of 5</td>
	</tr>
	<tr>
		<td>POST</td>
		<td>/artists</td>
		<td>Create an artist with the data passed in the request</td>
	</tr>
	<tr>
		<td>PUT</td>
		<td>/artists/5</td>
		<td>Update artist 5 with the data passed in the request</td>
	</tr>
	<tr>
		<td>DELETE</td>
		<td>/artists/5</td>
		<td>Delete artist 5</td>
	</tr>
</table>

### SOAP vs REST

An alternative to REST APIs is SOAP. REST basically makes use of simple URLs and HTTP verbs to define how we can interact with other systems / APIs. SOAP also uses HTTP and can be used as a way to communicate with other systems/programs, but it involves complex, bulky XML payloads and it is typically less easy to work with. Thus, REST has become more poprular over the years in API approaches.

### RESTful Web Services in PHP

We can communicate with API's and fetch data from the server side using PHP. In PHP, we have 2 options.

##### 1. file_get_contents()

* We can use the function [file_get_contents()](http://php.net/manual/en/function.file-get-contents.php) to __GET__ the contents of files. 
* These files can be on the same server as the script that makes the call or the file can be on a remote server, like if we were making a call to an API.

```php
$url = 'https://graph.facebook.com/cocacola';
$contents = file_get_contents($url); // this variable now contains the string of JSON
```

##### 2. cURL library

Another approach is to use the [cURL library](http://php.net/manual/en/book.curl.php).

```php
$url = 'https://graph.facebook.com/cocacola';
$session = curl_init($url);
curl_setopt($session, CURLOPT_RETURNTRANSFER, true);
$json = curl_exec($session);
curl_close($session);
```

* Although the cURL library approach requires more lines, it provides many options for making requests.
* Sometimes file_get_contents() is disabled on a server for security reasons in which you can use cURL instead

### Instagram's REST API

1. Create an Instagram account
2. Visit the [Instagram API home page](http://instagram.com/developer/)
3. [Register a new client (application) with the API](http://instagram.com/developer/clients/manage/). Take note of your client ID and client secret. Dont share these with anyone.
4. Click on the "Endpoints" tab to see the various API endpoints

Base API endpoint: __https://api.instagram.com__

Here are a few full API endpoints that I have found more interesting, but check out the API docs for more.

#### Tag Endpoints

Get all instagrams for the hash tag #catsofinstagram

* GET /tags/catsofinstagram/media
* https://api.instagram.com/v1/tags/catsofinstagram/media/recent?client_id=???

Search for tags on Instagram similar to #catsofinstagram

* GET /tags/search (not entirely following the noun-only convention but not API is perfect)
* https://api.instagram.com/v1/tags/search?q=catsofinstagram&client_id=???


#### Media Endpoints

Search for media in a given area.

https://api.instagram.com/v1/media/search?lat=34.079962&lng=-118.243318&client_id=???

#### Authentication

As per the [API documentation](http://instagram.com/developer/authentication/):

> "For the most part, Instagram’s API only requires the use of a client_id. A client_id simply associates your server, script, or program with a specific application. However, some requests require authentication - specifically requests made on behalf of a user. Authenticated requests require an access_token. These tokens are unique to a user and should be stored securely. Access tokens may expire at any time in the future."

Thus, when viewing the API docs, you might see some example endpoints that pass an access token. Often times you can replace the access_token query string parameter with a client_id parameter, as I have done in the examples above.


### Extra Reading
* [A Beginner's Introduction to HTTP and REST](http://net.tutsplus.com/tutorials/other/a-beginners-introduction-to-http-and-rest/)
* [The Increasing Importance of APIs in Web Development](http://net.tutsplus.com/articles/news/the-increasing-importance-of-apis-in-web-development/)
* [Teach a dog to REST](http://vimeo.com/17785736) - Video