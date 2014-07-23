Bookmark Favorites
==================

### Display a list of bookmarks

1. Create an array of 5 bookmark objects. Each bookmark object should have properties for the url, category, and date added (any string like 9/02/2014 or Sept 2, 2014).
2. Iterate over the list and render each bookmark object on the page displaying all properties

### validation object

1. Create a validation object with the following methods:
	* isURL(url), where url must contain http:// or https://
	* isValidCategory(category), where cetegory must be either tech, politics, or sports

```js
validation.isURL('http://google.com') // true
validation.isURL('david') // false
```

```js
validation.isValidCategory('tech') // true, can be tech, politics, or sports
validation.isValidCategory('a') // false
```

### Adding a bookmark

1. Create a form with inputs for date, category, and URL and a save button.
2. When the form is submitted, create a new bookmark object from the values in the form. Using the validation object, check if the category is valid and the url is valid. If so, push that object to the end of the bookmarks array. Otherwise, alert out a specific error message stating which properties have errors. See the Array .push() method for adding items to an array. Then, render that new bookmark object in the list if the validation passes.

### Restructuring the "Adding a bookmark" code

Now that you have some working code, let's restructure the part where you add the bookmark to the page.

```js
var bookmarks = [];
var myBookmarks = {
	init: function(selector, bookmarks) {
		this.$container = $(selector);
		this.bookmarks = bookmarks;
	},

	render: function() {
		// Fill this in
	}
};

myBookmarks.init('#bookmark-list1', bookmarks);
```

