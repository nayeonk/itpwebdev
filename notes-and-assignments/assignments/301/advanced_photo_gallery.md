Advanced Photo Gallery
======================

Dynamic pages that loads images from arrays and manipulates them

Build a page that looks like [this](http://webdev.usc.edu/itp301/dogs/dogs_page.jpg).

*	Pick a topic of interest to you:
	*	Your favorite pets
	*	Awards you earned
*	Find at least 15 pictures related to your topic, and store all core photo names (dog01.jpg, dog02.jpg, cat.jpg) in an array.
*	The top photo on the page (portrait) has a hyperlink that loads dog1.jpg.
*	The three photos below it are generated randomly (differently) each time in the medium size, from the array. Also, each of those three photos have hyperlinks around them that opens the full version (such as dog02.jpg) into the portrait. 
*	And below the line is a listing of the other dog photos. This last part must be done through a loop that works with the array. And each of the thumbnails should have a click button 

__Hint 1__: To do the random photos, you will need to use something like the following, where n represents the length of your array.

```js
var randomNumber1 = Math.round(Math.random() * n);
``` 

__Hint 2__: Don't try to do all this at once. First build your core array for images. Then perhaps build the loop that loops through all the items in the array. Then maybe work on the generate all the images. Then go back and add the hyperlinks around the images. Etc.

ALL of your img tags MUST be inserted into the page with .innerHTML. You will be building up a long string containing img tags using array data. Once that string of HTML is built up, you will place it / insert it inside of the proper element on the page using innerHTML.

