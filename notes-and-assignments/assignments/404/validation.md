OOJS - Validation Library
=========================

For this assignment, I would like you to create a validation library that validates a form before it is submitted. If the form fields validate, then the form submission can proceed. If not, there should be an error message in red at the top of the form. For the action of the form, you can leave it empty, use a USC form script, or specify another HTML page. We are not going to worry about the form processing in this assignment.

### Form requirements
* Your form must have fields for: name, email, message
* Your form must have a button with the text "Submit"
* When the form is submitted, it should trigger the validation process
* The validation rules are:
	* the name field must have at least 3 character
	* email must have an @ sign
	* message field must have at least 10 characters

### Module requirements
You will create 2 modules within the __App__ namespace.

#### ContactForm module
The first module should have the following namespace:

```js
	App.ContactForm = {};
```

The ContactForm module should have the following methods:

__initialize(selector)__

* selector parameter is a selector for the form
* This should call __bindEventListeners()__ to set up the event listener on the form. 
* You can also do other initialization tasks like set up properties that reference the form elements for name, email, and message. This way, you are caching these DOM selections for better performance.

__bindEventListeners__

* set up an event listener on the form for the submit event
* When the submit event occurs, it should call the validate() method

__validate(fields)__

* This method should check to see if the values in each of the form fields are valid values. This function will need to call App.Validation methods.
* This function should return true if all of the fields pass validation, false otherwise
* This function should take in fields which is an object literal containing the data for the form fields

For example, when validate is called, it might look like this:

```js
	self.validate({
		email: email,
		name: name,
		message: message
	});
```

__showErrors()__

* displays an error message in the form if the validation fails


#### Validation module
The second module will be a Validation module with the following namespace:

```js
	App.Validation = {};
```

This module's responsibilty is to provide a handful of data validation functions. It should be generic enough for reuse in other projects. To keep it generic, your Validation module might have methods like:

* validEmail(email) - returns true if email is a valid email address, false otherwise
* isLongEnough(val, numberOfCharacters) - returns true if the length of _val_ is >= _numberOfCharacters_ 


### To kick off everything...

You should be able to enable the form validation with one line of code after all of your modules are set up.

```html
	<script>
		App.ContactForm.intialize('#contact-form');
	</script>
```


### Useful methods/functions
* $.trim() function on jQuery to remove white space on both sides of a string
* You can [listen for the submit event on form objects](http://api.jquery.com/submit/).
* [e.preventDefault()](http://api.jquery.com/event.preventDefault/) - prevent a form submission via javascript

### Tips
I would recommend building up the App.Validation library first. You can test these functions directly in the console by opening it up and making calls to the Validation object. For example:

```js
App.Validation.validEmail('dtang'); // should return false
App.Validation.validEmail('dtang@usc.edu'); //should return true
```

Once you know these work, you can move on to the App.ContactForm module.
