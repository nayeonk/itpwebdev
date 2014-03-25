Lecture - jQuery review and JS
===========
jQuery review and integration with JS 

*****************************

Yuanbo's class: http://itpwebdev.herokuapp.com/starters/301/jquery_js_review.zip


*****************************
### jQuery review and integration with Javascript

First off, what are the two basics for using jQuery:
*	__Load jQuery library:__ Create a link entry in the head of your document. You can use a compressed/compacted version or a "normal" version of jQuery. You can either link to it on a server such as
	
	```js
	<script src="http://code.jquery.com/jquery.js"></script>
	```
	or
	```js
	<script src="http://webdev.usc.edu/jquery.js"></script>
	```
	or you can place a copy on your aludra account and link to it locally such as
	```js
	<script src="jquery-min.js"></script>
	```
	

*	jQuery "Ready" block: In the head of your document, create a script block. In that script block put in the "starter" code that tells jQuery to wait until the document (page and all linked files) is loaded completely and then to start your code:
	
	```js
		<script>
		   // When the page is ready
		   $(document).ready(function(){
		   
			// HERE write the jQuery code to be run after page load     
			
		   });
		</script>
	```
	
	
*	__JS set up:__ Now, as an ADDITIONAL step, you will typically ALSO want to set up a script block (or use the same one that jQuery is using) to do any variable, array and function set up. For instance, you might have:
	
	```js
	var startrecord = 0;
	var currentcolor = 0
	var colors = new Array;
	colors.push("yellow"); colors.push("red"); colors.push("green"); colors.push("orange");
	var randomcolor = function() {
		currentcolor = Math.floor(Math.random()*colors.length)
	}
	```


Ok, so now that we've refreshed ourselves on the basics of jQuery set up, lets review how jQuery works:
*	__Targeting objects:__ Most jQuery behaviors start by targeting one or more objects through style selectors such as "#dogimage" or ".linkclass". You start with the jQuery object $ and then in parentheses target an object, followed by a command that will manipulate the object
	
	```js
	$("#dogimage").hide()
	```

*	__Effects:__ jQuery animation "effects" can hide/show, fade, or move objects. Basic list of animations includes hide, show, toggle, fadeIn, fadeOut, fadeToggle, slideUIp, slideDown and slideToggle.
*	__Attr:__ Can read and write html attributes of an object. The first command below is "reading" a property and setting it to a variable The second example is setting or changing a property. An attr() command with just one attribute is "reading" the value, and ine with two attributes is "writing" or setting the value:
	
	```js
	i = $("#mainklink").attr("href")
	$("#logo").attr("src","newlogo.gif")
	```
	
*	CSS: Set a css property for an object. Like the attr command if you only list one attribute it "reads" the value, and if you have two it is "setting" the value

	```js
	currentcolor =  $("#contentbox").css("color")     
    $("#toplink").css("font-size","14pt")
	```
	
*	__Bind:__ in jQuery when you want to tie code to an event you "bind" that event to one of more objects. Then inside that bind block you write your code. This is similar in functionality to eventhandlers in Javascript. Also when inside a bind block you can use a special object named __this__ to target the exact object that triggered the event. In the example below the code is bound to all anchor tags/links but the code inside only effects the exact link the user did a mouseover on
    
	```js
	$("a").bind("mouseover",function(){
    	$(this).css("color", "pink")
    });
	```
	
*	Other major commands:
	*	html
	*	addClass, removeClass and toggleClass
	*	hide, show, slideUp, slideDown, fadeIn, fadeOut
 

### Demo: Adding jQquery to JavaScript Random Photo page

Ok, so dipping our toes back into jQuery, let's start by revisiting the random dog photo project. First open [dogtest_jq_start.html](http://webdev.usc.edu/itp301/lecture_examples/dogtest_jq_start.html). Set up the html to load jQuery and create a jQ ready block. Then add the following line inside the ready block:
	
	```js
		alert('jQuery and page loaded')
	```
	
Run the page. It should work normally like before (Javascript randomly displays one photo) but it also brings up an alert (written in Javascript, per se, but executed by jQuery).

Ok, first off, let's add a highlight rollover effect to the dog image:
*	In the jQuery block, bind to the object IDed as dogimage a mouseover event. That would look like:
    ```js
	$("#dogimage").bind("mouseover",function() {
		// CODE to be executed when the user hovers on the object 
	}) 
	```
	__REMINDER:__ When writing jQuery events you do NOT include the word "on". So whereas in Javascript you write an event handler of "onmouseover" in jQuery you bind to the event "mouseover".

*	Now notice in the page that the dog image already has one CSS instruction of margin: 5px. So what we are going to do is on mouseover change the margin to 0px but add a 5px border. So inside that event block you built add css instructions to set the border to solid 5px yellow and margin to 0px. Note: You could target the #dogimage directly for these changes, but since we are inside an event block it would be better to get back into the habit of using the this target:
	```js
		$(this).css("border", "solid 5px yellow");	    
		$(this).css("margin", "0px");
	```
	
	Test that it is working. When you mouseover the dog image it should acquire a yellow highlight.
	
*	Ok, so now let's add a mouseout command that sets the border back to 0px and the margin back to 5px:
    	```js
		$("#dogimage").bind("mouseout",function() {
			$(this).css("border", "solid 0px yellow");	    
			$(this).css("margin", "5px");	    
		})
		```
		
You should now have a rollover effect. Of course, a different approach is that you could have set up two different classes for the dog image -- one with the normal look and one with the "highlight" appearance. And then used removeClass and addClass jQuery commands inside your mouseover and mouseout blocks. Why would that be better? Because if you changed your mind about how you wanted the "highlight" effects to look, because in most cases it is easier to edit a CSS block than to edit css() jQuery statments.


Ok so now, let's use jQuery to have a NEW dog photo load into the dog image when you double-click it:
*	Create a new bind block that binds the event dblclick to \#dogimage:  
    ```js
	$("#dogimage").bind("dblclick",function() {
		// CODE to be executed when the user hovers on the object 
	    
	})
	```
	
*	Now, inside that event block let's:
	*	Use Javascript to set variable i to a random number from 0 to the length of the imgname array
	*	Use Javascript to set the variable temp to "http://webdev.usc.edu/itp301/dogs/" + imgname
	*	Use jQuery to set the attr() property "src" of \#dogimage to a position of imgarray using the variable above
	*	Need help? Ok the code would be:
		```js
		$("#dogimage").bind("dblclick",function() {
			i = Math.floor(Math.random()*imgname.length)
			temp = "http://webdev.usc.edu/itp301/dogs/" + imgname
			$(this).attr("src", temp);	    
		})
		```
		
	The final version of this page, up to this step, can be found at [dogtest_jq.html](http://webdev.usc.edu/itp301/lecture_examples/dogtest_jq.html).


	A slightly more advanced addition to this project would be:
	*	Change the reload from dblclick to click.
	*	Bind a new dblclick behavior to the image. Inside that bind function:
	*	Set a new variable equal to the current image path using .attr("src")
	*	Use the replace() function to change the _s to _l in that variable
	*	Use the window.open() Javascript method to open up a new window that loads the _l version of the image. For instance window.open("newpage.html")

	A final version of the page with the above steps can be found at [dogtest2_jq.html](http://webdev.usc.edu/itp301/lecture_examples/dogtest2_jq.html)