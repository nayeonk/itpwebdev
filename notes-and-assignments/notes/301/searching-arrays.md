Searching Arrays
================

### Overview

* Loops review
* break statement

The __break__ statement is used to prematurely stop a loop. For instance, you could have a conditional (if) statement INSIDE the looop that if certain conditions are met the loop 'breaks' (it stops repeating). This is typically used in routines that are looping through information to find a specific piece or set of data.

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
