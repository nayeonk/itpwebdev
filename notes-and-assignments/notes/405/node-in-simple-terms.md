Introduction to Node.js
=======================

Node.js allows us to write JavaScript on the server. It is defined as:

> "a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an __event driven, non-blocking I/O model__ that makes it lightweight and efficient..."

But what do all those terms really mean? Let's look at how JavaScript is handled in the browser first.

### JavaScript in the Browser

Node.js provides a JavaScript platform on the server that is __event driven__ and __asynchronous__ much like the browser. Let's look at an example using jQuery.

```js
$.ajax({ 
	url: '/some-resource', 
	success: function() {
		console.log('ajax request finished');
	} 
});
console.log('hello');
console.log('world');
```

In the example above, what might the output be? In the console you would see something like:

```
hello
world
ajax request finished
```

That AJAX call is performing an I/O operation and is said to be __non-blocking__. While the AJAX request is doing its thing, the rest of the code can continue to execute. The __blocking__ version of this would result in:

```
ajax request finished
hello
world
```

In the __blocking__ scenario, the AJAX request blocks the rest of the code from executing until it is finished. You can imagine how poor of a user experience this would be if for every I/O operation the user had to wait around until it finished before continuing to use the application. No other user interactions or code execution could take place.

##### What is I/O?

So I mentioned that the AJAX request is a type of I/O. What is that? I/O stands for __Input/Output__. Computers are based on input and output. Think about when you type on your keyboard. You are giving your computer some input, and that input is displayed on the screen as output. In the context of a web application, say your application is communicating with a database. Your application is giving the database some Input in the form of a SQL statement and getting some returned output in the form of database results.

That AJAX request is performing I/O where we make a request to the server (giving it input) and we get a response back (getting the output).

##### Non-blocking

AJAX requests are I/O operations that don't __block__ the execution of the script (unless configured to). It happens __asynchronously__ (outside the main script execution). 


### Browser Event Loop & Threads

I/O operations like AJAX requests happen outside of the __browser event loop__. A browser event loop is a __thread__ created by the browser and it waits for events and processes them.

As stated on [techterms.com](http://www.techterms.com/definition/thread):

> "What do a t-shirt and a computer program have in common? They are both composed of many threads! While the threads in a t-shirt hold the shirt together, the threads of a computer program allow the program to execute sequential actions or many actions at once."

Because __the browser is single threaded__, it can only execute one thing at a time. If we made our AJAX requests blocking, the browser event loop could not process any other user events and our applications would not be very responsive.

Now that we understand non-blocking I/O in the browser, let's look at JavaScript on the server.

### JavaScript on the Server

To be continued...

=============

Asychronous programming

* 

http://css.dzone.com/articles/quick-introduction-how-nodejs

* Heavy IO applications benefit well from this, whereas CPU intensive applications will not.
* However, most web development is IO intensive, so that's generally an OK tradeoff.

Apache spawns a new thread for each request

http://stackoverflow.com/questions/5201852/what-is-a-thread-really

A thread is an execution context, which is all the information a CPU needs to execute a stream of instructions.

Suppose you're reading a book, and you want to take a break right now, but you want to be able to come back and resume reading from the exact point where you stopped. One way to achieve that is by jotting down the page number, line number, and word number. So your execution context for reading a book is these 3 numbers.

If you have a roommate, and she's using the same technique, she can take the book while you're not using it, and resume reading from where she stopped. Then you can take it back, and resume it from where you were.

Threads work in the same way. A CPU is giving you the illusion that it's doing multiple computations at the same time. It does that by spending a bit of time on each computation. It can do that because it has an execution context for each computation. Just like you can share a book with your friend, many tasks can share a CPU.

On a more technical level, an execution context (therefore a thread) consists of the values of the CPU's registers.

Last: threads are different from processes. A thread is a context of execution, while a process is a bunch of resources associated with a computation. A process can have one or many threads.


### Resources

* http://www.techterms.com/definition/thread