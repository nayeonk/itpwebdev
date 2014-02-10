Keyword "this" and editing style properties
===========================================

******************************************************************
Please download the following zip file and extract it to a folder: 
[starter files](http://itpwebdev.herokuapp.com/starters/301/JS_review_start.html)
******************************************************************

### Conditional logic, style editing review

Open up the page [Demo page cond_styles_this_start.html](http://webdev.usc.edu/itp301/lecture_examples/cond_styles_this_start.html). Write Javscript that adds the scripting to fulfill the functionality detailed on the right of each section. 

For the first box (the color setter) using the new __this__ object will save you a bit of code. The second box (domain greeting) helps review the new conditional logic concept and __if__, __else if__ and __else__. 

For the third section (the link rollovers) you might want to hold off and try completing them with jQuery instead of Javascript. 

If you get stuck or want to review as reference you can look at the [solution](http://webdev.usc.edu/itp301/lecture_examples/cond_styles_this_end.html). 

### Locating an object

In any case of altering a property of an object, you need to "find" an object before you can manipulate it. We generally do that by locating an object using its ID with the method document.getElementById ... such as document.getElementById('text1') and then after that we can follow up with a property to alter, etc.

__this__ (in Javascript) -- an alternate way to "reference" an object is through the keyword "this". The "this" command only works if the javascript using it is INSIDE of an html tag (in an event handler), in which case "this" is a reference to the object created by / of the current tag. So for instance, if you had a text box (created with an input html tag), any javascript inside that tag that used "this" would be referring to that current text box.

```html
<input type="text" id="text1" onchange="alert('The text box contains the string ' + this.value)" />
```

The above would create a text box, and that box has an eventhandler that anytime the contents of that box is changed an alert box comes up. Note that because the javascript use of "this" was INSIDE the tag, it referred to that object. As opposed to a more generic (non "this") approach such as:

```html
<input 
	type="text" 
	id="text1" 
	onchange="alert('The text box contains the string ' + document.getElementById('text1').value)" /> 
```

See this [example](http://webdev.usc.edu/itp301/lecture_examples/this.html) page with both tags -- they operate exactly the same except one uses the universal method of "finding" the object on the page through its ID, and the other uses the local "this" approach.

__this__ (in jQuery) -- reviewing the use of __this__ in jQuery, you use the this object inside of a bind block, and it represents the object that triggered the bind (the object the event occurred to). This is particulrly useful because in jQuery we often bind some code to a set of objects (such as all images of type thumbnail) but when the event occurs we want just that ONE object to change and not all of them.
 
### Editing properties of objects with JS

*	For "normal" object properties -- the attributes of their underlying html tags -- you simple access the property directly off the object. For instance to edit the html "src" property of an image (img) object, you could do something like obj1.src = 'pic2.gif' which would of course change the "src" property of that image object to a new file.
*	To edit style properties of an object, you FIRST have to access that object's "style" layer, and THEN off that sub-object access a property. So, to change the "visibility" property of a layer div, you would NOT do obj1.visibility = 'hidden' but rather would do obj1.style.visibility = 'hidden' ... or in full form to hide a div layer that has been IDed as newslayer, you would do document.getElementById('newslayer').style.visibility = 'hidden' .. see [an example](http://webdev.usc.edu/itp301/lecture_examples/edit_style_properties.html) of a page that manipulates some different style properties of layer objects (created with divs).
 
### Style properties in Javascript

*	If	you look at the code from the above example, you might note that it changed the background color through .backgroundColor = 'teal' and NOT through background-color = "teal" ... that is because Javascript does NOT allow hyphens in object names. So when working with style properties, any CSS prop that is more than one word (that has a hyphen in it) has to be "translated" into its JS equivalent. This is generally done by removing all hyphens and UPPER casing the letter of each subsequent word... so that background-color becomes backgroundColor. Note they still always begin with LOWER case (backgroundColor NOT BackgroundColor).

So some common Javascript versions of CSS properties are:

*	color
*	fontSize
*	fontFamily
*	fontWeight
*	fontStyle
*	textTransform
*	textAlign
*	textIndent
*	lineHeight
*	backgroundColor
*	backgroundImage
*	visibility
*	left
*	top
*	zIndex

So... in Javascript we set css properties of objects through style.propertyName = 'value' like:

```js
document.getElementById('instructions').style.backgroundColor = 'yellow';
```

whereas in jQuery we used a command called css() that used the native CSS names (with hyphens) like:

```js
$("#instructions").css("background-color", "yellow");
```

### Javascript and jQuery demo/exercise manipulating css

Look at this [demo css_js.html](http://webdev.usc.edu/itp301/lecture_examples/css_js_start.html) page that contains conversions of CSS-to-JS names. It has a set of instructions for writing scripting to perform certain actions (show, hide and toggle a layer, rollover color highlighting, etc.). 

The [solution](http://webdev.usc.edu/itp301/lecture_examples/css_js_end.html) file has sample code that uses both Javascript and jQuery. It uses Javascript for show, hide and toggling, and onmouseover and onmouseout backgroundColor manipulation, but then more efficiently uses jQuery to binding rollover behaviors to ALL tr tags at once, and uses a JS variable to store old color values that are retrieved/reused in a separate routine.  
