Assignment - Advanced Phot gallery
====================
Dynamic pages that loads images from arrays and manipulates them

Build a page that looks like [this](http://webdev.usc.edu/itp301/dogs/dogs_page.jpg) in which:
*	Pick a one of the two topics:
	*	You favourite pets.
	*	Awards you earned.
*	Find at least 15 pictures, and store all core photo names (dog01.jpg, dog02.jpg, cat) in an array.
*	The top photo on the page (portrait) has a hyperlink that loads dog1.jpg.
*	The three photos below it are generated randomly (differently) each time in the medium size, from the array. Also, each of those three photos have hyperlinks around them that opens the full version (such as dog02.jpg) into the portrait. 
*	And below the line is a listing of the other dog photos. This last part must be done through a loop that works with the array. And each of the thumbnails should have a click button 
*	Hint2: to do the random photos, you will need to use something like: var image1 = Math.round(Math.random() * n) where n represents the length of your array
*	Hint3: Don't try to do all this at once. I.e. first build your core array for images. Then perhaps build the loop that loops through all the items in the array. Then maybe work on the generate all the images. Then go back and add the hyperlinks around the images. Etc.
*	Note: ALL of your img tags MUST be created with .innerHTML(), not hard coded. But it might be easiest to begin by hard-coding some of the tags, and then converting then to JS loops save it in a string var, then place it into the proper position.

