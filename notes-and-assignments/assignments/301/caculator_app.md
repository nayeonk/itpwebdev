TV Show Page
============

Create a web page for a TV Show that includes general show information and pictures from the show, information on the main characters, pictures of the characters, and information on the underlying actors. 
 
This page will be laid out using divs as described below:

1. Find a real web site based on a TV Show. Get text and graphic assets from the site. Also come up with a basic color scheme (background, 2 or 3 primary text colors, etc.) based on the show's graphics.
2. External Stylesheet: The entire page has an external stylesheet that controls all design and graphics (through css).
3. Body style: The overall page has a background color, specific font, etc., all dictated through a style call using the body tag.
4. Header: The top of the page has a header with a DEFINED WIDTH (800 pixel, or whatnot) that is centered across across the page/browser, that includes the title of the show (centered) and a background color (NOT a background image). A specially non-repeated background image will be added later. The width of the header will be the "max" width of the layout area of the page (all following areas).
5. Footer: The bottom of the page will contain a copyright notice (grab one from the site you get all your content from) and the same background color as the header.
6. Left sidebar: The main web page will feature a column (NO WRAP) that runs down the left side of the page. This column will list the major characters of the show. Each character will have a small photo/graphic and a short description. For each character:
	1. Create a DIV (within the column) with a unique ID (like Brian).
	2. Inside that div put the character's name and photo
	3. Inside the div built another div with its own unique ID (like BrianDescription). Inside that div put the description of the character
	4. In your stylesheet create one style entry under the ID of the description div that sets visibility:hidden
	5. Then create a second entry that features a compound of the firstID:hover descriptionID that sets the visiblity:visible
	6. When those two stylesheet entries are done the description div should be hidden by default... but if you mouseover/hover the main div for that character the description should show up... and then when you mouseout of the character box it should go back to hidden.
7. Right sidebar: 5 episodes
	1. The main page should have a right sidebar that floats to the right and that the main/center article WRAPS arounds.
	2. The box should have a unique background color and padding/margins to space the text inside the box.
8. Main content: The major section of the page should contain a large amount of textual AND image content about the TV show. All images should be "floated" to the left inside the text/section.
9. Left sidebar and content background: Create a GIF that has a repeatable/tileable pattern or look that could be tiled behind the left sidebar AND the main content area. I.e. some kind of unique look/appearance that would set off the left column, then another look/style that would visually "defined" the content area. Make sure that the tiling graphic of the left sidebar STARTS are the top of the column. 


### Examples

![Entourage](http://webdev.usc.edu/itp301/samples/tvshow_sample1.png)
![Raising Hope](http://webdev.usc.edu/itp301/samples/tvshow_sample2.png)
![How I Met Your Mother](http://webdev.usc.edu/itp301/samples/tvshow_sample3.png)