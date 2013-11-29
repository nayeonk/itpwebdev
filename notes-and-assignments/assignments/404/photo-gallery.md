### Photo Gallery Assignment

To complete this assignment, you must implement the following inside of the file _main.js_.

* Wrap all of your code inside an IIFE
* Using event delegation, add an event listener on the gallery that checks when elements that match the selector _a.like_ are clicked. I want you to manipulate the UI of the respective _div.photo_ container in some way when its "Like" anchor is clicked. For example, add a new class to that __parent__ _div.photo_ container to highlight that div in some way.
* When the "Like" anchor is clicked, increase the total count at the top of the page. Use a variable initialized to 0 to keep track of the total of "Like" clicks.
* When the "Like" anchor is clicked, replace the anchor element with a _div.liked_ element containing the text, "Liked!".  By replacing the _a.like_ element with _div.liked_, the user will no longer be able to click it again to further increase the Like count at the top. 
* Lastly, you should be able to add a new photo to the gallery by pasting the absolute URL of an image into the text box at the bottom and clicking "Add Photo". These newly added photos should also have the "Like functionality". If you have set up your event delegation correctly, then these newly added photos should automatically have the "Like" functionality.

When you are finished, upload this assignment to your USC server space and post a link to it on your classpage.

[Here are the starter files](https://github.com/ITP-Webdev/site/raw/master/notes-and-assignments/assignments/404/photo-gallery_starter.zip)

### Helpful functions / methods in this assignment:
* jQuery replaceWith() - replace an element with another element
* jQuery parent() - get the parent of an element
* jQuery html() - get or set the innerHTML of an element
* e.preventDefault() - prevents the default behavior of a link when it is clicked
