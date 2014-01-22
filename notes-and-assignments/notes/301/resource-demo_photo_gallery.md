Resource - Demo Photo Gallery
==========
Demo Project - Interactive jQuery Photo Gallery

###jQuery Demo -- Interactive Photo Gallery:

_Please note: This demo is meant to be done AFTER having gone through the second jQuery lecture "jQuery continued"..._

The only new concept will be the use of an effect called fadeTo -- that lets you set the opacity of an object. The fadeTo has two parameters -- the length of the aniamtion, and the end opacity. so fadeTo(1000,0.5) would fade the element to 50% opacity over one second... fadeTo(0,1.0) would instantly set the opacity to 100% (over 0ms = instantly).

First off, load up the start file [yosemite_start.html](http://webdev.usc.edu/itp301/lecture_examples/yosemite/yosemite_start.html) AND save the four photos (you can just save the thumnails).

Now perform the following steps inside the document ready jQuery script area provided:

*	On start use fadeTo to set the opacity of all #thumb objects to 0.5 opacity over 0 seconds.
*	Use "on" action to bind to all .thumb objects a mouseover event that instantly sets the opacity of just THAT objct to 1.0 (usng fadeTo).
*	Use "on" action bind to all .thumb objects a mouseout event that instantly sets the opacity of THAT object (back) to 0.5.. you could also just reset the opacity of all #thumb objects to 0.5
*	Use "on" action to bind to the #thumb2 object the following:
	1.	Hide #mainphoto
	2.	Set the .attr "src" of #mainphoto to "y1.jpg"
	3.	fadeIn #mainphoto
	4.	Set the .html of the #caption object (a div) to text or html that is a caption for that photo -- such as "This is a photo of <em>scenery</em>"

At this point you should have a page that when it loads shows al thumbnails at 50%, when you mouse over a thumb fills in to 100% opacity, when you mouse out goes back to 50%. And when you click on the second thumb it hides the main photo, sets it to that image, then fades the main photo back in... and changes the caption. To see the page at this step you can load [yosemite_1.html](http://webdev.usc.edu/itp301/lecture_examples/yosemite/yosemite_1.html).

At this point you can either continue along, enabling the other thumbnails... or switch over to working on your own Interactive Photo Gallery assignments.
