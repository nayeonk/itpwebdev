Timers and Asynchronous Operations
==================================

### setTimeout

setTimeout(fn, delay) allows you to specify a function to run after X number of milliseconds

```js
var id = setTimeout(function() {
	// code here
}, 2000);
```

### setInterval

setInterval(fn, delay), is similar to setTimeout but allows a function to be run every X number of milliseconds. This can be really useful for building slideshows.

```js
var id = setInterval(function() {
	// code here
}, 2000);
```

### clearInterval, clearTimeout

Notice how setTimeout and setInterval returned some type of identifier? We can use that identifier to cancel a timer.

The following would stop the interval timer created above.

```js
clearInterval(id);
```

### Asynchronous

One thing to note about timers is that they are __asynchronous__. For example:

```js
var timerID = setTimeout(function() { /* function here */ }, 3000);
process1();
process2();
process3();
```

In the example above, when setTimeout is called, the browser doesn't wait for 3 seconds before continuing to execute the rest of the JS. Instead, it registers this function to be called 3 seconds later, but meanwhile process 1, 2, and 3 can still execute. Essentially, the browser is not locked and it can continue doing other things. 

Time Remaining example: http://jsbin.com/nayaceni/1/edit

