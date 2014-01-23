Introduction to Node.js
=======================

Node.js allows us to write JavaScript on the server. It is defined as:

> "a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an __event driven, non-blocking I/O model__ that makes it lightweight and efficient..."

But what does that really mean in simple terms? Let's look at how JavaScript is handled in the browser first.

### JavaScript in the Browser

Node.js provides a JavaScript platform on the server that is __event driven__ and __asynchronous__ much like the browser. Let's look at an example.

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

That AJAX call is performing an I/O operation and is said to be non-blocking.

##### What is I/O?

I/O stands for __Input/Output__. Computers are based on input and output. Think about when you type on your keyboard. You are giving your computer some input, and that input is display on the screen as the output. In the context of a web application, say your application is communicating with a database. Your application is giving the database some Input in the form of a SQL statement and getting some returned output in the form of database results.

##### Non-blocking

Let's get to the next part. That AJAX request is non-blocking. As the code executes linearly, the line that performs the AJAX call doesn't wait until the I/O operation is completed before the rest of the code will execute. That I/O operations doesn't __block__ the execution of the script.

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