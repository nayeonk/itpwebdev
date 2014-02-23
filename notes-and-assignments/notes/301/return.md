Return Statements
=================

Functions have the ability to return or output values. For example, parseFloat() takes a string like '11.2' as input, and returns the number data type 11.2 as the output. 

document.getElementById('some-id') takes an id as an input and gives back an HTML object as the returned output.

We can use the return keyword in our functions so that our function will return or output a value.

```js
function sum(a, b) {
	var sum = a + b;
	return sum;
}

var writtenScore = 90;
var practicalScore = 95;

var midtermScore = sum(writtenScore, practicalScore);
console.log(midtermScore); // 185
```

Above we have a sum function that returns the computed sum from the 2 input values.

As soon as the return statement in a function is executed, the function will stop executing and return a value you specify or undefined if you dont specify anything.

```js
function caculateTotalPrice(items) {
	var sum = 0;

	if (items.length == 0) {
		return 0;
	}

	for (var i = 0; i < items.length; i++) {
		sum = sum + items[i];
	}

	return sum;
}
```

In the example above, I pass an array of prices to a function calculateTotalPrice(). If there were no prices (the array was empty), it returns a price of 0. Otherwise, it continues executing the function and calculates the sum based on the array contents and returns the sum. You can see that the function doesn't even bother running the for loop if the items array is empty. It just simply returns the function with a value of 0.

```js
var items = [2, 10, 5, 3];
var totalPrice = calculateTotalPrice(items); // 20
```

```js
var items = [];
var totalPrice = calculateTotalPrice(items); // 0
```