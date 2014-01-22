Assignment - jQuery Interactive Photo Galery
============
Use jQuery (and a little graphics) to build an interactive photo gallery on a topic.

Create an Interactive Slideshow about yourself

1.	Pic at least 6 photos about yourself(vacation, family, attending events, etc). Collect the photos and captions for each one.
2.	Create a UI for the gallery. It should look like a unified interface, and not just image and text elements. You can use a program such as Fireworks or Dreamweaver to create a simple graphic layout for the "photo viewer" and use AP DIVs to place the elements on top, or you can design something purely in CSS. The gallery UI should have an area for the name of the page, one for the thumbnails, a large photo, and a space for the large photo's caption. A sample of a gallery UI is to the right.
3.	Div and image set up:
	1.	If you use a background image (for the UI) then you will most likely need to lay out your page with AP divs, placing the background UI graphic in one AP div, then all of the main page elements in other AP divs laid out on top of that one. Or if you are using CSS just make sure your divs have a uniform look and design (including colors, rounded corners, etc.).
	2.	In the thumbnail div, place thumbnail images running down the side (vertically). I would suggest setting all of those images to the SAME class, but giving each one unique IDs.
	3.	Place one of the images in a large size inside the mainphoto div... and give that image a UNIQUE ID such as bigphoto.
	4.	Write and style a text headline into your title/headline div.
4.	Use jQuery to set up the following interactivity/heaviors:
	1.	When the page loads set the opacity of all thumbnails to 0.5.
	2.	When a user mouses over a thumbnail set THAT thumb to 1.0 opacity.
	3.	When a user mouses out of a thumbnail (re)set all thumbs to 0.5 opacity.
	4.	When the user CLICKS on a SPECIFIC thumbnail (code by #id):
		1.	Hide the bigphoto
		2.	Set the .attr "src" of the bigphoto to the appropriate file name.
		3.	fadeIn the bigphoto
		4.	Set the .html of the caption div to an appropriate text caption.
		5.	Set the .csss border-width of ALL thumbs to 0px (by class) and the botder-width of THAT thumb to 2px.

_If you have problems getting start on the coding, you can review the Resource "Demo photo gallery" from the course site._