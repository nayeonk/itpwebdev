Resource - Demo jQuery Menus
========
Demo project - jQeury Sliding Drop-down Menus

This simple jquery-driven, animated drop-down menu example pre-supposed a basic knowledge of:

*	Basic CSS knowledge
*	Fundamental jQuery implementation, including using a "on" statement
*	Basic jQuery "chaining"
*	Introduces the jQuery selector of children()

Let's start by taking a two-level css-driven menu we similar to one we created earlier -- [jqmenu_1a.html](http://webdev.usc.edu/itp301/lecture_examples/jqmenu_1a.html)

Now in the CSS of that page, let's leave in the hover that changes the background color (the highlight effect) effect but REMOVE the hover style that changes the visibility by commenting it out. And then let's change the ul ul entry that sets the visibility to hidden and instead have it set the display to none. That would leave us with the following as the last three style entries:

```html
#menu ul ul{
	position: absolute;
	top: 30px;
	display:none;
}

#menu li a:hover{
	background-color: yellow;
}

/*
#menu ul li:hover ul{
	visibility:visible;
}
*/
```

And then lets put in the basic jQuery set up code. That should bring us to [jqmenu_1b.html](http://webdev.usc.edu/itp301/lecture_examples/jqmenu_1b.html)

Ok, now let's use jQuery to create the interactivity.

Now, let's put back in a jQuery "on" for mouseover that targets #menu li:

```html
	$("#menu li").on("mouseover",function() {

	});
```

Now if we try to do a slideDown on #menu ul ul ... that would slide down ALL menus (not just the sub-menu of the li highlighted).

```html
			$("ul ul").slideDown(1000)
```

And trying to slideDown this does not help us, as that is the li not the ul inside it:

```html
			$(this).slideDown(1000)
```

So what we actually can do is use a selector called .children() ... which targets items INSIDE of an item. Now if we just did $(this).children() that would represent ALL items inside the li we are hovering... but if we narrowed it down futher to $(this).children("ul) ... that would represent a ul INSIDE the current object (the li we hovered over. And then we can chain a slideDown() after the children selector. That gives us, inside our original "on":

```html
	$("#menu li").on("mouseover",function() {
		$(this).children("ul").slideDown(1000)
	});
```

And then finally, we just add a "on" to mouseout that does a slideOut:

```html
	$("#menu li").on("mouseout",function() {
		$(this).children("ul").slideUp(1000)
	});
```
The final version of this file is at [jqmenu_1c.html](http://webdev.usc.edu/itp301/lecture_examples/jqmenu_1c.html)

Now, this version only works with two-level menus. To enable a three-level animated menu that is driven by jQuery involves much more complicated object set up and manipulation.... for another time.
