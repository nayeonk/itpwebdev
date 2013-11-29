Cloud Data Stores
=================

Create a Todo list where Todo items get saved using Parse.

Each Todo item should the following fields:

* title (this is the description of the Todo)
* priority - a number 1 through 5, 5 being highest priority

Your Parse constructor function should be called 'Todo'

### Requirements

1. When the page loads, display any Todo items on the page sorted by priority in descending order. You might want to manually add a few Todo items in the data dashboard on Parse to test this first step.
2. Set up the HTML form to add a new Todo
	* There should be a text box at the top where a user can enter in a todo item
	* a select menu containing the numbers 1 through 5 for priority
	* a save button
3. When the form is submitted, the Todo item should be saved off to Parse and the new item should be appended to the main list of Todos on the page
4. Each Todo item in the list should have a 'delete button'. When delete is clicked, it should:
	1. first make a request to Parse and delete the data in the data store using the destroy method
	2. remove the Todo item from the list on success
5. Style the page so it looks presentable


### Tips

* You will need to bind each Todo item to an HTML element (like a list item) using [jQuery's .data() method](http://api.jquery.com/data/) so that when you click on delete, you have a way to reference the corresponding Todo

When you are finished, post the assignment to your classpage
