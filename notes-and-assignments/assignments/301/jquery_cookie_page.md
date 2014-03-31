jQuery Cookie Page
============
Use a jQuery plug-in to store and retrieve cookie values

###Cookie data page using jQuery-cookie plug-in

OK, so in class we worked with cookies to store and retrieve some information from users. It was a bit cumbersome and involved having to use a pre-written function to retrieved stored values out of a cookie.

For this lab exercise set up a simple page in which you would want to store and retrieve information provided by the user. This could a recipe, a contact entry, etc, basicaly any dataset that would have 3-5 text fields. You will build a simple form UI in which the user can fill out their information, save it (to cookie entries), and come back later and retrieve it.

Then in addition __you need to use the jQuery plug-in jquery-cookie.js__ for you cookie manipulation. Next week we will be working with many external libraries so this will give you a first taste of implementing additional libraries/code into your pages (besides the basic jQuery library).

Lab requirements:
*	Load jQuery and the jquery-cookie plug-in into your page. You can load the version of jquery-cookie.js from webdev at http://webdev.usc.edu/jquery-cookie.js
*	Set up a page with form fields for the user to fill out. This could be a data entry for a contact db, movie listing, sports team, tc.
*	At the bottom of the form have two buttons (type=button) and one reset buttons (type=reset). One says "Save info", one says "Load info", and the Reset button says "Clear".
*	Bind to the Save button some jquery using the jquery-cookie commands to save the text from each textboxeinto separate/individual cookie entries.
*	Bind to the Load button some jquery that uses jquery-cookie to retrieve each of the corresponding values from the cookie variables and writes them into each box.

#### jQuery-cookie

So the jQuery-cookie plug-in is VERY easy to use. The same syntax is used to read a cookie entry (one parameter) and to save a cookie entries (two or more parameters).

The simple documentation and examples can be found at https://github.com/carhartl/jquery-cookie/blob/master/README.md and the actual JS file to save to your computer/server and load into your pages is athttps://raw.github.com/carhartl/jquery-cookie/master/jquery.cookie.js but you can also load it from http://webdev.usc.edu/jquery-cookie.js.

 