Lecture - Next/prev, toggle, parent/child, prepend/append
=================
jQuery object manipulation: Review next/previous. Toggle with code branches. Parent/child. Append and prepend.

Yuanbo's class: http://itpwebdev.herokuapp.com/starters/301/prepend_and_object.zip


### Review of next() and prev(). Diving into toggle(). Venturing into append() and prepend()

By now everyone should be very comfortable with basic jQuery syntax and use. Time to dive a bit deeper into moving between and inside of object...

#### next(), prev() and toggle()

The methods next() and prev() select next and previous elements on the page -- of the same level as the selected item. You can also add a selector as an argument.

So next() is the next element on the page (of any kind), but next("a") would be the next hyperlink on the page and next(".thumbnails") would be the next item with a class of "thumbnails".

So in our simple example from the past, when working with FAQs you might want to have all Answers collapses to start, but when you click on a particular FAQ question you want the correspond answer (the next object on the page) to open/reveal.

Open up [next_toggle_start.html](http://webdev.usc.edu/itp301/lecture_examples/next_toggle_start.html).

So we could bring to all .question objects such that the next item (the .answer) on the page reveals:

```js
 $(".question").bind("click", function(){
 	$(this).next().slideDown();
  });
```
  
That works, but then it does not "close" when you click it a second time. What we really want is a "toggle". I.e. on the first click it opens, then on the next click it closes, then opens, then... to alternate between two actions (opening and closing).

So traditionally (or at least previously) we have done this by say setting up an if/else block that checks if the object is hidden, and if so shows it, and if not hides it. We have also previously seen toggle() used as a show/hide command to simply hide and reveal (no animation) an object. But toggle can ALSO be used to alternate between two sets of code.

So the old use of toggle() would be:

```js
$(".question").bind("click", function(){
	$(this).next(".answer").toggle(2000);
});
````

But this newer use of toggle actually has us call it off the TRIGGER object INSTEAD of a bind:

```js
	 $(".question").toggle();
```

In this case there is NO bind command at at all (the toggle will expect it is triggered by a click on the parent object). And then inside the toggle method we set up TWO functions. Basically something like:
```js
	 $(".question").toggle(//code1, //code2);
```

And inside the toggle, for each parameter/branch we set up direct functions that contain the code for each (alternating routine like...

```js
	 $(".question").toggle(function() {
				// code1
			}, function(){
				//code 2	
	});
```

Ok, so our final custom toggle might be something like:
```js
	 $(".question").toggle(function() {
				// code1
				$(this).next(".answer").slideDown(2000);
			}, function(){
				//code 2	
				$(this).next(".answer").slideUp(2000);
	});
```

To see the final version of this page go to [next_toggle.html](http://webdev.usc.edu/itp301/lecture_examples/next_toggle.html).

 
#### parents and children

So any object that is located inside an object is considered a child of that object. So for instance, a hyperlink that is located inside of a div has that div as its parent.

So $(this).parent() would refer to the containing/outer object. And $(this).parent("div") would refer to a surrounding/outer div.

Similarly children() selects the direct children (objects inside) the current object. So for instance, if you had a div with paragraphs inside it... $("div").children() would select all objects inside the div, but $("div").children("p") would only select the paragraphs inside the div.

The children() method is often used with cascading lists/menus for interactivity. For instance, if I have a set of embedded ordered lists, with the second levels "hidden", I could bind event handlers to each top level lists to show their children lists.

For an example of this see this starter page -- [jq_children_start.html](http://webdev.usc.edu/itp301/lecture_examples/jq_children_start.html)

Look at the page. See how the .level2 objects (lists) are all INSIDE of .level1 objects (list items)?

First we will turn off the visibility of the .level2 objects. Then bind to .level1 so that mouseOver does a fadein on all children:

```js
$(".level2").hide();
$(".level1").bind("mouseOver",function(){
	$(this).children().fadeIn();
});
```

And then bind on mouseOut does fadeOut. Note: we don't have to specify which objects inside ... but we could. I.e. in this example the following further definition of children would work fine too:

```js
$(".level1").bind("mouseOut",function(){
	$(this).children("ul").fadeOut();
});			
$(this).children("ul").fadeIn();
```

To see this in action you can go to [jq_children_finish.html](http://webdev.usc.edu/itp301/lecture_examples/jq_children_finish.html)


 
#### Adding elements to a document

Up to this point with jQuery we have been dealing with altering existing objects in a page. But what about adding or moving elements/tags to a page?

The append() and prepend() methods add objects or blocks of html to an existing object on a page. The object you call them _off_ of sets the insertion point.

For example, let's say you have a div IDed as "box1". If you wanted to add a new paragraph to the TOP of the div (inside of the div), you could write:

```js
$("#box1").prepend("<p>New text</p>");
```

The above would add a new paragraph INSIDE the div #box1 at the very top. Append of course does the opposite -- adds some new code/objects to the bottom/end of an object. So the code below would add the same paragraph at the end of the div:

```js
$("#box1").append("<p>New text</p>");
```

Ok so first, let's take a look at a very simple example of this. Open up [jq_append_start.html](http://webdev.usc.edu/itp301/lecture_examples/jq_append_start.html).

Add the following two lines of jQuery inside the ready block:

```js
	$("#box1").prepend("<p>New text</p>");
	$("#box2").append("<p>New text</p>");
```
	
See how prepend added that new paragraph to the top of the first box, before it's existing content? And how the second line appended the new paragraph to the bottom/end of the second box? You can see this version at [jq_append.html](http://webdev.usc.edu/itp301/lecture_examples/jq_append.html).

There are also two tags named appendTo() and prependTo()... they basically just work in reverse syntax. So their versions of the commands we just did would be:

```js
	$("<p>New text</p>").prependTo("#box1");
	$("<p>New text</p>").appendTo("#box2");
```

See how in that example the code to be inserted is at the front of the jQuery statement and the target (to be inserted into) is at the end inside the appendTo() or prependTo() command.

Ok, now let's move onto a more complex example...


 
Open [jq_prepend_start.html](http://webdev.usc.edu/itp301/lecture_examples/jq_prepend_start.html).

Take a look at this page. It is relatively similar to the bookmark project from earlier in the semester. In terms of its structure, what is most important is to note that the of links is #collegelist. So if we wanted to add new (li) entries to it, we could prepend or append to add new entries to the top or bottom (add objects into the top or bottom of the ul).

So as a test, let's bind to the #addtotop bottom to add static/fake li entries:

```js
	$("#addtotop").bind('click', function(){
		$("#collegelist").prepend("<li>Fake link</li>")
	});
```

See that it adds new li entries to the top (inside of) the ul?

Ok, now we will put together some workflow from the page. When someone presses the Add to Top bottom we will use the text from the two input boxes and build up a block of html that contains an li and an anchor tag an text inside the li, to add a new link entry to the top of the list.

So we will delete our test code above and replace it with:

```js
	$("#addtotop").bind('click', function(){
		link = "<li><a href='" + $("#collegeurl").attr("value") + "'>"
		link += $("#collegename").attr("value") + "</a>"
		$("#collegelist").prepend(link)
	});
```

See how it is building a variable named "link" that has a a new list item that contains a hyperlink, the value from the appropriate URL box, then the title of the link, then a close to the anchor, and then a close to the li. Then it takes that set of html code (stored in the link variable) and prepends it to the top/beginning of the ul object #collegelist.

Ok so our second buttom code is basically the same except we are appending the new li to the end of the list:

```js
	$("#addtobottom").bind('click', function(){
		link = "<li><a href='" + $("#collegeurl").attr("value") + "'>"
		link += $("#collegename").attr("value") + "</a></li>"
		$("#collegelist").append(link)
	});
```

You can take a look at this finished example at [jq_prepend.html](http://webdev.usc.edu/itp301/lecture_examples/jq_prepend.html).


 
Facebook prepend demo

Ok, finally on to a slightly more complex demo that simulates how entries are added to Facebook "Walls".

First open up [facebook_start.html](http://webdev.usc.edu/itp301/lecture_examples/facebook_start.html). In terms of the structure, notice that the core comments section is a div #commentsSection and inside that are divs with the class .comment.

So to add a new "comment" we would just need to insert a new .comment div and place it at the beginning of the #commentSection div.

Now the prepend and prependTo commands we learned previously targets an object and adds a new object/code inside the targeted object at its beginning.

So if we were to build a new .comment div, then target commentSection and prependTo it ... that would place the new div as the first element (the first of the .comment divs) inside #commentSection.

So we will build up he new html for the div, and then use prependTo to take that new html code and add it to the top of #commentSection:

```js
	openingDiv = '<div class="comments"><a href="#" class="hidePost">X</a>'
	yourComment = document.getElementById('typeHere').value;
	closingDiv = '</div>';

	$(openingDiv+yourComment+closingDiv).prependTo('#commentSection').hide().fadeIn(600);
```

So what this does is build some html -- a div with an anchor tag, X, then the comment then a close div -- and then it takes that block and prepends it INSIDE of #commentSection and then immediately hides (the new comment div) and fades it in.

Testing this we can add lots of new posts.

And then finally, we want to "enable" the X so that when you click an "X" it removes (fadeout) THAT post. So if each X is an anchor named .hidepost ... the we could target them through "a.hidepost". And their parent is the div containing them... so we could fade out their parent div:

```js
	$('a.hidePost').bind('click', function() {
		$(this).parent().fadeOut(500);
	});
```

But in testing this notice it works for the original comment divs in the page... but does NOT work for new ones added to the page after it is loaded.

An alternate to bind is "live", which continues to look for objects (matching the criteria) even after the page loads... so it can affect NEW objects added to the page. So our new "X" routine simply changes .live() for .bind() ...

```js
	$('a.hidePost').bind('click', function() {
		$(this).parent().fadeOut(500);
	});
```

To see the final version of this page go to [facebook.html](http://webdev.usc.edu/itp301/lecture_examples/facebook.html);