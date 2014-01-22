Lecture - Intro to jQuery
=========================

Introduction to capabilities and syntax of jQuery

**********
Save to your computer [helloworld1.html](http://webdev.usc.edu/itp301/lecture_examples/helloworld1.html) and [jq_effects1a.html](http://webdev.usc.edu/itp301/lecture_examples/jq_effects1a.html)
**********

### "jQuery for Designers" -- a cursory overview of jQuery from a non-programming level

To borrow from an intro page from the docs.jquery.com site:

> Let's pretend for a minute that there's this mythical widget thingy that we can put into our markup. 
It will do all sorts of clever things in a very easy manner without our having to be a programming wiz, 
and it won't damage our nice clean markup. 

jQuery is a pre-written library of Javascript routines and syntactical structure that allows for rapid scripting of transformative, interactive elements to a web page without substantive scripting or programming knowledge... although we will see later in the semester that a basic knowledge of the underlying Javascript WILL empower and expand the reach and scope of jQuery.

### What is the scope and capabilities of jQuery?

* Isolate and manipulate HTML elements/objects through CSS-like selectors
* Edit, change and add html AND css properties of objects
* Transform object changes over time as "effects" and "animations"
* Delay and tie execution of above to sync with "events" rather than running immediately on page load

To start we are going to take a basic, non-scripting approach to jQuery. We will explore jQ as a fundamental tool for interactivity, without plumbing much of the programming theory behind it.   
  
As the semester progresses, and we later get into the underlying language of Javascript on which jQuery is built, we will repeatedy double-back through jQ with an eye toward its capabilities as we expand our knowledge and perspective on client-side Web development. 
  
  
### jQuery - the fundamental basics

To start, ANY page that you want to run jQuery in must have two basic components:

#### 1. Load in jQuery  
	
```html
<script src="http://code.jquery.com/jquery.js"></script>
```   
	
#### 2. Wait until the page is ready

Set up a separate script block with jQuery code to "wait" until page load, and then inside that code the jQuery instructions for the page will run.

```html
<script>
   // When the page is ready
   $(document).ready(function(){
   
	// HERE write the jQuery code to be run after page load     
	
   });
</script>
```
	
Ok, so let's take a basic Hello World page that contains some h1, paragraphs, etc. Open the starter helloworld1.html page.

Now first, we need to add the following into the HEAD of that page:
```html
<script src="http://code.jquery.com/jquery.js"></script>
<script>
   // When the page is ready
   $(document).ready(function(){
   
	// HERE write the jQuery code to be run after page load     
    
   });
</script>
```

Re-run the page, and notice nothing is different. All we have done is "set up" the jQuery in the page. The line that starts with "// HERE ..." is a "comment" block... which we can replace with "real" jQuery instructions.

So inside that block we can write some jQuery. A basic jQuery instruction consists of a reference to an object a period and then what action you want to perform on that object. I.e. OBJECT.ACTION; Now, the syntax looks much more complicated than that, but a straight jQ instruction can be that simple. Take a look at the jQuery line:

```js
jQuery("#secondp").hide();
```

So what that instruction does is target the object with an ID of secondp and run the "hide" command on it... such that the second paragraph is hidden.

Now, we are going to type lots of jQuery commands, and instead of having to start all of our statements with jQuery there is a shortcut we can use with $ instead of jQuery. So lets change the above statement to:

```js
 $("#secondp").hide();
```
Before we dive deeper into jQuery's capabilities, let's pause to ask "why jQuery"...


### Why jQuery? -- compatibility

jQuery is a great language to use because it is very streamlined and simple. But beyond that, it boast incredible compatibility across most browsers and operating systems.

So in the example above, how did it "hide" the paragraph IDed as secondp? Does it set the css property of visibility to hidden? Does it set the opacity to 0? Does it change the display to none?

You don't know... and DON'T NEED to know.

The "magic" of jQuery is that the underlying library, written in Javascript, handles all of the behind-the-scenes details including COMPLETE cross-browser compatibility. So whereas with CSS3 we would have to worry about whether a particular browser might know certain CSS commands like transform or transition, similar functions if implemented through jQuery will work in every browser (well every browser that supports Javascript)!

Ok, so lets look at some of the "actions" jQuery can perform on objects...


###jQuery Effects and Manupulations -- a starter list of jQ "actions"

Below is a partial list of the core/main jQuery "actions":

```
addClass()
	Add a CSS class to an object
append()
	Add content to the end of an element
attr()
	Retrieve or set the value of an attribute of an HTML object
css()
	Retrieve or set the value of a CSS property of an element
fadeIn()
	Fade in an object
fadeOut()
	Fade out an object
fadeToggle()
	Alternate fading in or out an object
hide()
	Make an element disappear
prepend()
	Add content to the front/beginning of an element
removeClass()
	Remove a CSS class from an object
show()
	Make an element appear
slideDown()
	Reveral an item
slideUp()
	Aniamte out an
slideToggle()
	Alternate revealing and hiding an item
toggle()
	Alternat hiding and showing an element
toggleClass()
	Add or remove a class (alternating) to/from an object
```

Ok, so with some of that in mind, let's revisit that [helloworld1.html](http://webdev.usc.edu/itp301/lecture_examples/helloworld1.html) page we started working on above. First, try adding a second statement (to that jQuery block) of:

```js
	$("ul").addClass("redbox");
```
Ok, so addClass lets us take an exisitng object and "add" a class instuction to it. To remind ourselves of the different, let's instead edit the above statement to target list items:

```js
$("li").addClass("redbox");
```
Now see if you can write the jQuery instuction that would add the class greenonyellow to all paragraphs:

```js
$("p").addClass("greenonyellow");
```
Now that's not a bad look... but what if we only wanted to add that instruction when a user moused on a paragraph -- i.e. to create an effect of "highlighting" a paragraph by changing it to that style when someone hovered on it?


### jQuery Manupulations -- a starter list of jQ "actions"

One of the keys to interactive programing is DELAYED execution -- that we often have activities we do not want to occur until a cwertain event (usually user interaction) occurs. So extending the example above, we want to set the class for a paragraph to greenonyellow WHEN a user "hovers" onto a paragraph... for that paragraph.

To make this work, first lets see about setting up a specific action to occur when a specific object is hovered.

In the page we are working on, delete the instruction that hides the secondp object. Then put in some blank lines in the jQuery area and then type in the following lines:

```js
	$("#secondp").bind("hover",function() {
		// CODE to be executed when the user hovers on the object #secondp 
	});
```

Now, that overall syntax is probably a bit confusing... but that's the most complexity of syntax you will need to deal with for now with jQuery. And it's even uglier when we view it in the context of the wider code. Edit that code to add the following line inside the bound event: $("#secondp").addClass("greenonyellow"); That should leave your overall script block looking like:

```js
	$(document).ready(function(){
   
		// HERE write the jQuery code to be run after page load     
		$("li").addClass("redbox");

		$("#secondp").bind("hover",function() {
			// CODE to be executed when the user hovers on the object #secondp
			$("#secondp").addClass("greenonyellow");
		})	

	});
```

Ok, now notice that when you "hover" on the paragraph it turns to the green text, yellow background. BUT, when you "leave" the object it does not "undo" it. So how about binding an event for mouseout that does a removeClass command:

```js
	$("#secondp").bind("mouseout",function() {
	    $("#secondp").removeClass("greenonyellow");
	})
```

Ok, now one final thing before we move on. Let's set up an instruction that when you mouseover over any li object adds the largetext class, and when you mouseout removes that class...

```js
	$("li").bind("mouseover",function() {
		$("li").addClass("large);
	});

	$("li").bind("mouseout",function() {
		$("li").removeClass("largetext");
	});
```
Well if we implement that with the same approach we took with #secondp, when you rollover one li ALL li get large text.. not just that one. But luckily we have a cool object called "this" that we can use when inside of a bind... that will only target the object on which the "event" occurred. Instead of the code above try:

```js
	$("li").bind("mouseover",function() {
		$(this).addClass("large);
	});

	$("li").bind("mouseout",function() {
		$(this).removeClass("largetext");
	});
```
Notice that when using the __this__ object you do NOT put in quotes... because it is a literal object/concept in the language and not a CSS selector (like #secondp or li).

At this point if you want to see the page with updated script you can open up [helloworld2.html](http://webdev.usc.edu/itp301/lecture_examples/helloworld2.html).

Ok, so let's move on to playing around with some page-wide functionality that features a lot of animation of elements using toggle and slide.

To start, open up the [jq\_effects1a.html](http://webdev.usc.edu/itp301/lecture_examples/jq_effects1a.html) file. Then read the instructions on the page to add various jQuery elements including using toggle, slideToggle and fadeToggle. To see a version of the page with many of the effects implemented open up [jq_effects1b.html](http://webdev.usc.edu/itp301/lecture_examples/jq_effects1b.html).
