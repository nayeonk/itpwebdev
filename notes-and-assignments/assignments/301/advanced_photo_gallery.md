Assignment - Advanced Phot gallery
====================
Dynamic pages that loads images from arrays and manipulates them

Build a page that looks like [this](http://webdev.usc.edu/itp301/dogs/dogs_page.jpg) in which:
*	Pick a one of the two

Store all core photo names (portrait, dog01, dog02, etc.) in an array __(Note: The most efficient/simplest code would only store the core part of each filename. I.e. store dog01 not http://webdev.usc.edu/itp301/dogs/dog01_m.jpg)__
*	The top photo on the page (portrait) has a hyperlink that loads portrait_l.jpg.
*	The three photos below it are generated randomly (differently) each time in the medium size, from the array. Also, each of those three photos have hyperlinks around them that opens the full version (such as dog02.jpg) of the photo into a new window.
*	And below the line is a listing of the _s version of ALL dog photos. This last part must be done through a loop that works with the array. And each of the thumbnails should have hyperlinks that load the _l versions of each photo in a new window.
*	Finally, if Photos 12 or 13 come up in positions 1, 2 or 3, then an alert box needs to come up that says "Stay away from my ball!!!"
*	Hint1: To open an image in a new window, you can simply build a conventional anchor tag that has a taget="_new" or target="_blank". You do not need to have JS create a new window (like window.open()).
*	Hint2: to do the random photos, you will need to use something like: var image1 = Math.round(Math.random() * n) where n represents the length of your array
*	Hint3: Don't try to do all this at once. I.e. first build your core array for images. Then perhaps build the loop that loops through all the items in the array. Then maybe work on the document.write to generate all the images. Then go back and add the hyperlinks around the images. Etc.
*	Note: ALL of your img tags MUST be created with document.write statements (not coded directly). But it might be easiest to begin by hard-coding some of the tags, and then converting then to JS loops around document.write statements.

