Rules for 'this' in the browser in non-strict mode
==================================================

The value of 'this' is determined when a function is __invoked__ based on how that function was called. There are a few rules to follow to determine what _this_ is. 

1. Plain function calls
2. Method calls on objects
3. The "new" operator
4. Calling functions with Function.prototype.call() and Function.prototype.apply()
5. Function.prototype.bind

### 1. Plain function calls

```js
function hi() {
	console.log(this);
}

hi(); // window
```

### 2. Methods calls on objects

```js
var person = {
	hi: function() {
		console.log(this);
	}
};

person.hi(); // person
```

```js
var person = {
	hi: function() {

		function hi() {
			console.log(this);
		}

		hi();

		console.log(this);
	}
};

person.hi(); // will yield ...

// window
// person
```

Notice how we have a nested function in our _hi_ method? When you have nested functions like this, they take on the default value for _this_, which is the _window_ object in the browser.

```js
var person = {};

function hi() {
	console.log(this);
}

person.hi = hi;

person.hi(); // person
hi(); // window
```

### 3. The "new" operator

TBD

### 4. Calling functions with Function.prototype.call() and Function.prototype.apply()

TBD

### 5. Function.prototype.bind

TBD

