Lecture - Attribute Selectors, Form Objects (JS and jQ)
============
Selectors by HTML tag attributes; Working with different form objects in Javascript vs jQuery

******************************************************************
Please download the following zip file and extract it to a folder:

Yuanbo's class: http://wr.gs/20140304classexample

******************************************************************


##	Selectors by attribute; Form Objects revisited for JS and jQuery


Some form objects such as textboxes are very easy to read and write, whereas others like radio buttons and select menus are a bit more complex in their structures (they are basically arrays of objects). Using jQuery (instead of Javascript) can help simplify some of the access, but it is still necessary to understand the nature of the objects -- behind the the scenes how the objects are actually work and are compiled.

But first, let's cover how to write CSS selectors that target objects by attributes.

### CSS Attribute selectors

Previously we have defined selectors (for CSS and jQuery) through tag, id and class settings, as well as compounds of those. But what about targeted objects by their html attributes?

So what if we wanted to write a selector that targeted all textboxes on a page? Well what distinguishes textboxes from all other objects? Their type='text' setting. Look a the selector below:
```js
[type='text']
```

To target objects by an html attribute, you surround the criteria in square brackets and write attribute='value'. An even more accurate way to target all textboxes would be to write a compound of the tag input along with an attribute setting of type='text' like below:
```js
input[type='text']
```

So if we used that in jQuery, following how we define selectors, that would be a jQ line starting with:
```js
$("input[type='text']").
```

Notice/remember we have to surround the selector in quotes (for jQuery), which means if we are matching attributes to values we will need to use one set of quotes around the overall selector and a different set of quotes inside the attribute statement.

So similarly if you wanted to target all checkboxes you could use $("input<type='checkbox'>") and if you wanted to target all radio buttons with a name of "colors" you could use $("input[name='colors']")

One final level of selector complexity. What if you wanted to target an object with e certain intrinsic value, such as checkboxes or radio buttons (which have a "checked" setting)? You could use :checked specify that that property/value is present. So finally to target the radio named "color" is checked you would write:
```js
$("input[name='colors']:checked").
```

#### Text boxes (including password and hidden):

1.	The value of a text box is its contents. So to read or write to/from a text box you use OBJ.value in Javascript, and in jQuery you read them through OBJ.attr("value") and set them by using two attributes like OBJ.attr("value"m, "newvalue").
1.	Password fields are just text boxes where the values are masked/obscured (with special characters) on the screen. You manipulate them identically to textboxes.
1.	Hidden fields are just textboxes that do not appear on the screen. You also read and write their values the same.
 
#### Checkboxes:

1.	Checkboxes have no intrinsic values. There are either on or off.
1.	In Javascript you evaluate if OBJ.checked is true or you turn it on by setting OBJ.checked=true (notice no quotes around true).
1.	Similarly in jQuery you can evaluate the OBJ.attr("checked") property to see if a checkbox is "checked", and can set it through OBJ.attr("checked", true) or OBJ.attr("checked",false).
 
#### Parsing and evaluating radio buttons:
1.	All radio buttons should have the same NAME, but difference values. (NOTE: Oftentimes we set IDs to an object to uniquely identify it. This is one instance where that would NOT work because a series of radio buttons have to share the SAME name, and we can not put the same ID on more than one object in a page.)
2.	Javascript:
	*	In Javasript, one "family" of radio buttons (which all have the same names) are considered objects in an array. So the first button would be OBJ[0], the second one would be OBJ[1], etc. And like a if a radio button is "on" its "checked" property is true.
	*	The data value of a radio button is its value, so the "value" of the second radio button would be OBJ[1].value or in jQuery OBJ<1>.attr("value").
	*	So to read the value of the active button in a group of radio buttons we would:
		1.	Count how many buttons are there in the group through OBJ.length
		2.	Create a loop that looks through each button to see if its checked property is true>
		3.	On a match read the value of that button
3.	If we wanted to "turn on" a specific radio button, we would set its checked property to true. So to "select" the third radio button in a group you would do OBJ[3].checked=true or in jQuery OBJ[3].attr("checked",true).
4.	In jQuery, we can use our more complex selectors to more efficiently read or target objects.
	*	To read the value of the "turned on" radio button, we can use the :checked condition on a selector. So for instance if you had a set of radio buttons named "colors":
    	```js
		x = $("input["name='colors']:checked").attr("value");
		```
		Would set the variable x equal to the value of the radio button in the "colors" family that is checked (turned on).

	*	How would you detect if NONE of the radios were turned on? Well one way would be to then evaluate if x has no data/value in it. Because if no radio is turned on, then x will not have a value (will probably be the literal undefined
	*	"Checking" a radio button is very easy as well. If you wanted to set the radio buttons in the family "colors" that has a value of "blue" on, you would:
		```js
		$("input"[name='colors'][value='blue']").attr("checked", true);
		```
		That targets input objects that have a name of colors AND a value of blue, and sets the checked attribute to true/on.
 
#### Working with Select menus:

1.	Remember, a select menu contains items which are create with the "option" html tag. Each of the option items ose items are considered to be array objects inside the "options" JS object. So the items are in an array collection, similar to radio buttons. The main difference is that all of those items are array objects inside options, which itself is inside the select object.
2.	Javascript:
	*	So the first item in the select menu would be OBJ.options[2]
	*	The value of an item is its value property, so the value of item 3 would be OBJ.options<2>.value
	*	To indicate whether an item is active or selected, we can parse the "selected" property. This is similar to the checked property for radio buttons and checkboxes. So to see if item4 if selected I could evaluate OBJ.options<3>.selected
	*	So to figure out the current value of a select menu I would:
		1.	Count how many objects are in the array options (how many items) through OBJ.options.length
		2.	Set up a loop that goes through each item and checks its selected status, like OBJ.options<2>.selected
		3.	When I find an item whose selected property is true, extract the value from that object like OBJ.options[2].value
3.	jQuery:
	*	For jQuery, select objects are actually simpler than radio butons. When a select object has one of its options selected the entire value of the object is the value of that option. So if I have a select manu with an ID of "animals", then $("#animals").attr("value") would resolve to the value of the option that is currently selected.
	*	To set an option, I just need to set the value of the select object to the value of that option:  
		```js
		$("select[name='animals']").attr("value","fish");
		```
		Note: Oftentimes for this to work properly your options need to have their values explicitly SET. So for instance in your html  
		```html
		<option value='fish'>fish</option>
		```
		and NOT just  
		```js
		<option >fish</option>
		```

#### Form object samples
*	To see complete versions of all of the above parsed out you can view the solution The form objects page has examples that look through different form objects (or groups of objects) to determine their value. See [jquery_form_objects.html](http://webdev.usc.edu/itp301/lecture_examples/jquery_form_objects.html).