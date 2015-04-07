Promises
====

A promise is an object used to __schedule__ functions to be executed for when an asynchronous operation is completed. Promises represent the result of an asynchronous operation. 

As stated on [https://www.promisejs.org/](https://www.promisejs.org/), a promise object is in 1 of 3 different states:

* pending - The initial state of a promise.
* fulfilled - The state of a promise representing a successful operation.
* rejected - The state of a promise representing a failed operation.

A good analogy is if you think about how a promise works between 2 people. A kid can promise his parents that he will do the dishes. When he completes the dishes, his parents will give him his allowance. In this example, the kid doing the dishes is the asynchronous operation. He will get to the dishes at some point, but he isn't going to do it right now. Instead he returns a promise to the parents. The parents will schedule a function (giving the kid his allowance) with this promise when the promise is fulfilled. 

Let's look at an example using a callback first:

```js
expedia.findFlights({ to: 'Hawaii', from: 'Los Angeles' }, function(flights) {
	
});
```

And now with a promise:

```js
var promise = expedia.findFlights({ to: 'Hawaii', from: 'Los Angeles' });

promise.then(function(flights) {
	// render a view with flights
}, function() {
	// promise was rejected (something failed)
});
```

Initially, this change looks very minor. The benefit of the promise example however is now `expedia.findFlights()` has a return value, the promise, that represents the asynchronous operation. This value can be passed around and functions can be scheduled for execution via `then()` for when this promise resolves. In the example above, we could schedule multiple functions to the promise to be executed:

```js
var promise = expedia.findFlights({ to: 'Hawaii', from: 'Los Angeles' });

promise.then(function(flights) {
	// do one thing
});

promise.then(function() {
	// do another thing
});
```