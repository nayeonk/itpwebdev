Lecture - jQuery Continued
========
Review of jQuery Syntax, Selectors, effects, manipulations and expanded complexity

******************
Save this zip file and extra the folder to your desktop
[wk2 cl2.zip](http://wr.gs/1401301bwk2cl2)

******************

### Basis jQuery concepts:

*	Load the jQuery library into a page, then set up a script block (language="javascript") and a starter document ready statement:

  ```js

  <script src="http://jquery.com/src/jquery-latest.js"></script>
  <script>
    $(document).ready(function(){
    });
  </script>
  
  ```
*	First need to "find" objects before we can manipulate them. In jQuery can use css selectors to reference/find objects. So $("#heade") would target an object with an ID of header, and $(".headline") would target all objects of class headline. 
 
*	jQuery has effect and manipulation functions to achieve common tasks such as setting style properties or html attributes of objects, and can animate elements through fades, hides and slides. The examples below would hide all objects of class definition and fade in the object of class animation over 2 seconds:

	```js
	$(".definition").hide();
 	$("#animation").fadeIn(2000);  
 	```
 	
*	Instead of only executing statements on page load, can "on" action to bind events to an object, and run jQuery code when that event occurs.
 
*	When manipulating objects inside a "on", you can use the this object to target or manipulate the object that triggered the event. The following statement would bind an onmouseover event to all anchors, and then would target a specific anchors (when moused over) to add the class highlight to it. And then the second "on" would remove that class:
   
	```js
	$("a").on("onmouseover",function(){
		$(this).addClass("highlight");
	});
	$("a").on("onmouseout",function(){
		$(this).removeClass("highlight");
	});
	```
 
 

### Event handlers in jQuery:

"Events" are the different types on user interactions that we "on" to objects such as mouseover, click, etc. There are also some "shortcut' events and syntax.

The main events we will use are mouseover, mouseout, click, dblclick, blur, focus, and change.

The full list of supported events can be found on the jQuery Events list at http://api.jquery.com/category/events/.


### Additional/special selectors in jQuery -- and "chaining":

Besides using css selectors to find objects, we can also add or "chain" additional selectors on top of an object. Some examples of other selectors are .next() .prev() .parent() and .children()

To see how these could be useful, let's revisit a previous example where we collapsed open and closed panels.

Let's go back to the page of jQuery effect and manipulations terms and their definitions. Open up [jq_effects2a.html](http://webdev.usc.edu/itp301/lecture_examples/jq_effects2a.html). Now this time instead of binding events to individual objects (through their IDs) we instead want to be able to bind to ALL dt tags an instruction that toggles the visibility of the NEXT object on the page -- which would be the dd with definitions:

```js
		$("dt").on("click",function() {
			$(this).next().toggle();
		});
```
See how afer the this object... which targets the dt that was clicked... it then adds an additional selector of next. That targets the VERY NEXT object on the page after the clicked one. And then runs a toggle visibility command on that. You can see that working in jq_effects2b.html.

So we can not only add additional selectors on to objects, but we can then add actions on top of those. We can even "chain" actions together. For instance, what if when the page first loaded it hid all definitions, then animated all of them open at once, and thenn closed all of them. Take a look at line below:

```js
	$("dd").hide().slideDown(1000).slideUp(1000);
```
	
In effect that line is executing three actions on the same set of objects, one after another.

 
### Animations/Effects:

jQuery has a set of stock effects that are easy to use on objects such as fadeIn, fadeOut, and fadeToggle, hide, show and toggle, and slideDown, slideUp and slideToggle. And as mentioned above you can "chain" more than one animation in a row.

There is also a delay action that lets you put a pause in. So for instance, in the example below it fades in all dd objects, pauses for 2 seconds, and then fades them out:

```js
	$("dd").hide().fadeIn().delay(2000).fadeOut();
```
	
There is also an effect called "animate" that lets you set up manual animations of individual properties. But its implementation is more complex and something we will revisit later.

A full list can be found on the jQuery Effects page at http://api.jquery.com/category/effects/

 

### jQuery manipulation actions including css() and attr() and html():

We also previously looked at common jQuery manipulation actions such as addClass, removeClass and toggleClass. There are many other types of manipulation, some of which we will double back to after we get into Javascript. But three of them are worth mentioning:

css() sets a css property of an object. So for instance $("a").css("color","green") would set all css color properties of all anchor tags to green.
 
attr() sets an html property of an objects, so for instance $("img#bigimage").attr("src","mainpic.jpg") would set the src of the image IDed as bigimage to mainpic.jpg
 
html() sets the html CONTENT of an object. So for instance $("div#caption").html("This is a picture of a dog") would set the contents of a div IDed as caption to the text This is a picture of a dog. You CAN include html instructions inside of the html function... so the previous statement could also be $("div#caption").html("This is a <strong>picture</strong> of a dog")
You can see the complete list of jQuery Manipulation actions at http://api.jquery.com/category/manipulation/

  

More in-depth examples:

Ok, so let's take a look at some more in-depth examples. Back on the main course page there are three jQuery demos we can explore:
*	Demo sliding panels
*	Demo jquery menus
*	Demo photo gallery
