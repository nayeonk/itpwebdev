Searching Arrays
================

### Overview

* Loops review
* break statement
* searching arrays
* array push
* single responsibility

The __break__ statement is used to prematurely stop a loop. For instance, you could have an if statement INSIDE the loop that states, if certain conditions are met the loop 'breaks' (it stops repeating). This is typically used when you are searching through an array to find a specific piece of data.

Below we are searching for a book title in a books array and we set a global variable bookSearch equal to the book we are searching for and stop the loop since we already found the book we are looking for.

```js
var books = [
	'Introduction to HTML and CSS',
	'Head First JavaScript',
	'Object Oriented JavaScript',
	'JavaScript Bible',
	'PHP Object Oriented Solutions',
	'PHP Design Patterns',
	'Head First Java'
];

var bookSearch;

for (var i = 0; i < books.length; i++) {
	if (books[i] === 'Head First JavaScript') {
		console.log(i);
		bookSearch = books[i];
		break;
	}
}

console.log(bookSearch); // Head First JavaScript
```

Lets do a similar example where we search the array for anything that contains 'javascript' in the title.

```js
var books = [
	'Introduction to HTML and CSS',
	'Head First JavaScript',
	'Object Oriented JavaScript',
	'JavaScript Bible',
	'PHP Object Oriented Solutions',
	'PHP Design Patterns',
	'Head First Java'
];

function searchBooks(term) {
	var bookSearch = '';

	for (var i = 0; i < books.length; i++) {
		var book = books[i].toLowerCase();

		if (book.indexOf(term.toLowerCase()) > -1) {
			console.log(i);
			bookSearch += '<div>' + books[i] + '</div>';
		}
	}

	return bookSearch;
}


var bookSearchHtml = searchBooks('javascript');
document.body.innerHTML = bookSearchHtml;
```

In this example, we search the books arrays for a term. To make our search flexible and case insensitive, we need to lower case both the book title as we loop over them and the term that we are searching for. If we find a book match, we build up a local variable called bookSearch as a string of divs. We return that string of HTML and then insert into the body of the page.

### Array push

What if we want to simply return an array of book results based on our search instead of the matching book results formatted in divs? We can achieve this using a method on array objects called __push()__.

The array push method allows us to push items to the end of an array. This is very useful if you need to define an empty array (like for search results), and as you are searching you store off the items that match a search into this results array. Using this method we can __push__ items to the end of the array without having to figure out the end of the array and inserting the item.

```js
var books = [
	'Introduction to HTML and CSS',
	'Head First JavaScript',
	'Object Oriented JavaScript',
	'JavaScript Bible',
	'PHP Object Oriented Solutions',
	'PHP Design Patterns',
	'Head First Java'
];

function searchBooks(term) {
	var bookSearch = '';
	var results = [];

	for (var i = 0; i < books.length; i++) {
		var book = books[i].toLowerCase();

		if (book.indexOf(term.toLowerCase()) > -1) {
			results.push(books[i]);
		}
	}

	return results;
}

var bookResults = searchBooks('javascript');
console.log(bookResults);
```

Now that we have an array of books that match our search, we can write another function that takes this array and renders it as HTML. Now you might ask, why didn't I just generate the HTML as I was searching for them like in the previous example? Yes this could work. However, a good practice in programming is to make functions do one thing, and one thing only. Or in other words, functions should have __a single responsiblity__. In the example above, one function is responsible for searching through books. Then we can have another function solely dedicated to taking an array of books and rendering them on the page. Again, you dont have to do this. But as you start building more complex functionality, start to think about breaking up your functions so that they each have a single responsiblity.

