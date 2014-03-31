Timers/Async Code, Return, Cookies
===================================
setTimeout and delays. Passing data back out of a function. Working with cookies.

******************************************************************
Yuanbo's class: http://itpwebdev.herokuapp.com/starters/301/

******************************************************************


### setTimeout() and return and Cookies

We will explore three different concepts:
*	Javascript timers through setTimeOut() ... and the jQuery alternateives
*	The return command for passing data OUT of a function back to its caller
*	Working with cookie in Javascript. Which will lead into a lab working with cookies in jQuery

#### Delays/timers -- setTimeout()

The setTimeout() method is very simple. It executes a set of Javascript code after a defined delay. The first parameter is the code to run (after the pause) and the second paramters is the time delay in milliseconds.

So, for instance, setTimeout("alert(2)",2000) would run the JS code "alert(2)" but NOT right away... waiting 2000 milliseconds (2 seconds) and then bringing up the alert.

Like entering lots of code in event handlers, it is often easier to store some code to execute in a function, and then have the setTimeout call that function (after a delay).

So, for instance, if I had a function called hidelayer() that takes an argument of the object to hide, I use setTimeout("hidelayer(this)",500) to have it run the hidelayer function a half-second later.

To play with this, let's load up [layout_timers_start.html](http://webdev.usc.edu/itp301/lecture_examples/layers_timers_start.html). Notice that inside the page are two buttons at the top, and then three links with layers next to them.

So first off, add some jQuery to hide #layer1, #layer2 and #layer3.

Then bind to the first button a click that brings up an alert and test it. Then add the same code to the second butotn.

Now on the second button, take the alert code, and put it inside of a setTimeout command... something like

```js
	setTimeout("alert('Delayed response')", 2000)
```

See how inside the setTimout method the first parameter is that line of JS to run (in quotes), and the second parameter is the ms delay.
Ok now bind a mouseover to .link1 that shows #layer1, and bind to #layer1 a mouseout that hides itself.

Now do the same for .link2 and #layer2 (but use a slideUp instead of hide). But then put the instructions for layer2 into a setTimeout such as

```js
	setTimeout('$("#layer2").slideUp()',2000)
```

So it is relatively simple to "delay" some code using setTimeout. You can also use a slightly quicker shortcut in jQuery which is the delay() method... BUT... it only works (actually puts in pauses/delays) when used with jQuery ___animations___. You can chain it onto the end of a command. So for instance, the above code could also be (more simply)

```
	$("#layer2").delay(2000).slideUp()
```

but you can ___NOT___ use delay with any other code besides jQuery animations (or at least it would not delay the code)... for for instance puttng delay() in a chain with a show() or hide() command will not work (but would with fadeIn() or faceOut() animations).

Ok so finally how about a delay that can be ___cancelled___ by moving back into the layer? The normal way to implement this would be to use a more complicated implementation of creating an interval, which could then be reset/canceled. I implemented the same effect by creating a global variable called "cancel" that could be set to 1... to cancel the action. And having a function that first checked that variable before trying to hide the layer. To do this I create a global variable called cancel and set it to 0. Then I when a delayed function to hide the layer is called it checks to make sure that cancel variable is still 0... and if someone mouses back IN to the layer a small piece of code sets cancel to 1.

You can see the final code for this demo in two forms. The one you probbly want is at [layers_timers_jq.html](http://webdev.usc.edu/itp301/lecture_examples/layers_timers_jq.html). There is also a pure-Javascript (no jQuery) verison at [layers_timers3.html](http://webdev.usc.edu/itp301/lecture_examples/layers_timers3.html).

_For your projects many of you will use timers in elements such as slideshows._

Of course, if you have a timer running in a loop your page count be stuck forever. To avoid this you can set up your own variables to check if a timer should continue running, or use the clearTimeout method. For more info on timers you can read the W3Schools overview at http://www.w3schools.com/js/js_timing.asp.

BUT. Much of this course has been focusing lately on how jQuery can take over traditional Javascript functionality. And while there is no "out of the box" timer functionality there is a simple jQuery plug-in [jquery-timer](http://code.cyntaxtech.com/plugins/jquery-timer) that has a simpler implementation where you can set up timers by name and CANCEL the timers before they end.

 
####The "return" command

When we create a function, we are used to setting up parameters in the function so that you can pass data INTO the function when you call it. So if you can input information into a function, there must also be a way to OUTPUT data FROM the function BACK out to your code (the "caller" of the function).

The "return" command is used inside a function to pass information OUT when the function is called or run. Basically it let's your code/caller treat the function as if it were a piece of data by setting the "value" of the overall function through a "return".

For instance, lets say you wanted to create a function that takes email addresses and "cleans up" common problems like commas instead of periods, aol instead of aol.com, etc.

So for example look at the function below:

```js
var returnadd = function(a,b){
		// take two data inputs and return back to caller the sum
		// Note if they are numbers below would add them and 
        // if they were strings below would concatenate them
		return a+b
}
```

So then if we were to use the above function in another set of code...

```js
newsum = returnadd(2, 4)
alert('The sum is ' + newsum)
```

So returnadd is called with 2 and 4 as its inputs, and the result (returned from the function) is saved to a variable newsum. Which is then used in other code (an alert). Ok onto something a bit more practical...

Open up [return_example_start.html](http://webdev.usc.edu//itp301/lecture_examples/return_example_start.html). Look inside and notice there is a function already written that tries to "clean up" possible problems with email addresses.

So when you called that function, you would want to "pass in" a potentially flawed email address and have the function "return" out the new (hopefully improved or fixed) email address.

So take a look at the jQ code below that is bound to the button:

```js
	// read email from box
	newemail = $("#emailbox").attr("value");
	// pass email into checkemail and save the result back into the variable
	newemail = checkemail(newemail);
	// Save new version to box.
	$("#emailbox").attr("value", newemail);
	// Use new version in message layer and reveal.
	$("#Layer1").html('Email sent to ' + newemail);
	$("#Layer1").fadeIn(2000);
```

So the above code loads the email from the box and saves it to a variable. It then passes it to the checkemail function and takes the result (the return output of the function) and saves that potentially transformed email back into the variable, for use in the rest of the page.

To see this in action you can go to [return_example.html](http://webdev.usc.edu/itp310/lecture_examples/return_example.html).


#### Cookies:

*	Cookie information is stored in file/s according to domains (so cookies for all pages at latimes.com would be stored together)
*	Cookies can have a wide array of fields:
	*	Name of the cookie entry / Value or string associated with the cookie entry
	*	Domain of the server that created the cookie - formatted with two periods such as .usc.edu
	*	Whether you must access a cookie through a secure (https) server - if so, simply include a parameter of "secure"
	*	URLs of pages that are allowed to access the cookie
	*	Expiration date/time of the cookie - must be formatted as date strings and calculated by Greenwich mean time (GMT)
*	In their simplest forms, cookies contain name and value pairs, such as "username=patrick"
*	Many parameters are automatic (such as domain of cookie) or optional (such as URLs that can access cookies).
*	Some browsers store all cookies for all domains in one file (but separate by domains) and others store each domains cookies in separate files all in one folder.
*	Be careful not to edit cookie files, as changing one character could invalidate a cookie entry. Why would you care? The cookies most people 'like' are things like default login information and profile and customization information.

___Note: In testing cookies Chrome will often NOT work (read/write them) unless the page is on a server. So for testing cookies locally (on a file from your computer and not the Web) test them in Firefox.___


#### Creating cookie entries:
*	The escape method is important because it converts any spaces within strings to character codes.
*	Writing cookie entries can be simple or complex, depending on how many fields you are writing to and how simple your data is. Below are some cookie writing examples in Javascript:
	```js
		document.cookie="name=patrick"
		document.cookie = "age=" + agevariable
		
		escape(document.cookie="social=123 45 6789; secure;")

		escape(document.cookie = newuser=yes; expires=Thu, 01-Jan-01 00:00:01 GMT; domain=.latimes.com;"
	```

*	Cookie writing gets more complicated when you want to pass along variables or create dynamic entries. The code below is from the Javascript Bible, and create a one-year expiration as part of the cookie entry. In particular, pages 515-526 in the Bible has some good material and sample scripts on cookies:
	```js
		var exp=new Date()
		var oneYearFromNow = exp.getTime() + (365 * 24 * 60 * 60 * 1000)
		exp.set Time(oneYearFromNow)

		document.cookie = "username=Fred; expires=" + exp.toGMTString() + ";"
	```
	
#### Retrieving cookie information:
*	The bad news is that when you retrieve cookies in Javascript, you get ALL of the cookie entries. The good news is that the cookie retrieval syntax is simple and automatic
*	document.cookie represents the current cookie file, and a simple alert(document.cookie) would show you any cookies information for the current domain
*	So what you have to do is parse through the cookie file, looking for the data you want to retrieve. We will eventually do this using the substring method. So therefore the key is to figure out the character positions where the information you need starts and ends.
*	First, let's think about how the cookie is organized. The information we want from cookie entries has to do with the name and value pair. And all fields in cookie entries are separated by semi-colons.
*	So to find the beginning of the value in the cookie string, we simply figure out where the last character of the name is and add one (for the equal sign).
*	To find the end of the value, we simply need to find the position of the semi-colon after the value.
*	Then we can do a substring on the cookie using those two parameters, like document.cookie.substring(x,y)
*	We will also need to use the unescape method around the cookie data call to convert any character codes to their characters (such as unencoding any spaces).


#### Cookie Retrieval Routine:
```js
	var getCookie = function(name)
	{
		var cookieLen = name.length;
		var cLen = document.cookie.length;
		var i = 0;
		var cEnd;

		while (i < cLen){
			var j = i + cookieLen
			if (document.cookie.substring(i,j) == name){
				cEnd = document.cookie.indexOf(";",j);
				if (cEnd == -1){
					cEnd = document.cookie.length;
				}
				return unescape(document.cookie.substring((j+1), cEnd));
			}
			i++;
		}
		return " ";

	}
```

#### Cookie basics page

Ok, first open the finished file [basics_cookies.html](http://webdev.usc.edu/itp301/lecture_examples/basics_cookies.html) FROM WEBDEV. Now click on the Display all cookies button. That is a raw dump of ALL cookie entries for that domain... which usc.edu includes not only webdev but any usc sites (www, itp, etc.).

Ok now save to your computer [basics_cookies_start.html](http://webdev.usc.edu/itp301/lecture_examples/basics_cookies_start.html). We need to:

Bind to the #allcookie button some code that will output the raw cookie info (all cookies) for this domain/page.
Bind to the #savecolor button some code that will read the content of the #bgc box. Then save that content in a cookie named "favcolor".
Bind to the #setcolor button some code that loads the "favcolor" entry from the cookie and then sets the css background-color of the document.body to that loaded color.
To see the finished version of this page you can go back to the finshied page see the finished [basics_cookies.html](http://webdev.usc.edu/itp301/lecture_examples/basics_cookies.html) page. 

If you want to build that page, save to your computer [basics_cookies_start.html](http://webdev.usc.edu/itp301/lecture_examples/basics_cookies_start.html).

While there is not much built-in cookie functionality in jQuery, there are a number of plug-ins that add easy cookie manipulation.

Another example of cookie manipulation, written purely in Javascript (no jQuery binding) can be found in the completed cookie manipulation page [cookies.html](http://webdev.usc.edu/itp301/lecture_examples/cookies.html);

Unfortunately there are no simple libraries for cookies that make them transparent to use. Even the simplest pre-built cookie methods still force you to provide data and parameters. There are cookie modules for jQuery and other libraries, although many simply use plain Javascript functions like the one examples above (using the custom function named getCookie).



### Project Ideas!

Some related concepts you could look into for project modules:
*	__Cookies and stylesheets:__ Use cookies to let a user select and save a stylesheet option. Imagine your site has 3 or 4 different stylesheets (different designs, text sizes, etc.). An interface lets them click on different sheet and not only see their look (by disabling stylesheets) but also saves a cookie entry. So every page on load checks if there is a saved stylesheet in a cookie, and if so uses that stylesheet for the page (and not the others).
*	__Date__ -- the JS Date object allows you to parse the time and/or date from the user's computer. This can be used to "count" intervals (like how long it took a user to complete a task). It can also be used for customized environments based on the day or time(such as pages that use different backgrounds based on night and day). For info on creating and reading the Date object you can check out the W3School page at http://www.w3schools.com/jsref/jsref_obj_date.asp
*	__Transparent GIFs and "customized colors" for products__ -- by taking a graphic and breaking it down into multiple transparent GIFs, you can set up a layer structure that allows the user to "build" products such as T-shirts with different colors or cars with different colors and features (spoilers, window tinting, etc.). For a simple implementation of this, take a look at this custom [T-Shirt page](http://webdev.usc.edu/itp301/lecture_examples/shirt/shirt_demo.html). If you want to build that in class save the [demo files of shirt](http://webdev.usc.edu/itp301/lecture_examples/shirt/shirtfiles.zip). Besides changing the color, if you saved multiple logos (with transparencies) a user could "build" a shirt with different colors, graphics, and even custom text.
 