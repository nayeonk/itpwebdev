Intermediate CSS Selectors
=====

Let's say you have this chunk of HTML in the body of your HTML document:

```html
<div id="container">
	<h1>My Todo List</h1>
	<div id="controls">
		<a href="#" class="btn">Save</a>
		<a href="#" class="btn">Reload</a>
	</div>
	<ul id="todo-list">
		<li class="todo">
			<span>Todo here</span>
			<a href="todo-details.html" class="btn">View</a>
		</li>
		<li class="todo">
			<span>Todo here</span>
			<a href="todo-details.html" class="btn">View</a>
		</li>
		<li class="todo">
			<span>Todo here</span>
			<a href="todo-details.html" class="btn">View</a>
		</li>
		<li class="todo">
			<span>Todo here</span>
			<a href="todo-details.html" class="btn">View</a>
		</li>
		<li class="todo">
			<span>Todo here</span>
			<a href="todo-details.html" class="btn">View</a>
		</li>
	</ul>
</div>
```

CSS Selectors to match list items:

```css
.todo { /* styles here */ }
li.todo { /* styles here */ }
#todo-list .todo { /* styles here */ }
#todo-list li.todo { /* styles here */ }
ul#todo-list li.todo { /* styles here */ }
#container ul#todo-list li.todo { /* styles here */ }
#container .todo { /* styles here */ }
```

### Exercises

Write the selector to...

1. match all .btn elements within the todo list
2. match all .btn elements within the controls section
3. match all span tags in the ul