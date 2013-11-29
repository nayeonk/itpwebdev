Rest Design Principles
======================

### What is REST?

* A simple way to define interactions between applications / programs
* In terms of the web, our applications want to interact with API's like Instagram. Instagram has defined an API which tells us developers how we can interact with it. The way they have designed to organize their API is by using REST.
* REST makes use of simple URL's to identify the things we want to operate on.
* Each URL identifies a __resource__
* Resources are thought of as __nouns__
* REST makes use of the request type or HTTP verb to dictate how a request should be handled
* Request types / HTTP Verbs
	* GET - should be used for __reading__ data
	* POST - creating records/data
	* PUT - updating records
	* DELETE - deleting records

HTML forms only support __GET__ and __POST__ requests. However, when interacting with 3rd party API's, we are typically doing this from either JavaScript or a server-side language like PHP. In either of these technologies, we can make requests using these other HTTP verbs.

So let's look at a small example. Imagine we a database that contains music, something like the iTunes library. We want to expose the list of artists through an API. I have left off the hostname in the examples below because the hostname is irrelevant in understanding how the API is organized but it is important to uniquely identify this resource over the web. When viewing API documentation, you will often see the hostname left off in examples of different resources.

__GET: /artists__ - return a collection of artists
__GET: /artists/eminem__ - return a single artist (eminem) 
__POST: /artists__ with data - create/store a song in the database
__PUT: /artists/eminem__ with data - update eminem with the data passed in the request
__DELETE: /artists/eminem__ - delete eminem from our library

So what about songs for an artist?

We could do something like:

__GET: /artists/eminem/songs__ - get all songs for eminem

OR

__GET: /songs?artist=eminem__ - get all songs for eminem but we pass the artist name in the query string

You may see either approaches when using different API's.

### SOAP vs REST

The alternative to RESTful API's is SOAP. REST basically makes use of simple URL's and HTTP verbs to define how we can interact with other systems / API's. The alternative to this approach is to use a complex system over HTTP like SOAP. In short, SOAP still uses HTTP and can be used as a way to communicate with other systems/programs, but it involves complex, bulky XML payloads and it is typically less easy to work with. Thus, REST has become more poprular over the years in API approaches.

### Extra Reading
* [A Beginner's Introduction to HTTP and REST](http://net.tutsplus.com/tutorials/other/a-beginners-introduction-to-http-and-rest/)
* [The Increasing Importance of APIs in Web Development](http://net.tutsplus.com/articles/news/the-increasing-importance-of-apis-in-web-development/)
* [Teach a dog to REST](http://vimeo.com/17785736) - Video