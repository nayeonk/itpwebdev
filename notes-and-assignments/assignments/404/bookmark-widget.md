Bookmark Widget
==================

### 1. The Data

Create an array of at least 3 bookmark objects and store it in a global variable called `bookmarks`. Each bookmark object should have properties `url` and `name`. For example, url would contain a value like 'http://facebook.com' and the name property would contain a value like 'Facebook'.

### 2. Your HTML page

Create an HTML page with an empty `div#bookmarks`.

### 3. Displaying the Data

Create an object called `bookmarkWidget` with a method `render`.

The `render` method should be passed the global variable `bookmarks` and the selector `#bookmarks`. In this `render` method, loop over the array of bookmarks and create an unordered list of bookmark links. When `bookmarkWidget.render(bookmarks, '#bookmarks')` is called, the DOM of the page should contain this:

```html
<div id="bookmarks">
	<ul>
		<li><a href="http://twitter.com">Twitter</a></li>
		<li><a href="http://usc.edu">USC</a></li>
	</ul>
</div>
```

Everything that the `render` method needs is passed as arguments. This makes the `bookmarkWidget` object reusable in case you ever wanted to render multiple bookmark widgets on the page.

### 3. Refactor

Next, refactor your render method so that the HTML creation for each bookmark is extracted out into its own method `createBookmarkHtml`. When `createBookmarkHtml` is called, be sure to use `this`, not `bookmarkWidget`. Here is a template:

```js
var bookmarkWidget = {
	/**
	 * Takes a single bookmark object and creates some HTML
	 * @param {Object} bookmark
	 */
	createBookmarkHtml: function(bookmark) {
		// Your implementation
	},

	/**
	 * Renders an array of bookmark objects in #bookmarks
	 * @param {Array} bookmarks - the data
	 */
	render: function(bookmarks, containerSelector) {
		// Your implementation
	}
};
```

### Optional

Namespace your bookmarkWidget object under `App`.

### Submission

Submit your assignment to the TA (dongyanc@usc.edu) and myself (dtang@usc.edu) as a zip file.

<!--

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

Try testing this method out in the Chrome console.

```js
bookmarkValidation.isNotEmpty(''); // false
bookmarkValidation.isNotEmpty('a'); // true
```

Create another method on _bookmarkValidation_ called _passes()_. This method will take a _bookmark_ object as a parameter (an object containing properties _name_ and _url_) and check if the url property is a valid URL and the name property has at least 1 character using the _hasValidUrl()_ and _isNotEmpty()_ methods respectively. If both of these conditions pass, it will return true, and false otherwise.

Try testing this method out in the Chrome console.

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



### 4. Adding a bookmark

1. Create a method called `setup` on `bookmarkWidget` and within its definition, bind a _submit_ event to the form and prevent the default form submission behavior.
2. 

-->


