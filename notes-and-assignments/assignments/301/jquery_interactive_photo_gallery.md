jQuery Interactive Photo Gallery
================================

Use jQuery and a few graphics to build an interactive photo gallery about yourself.

1.	Pick at least 6 photos about yourself (vacation, family, attending events, etc). Collect the photos and write captions for each one.
2.	Write a heading tag to give your gallery a title, ("My Seattle Trip").
3.	Create a layout for your photo gallery page:
	*	Vertical layout (same as the example in class, or reversed with the main gallery image on top, thumbnails on bottom.)
	* Horizontal layout where the thumbnails are on the left and the main picture is on the right
	*	Mixed layout where thumbnails are on top and bottom or left and right and the main image is in the middle
4. Div and image set up:
	1. Create a div that will contain your thumbnails. I would suggest giving all of those thumbnails the SAME class, but giving each thumbnail a unique ID.
	2. Create another div containing an image with the same src attribute as the first thumbnail. Modify the image's width and height using an inline style or width/height attributes. Also, give that image a UNIQUE ID such as __bigphoto__.
	4.	Next to #bigphoto, create a caption.
5.	Use jQuery to set up the following interactivity:
	1.	When the page loads set the opacity of all thumbnails to 0.5.
	2.	When a user mouses over a thumbnail set THAT thumbnail to 1.0 opacity.
	3.	When a user mouses out of a thumbnail reset all thumbs to 0.5 opacity.
	4.  Create a CSS class called "selected" with a border-width of 2px in your stylesheet (internal or external). 
	5.	When the user CLICKS on a SPECIFIC thumbnail (select by id using jQuery using an ID selector):
		1.	Hide the bigphoto
		2.	Set the .attr "src" of the bigphoto to the appropriate file name.
		3.	fadeIn the bigphoto
		4.	Set the .html of the caption div to an appropriate text caption.
		5.	Remove the "selected" class from all thumbnails. Add the class "selected" to the thumbnail that was clicked.

_If you have problems getting started, you can review the Resource "Demo photo gallery" from the course site._