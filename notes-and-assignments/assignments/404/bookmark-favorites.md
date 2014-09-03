Bookmark Favorites
==================

### 1. The Data

Create an array of at least 3 bookmark objects. Each bookmark object should have properties 'url' and 'name'. For example, url would contain a value like 'http://facebook.com' and the name property would contain a value like 'Facebook'.

### 2. Displaying the Data

Iterate over the list and render each bookmark object on the page within an element _div#bookmarks_, displaying all properties. You might want to render it where you have a link and its href attribute points to the url and the display text is the name property.

You will break down this code into a few small functions and these functions will be grouped together in a custom object called _bookmarkList_. Anything related to the list of bookmarks on the page should be contained in the _bookmarkList_ object.

Create a _bookmarkList_ object using the following template as a starter. Notice how there is a property _$bookmarks_ that contains _#bookmarks_ element wrapped in jQuery. Use this property so that you don't have to reach back into the DOM for this node. Fill in each of the methods and then call the _render()_ method. You should see your list of bookmarks rendered on the screen.

```js
var bookmarkList = {
	$bookmarks: $('#bookmarks'),

	/**
	 * Takes a single bookmark object and creates some HTML
	 * @param {Object} bookmark
	 */
	createBookmarkHtml: function(bookmark) {
		// Your implementation
	},

	/**
	 * Renders an array of bookmark objects in #bookmarks
	 * @param {Array} bookmarks
	 */
	render: function(bookmarks) {
		// Your implementation
	},

	/**
	 * Appends a bookmark object to #bookmarks and the bookmarks array
	 * @param {Object} bookmark
	 */
	addOne: function(bookmark) {
		// Your implementation
	}
};
```

### 3. Creating a form to add a new bookmark

Create an HTML form on the page with text inputs to add a bookmark url and name.

### 4. Bookmark Validation Object

Create an object called _bookmarkValidation_. As the name suggests, this object will have methods responsible for validating a bookmark object. I have filled in the hasValidUrl() method for you.

```js
var bookmarkValidation = {
	/**
	* @param {String} url
	* @return {Boolean} True if url is valid, false otherwise
	*/
	hasValidUrl: function(url) {
		var regex = /^https?:\/\/.+$/;
		return regex.test(url);
	}
};
```

Create a method on _bookmarkValidation_ called _isNotEmpty()_. This method should take a string value as a parameter and return true if the length is greater than 0, and false otherwise.

```js
bookmarkValidation.isNotEmpty(''); // false
bookmarkValidation.isNotEmpty('a'); // true
```

Create another method on _bookmarkValidation_ called _passes()_. This method will take a _bookmark_ object as a parameter (an object containing properties _name_ and _url_) and check if the url property is a valid URL and the name property has at least 1 character using the _hasValidUrl()_ and _isNotEmpty()_ methods respectively. If both of these conditions pass, it will return true, and false otherwise.

```js
bookmarkValidation.passes({
	url: 'http://a',
	name: 'abc'
}); // true

bookmarkValidation.passes({
	url: 'http://', // invalid URL
	name: 'abc' // valid name
}); //false

bookmarkValidation.passes({
	url: 'http://a', // valid URL
	name: '' // invalid name
}); //false
```

### 5. Adding a bookmark

1. Bind a _submit_ event to the form and prevent the default form submission behavior.
2. Validate the user submitted bookmark data using _bookmarkValidation.passes()_. 
	* If the data is valid, call _bookmarkList.addOne()_. This should append the object to the bookmarks array and render the new bookmark. Also, empty the input fields on successful submission. 
	* If the validation fails, prepend an error message at the top of the form stating "The name field is required and the url field must be a valid URL". Make sure that if the form is submitted multiple times with an error, only 1 error message shows at the top.


