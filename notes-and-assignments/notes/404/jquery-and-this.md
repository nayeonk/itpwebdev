jQuery and 'this'
=======

### Example 1

```js
$('#save').on('click', function() {
	// 'this' refers to the save button DOM node with an id of 'save'
	// 'this' is the same as document.getElementById('save')
	// 'this' is the same as document.querySelector('#save')
});
```

When passing a callback function to jQuery's 'on' method, jQuery manipulates what 'this' refers to for your convenience. In the example above, 'this' refers to the save button DOM node.


### Example 2

```js
var Form = {
	setup: function() {
		$('#save').on('click', function() {
			
		});
	},

	validateForm: function() {

	}
};

Form.setup();
```

Within the click handler I want to call `this.validateForm()`. However, in the last example we learned that `this` in a jQuery callback function refers to the DOM node that the event was triggered on. Here is how we can get around this:

```js
var Form = {
	setup: function() {
		var self = this;

		$('#save').on('click', function() {
			self.validateForm();
			// this still refers to the button #save	
		});
	},

	validateForm: function() {

	}
};

Form.setup();
```

A popular convention is to preserve the value of `this` in a variable called `self`, `that`, or `me`. This way, we can access the original `this` context from within the callback function that jQuery manipulates.

