Reusable Accordion Widget
=========================

For this assignment, I want you to take your accordion lab and turn it into a reusable accordion widget __using the constructor pattern and the prototype pattern__. You should create this widget in such a way that 2 (or more) accordion widgets can coexist on a single page and not clash with each other.

The following code should work on 1 single page such that #accordion1 does not clash with #accordion2. Use the following HTML and JS. You can copy the CSS from the [previous lab](http://itpwebdev.usc.edu/404/assignments/accordion).

### HTML

```html
<div id="accordion1">
	<div class="label">Label 1</div>
	<div class="content">This is some content for label 1</div>
	<div class="label">Label 2</div>
	<div class="content">This is some content for label 2</div>
	<div class="label">Label 3</div>
	<div class="content">This is some content for label 3</div>
</div>

<br /><br />

<div id="accordion2">
	<div class="label">Label 1</div>
	<div class="content">This is some content for label 1</div>
	<div class="label">Label 2</div>
	<div class="content">This is some content for label 2</div>
	<div class="label">Label 3</div>
	<div class="content">This is some content for label 3</div>
</div>
```

### JavaScript

```js
	var accordion1 = new ITP.Widgets.Accordion({
		el: '#accordion1',
		speed: 300
	});

	var accordion2 = new ITP.Widgets.Accordion({
		el: '#accordion2'
	});
```

### Other Requirements
* If a speed is not passed into the constructor function, it should default to 0.
* You should break up your code so that you have at least 2 methods using the prototype pattern
* Use event delegation where you bind the click event listener on the root node (div#accordion1 and div#accordion2)
* Add your own optional property to accordion1. Your Accordion constructor should not break if your property is not passed in.

When you are finished, post the assignment to your classpage for grading.

