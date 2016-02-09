Divs continued & Stylesheets
============================

Save the following files for lecture (right click on page, click Save As...):
* [Centering example](notes-examples/104/div_centered_start.html)
* [Instagram Photo Grid starter](demos/104/W5/gallery_start.html)

### Lecture Overview

* Review centering
* Building "grid"-like layouts
* Stylesheets
	* stylesheets vs inline styles?
	* style tag in the head
	* ID selectors
	* Class selectors
	* Tag selectors
	* style precedence
* Instagram Photo Grid demo


### Review Centering

* To center a BOX -- use a style instruction of "margin: auto" in conjunction with a DEFINED width to make a div/container be "centered" within its area.
* To center an image or text, add a style instruction of "text-align: center" to its container (or wrap a container/box around it first). That will make the contents (text and images) lay out down the center of the box.
* See this [centering example](notes-examples/104/div_centered.html): one box is normal (left) positioned on the page, whereas the second one is "centered". And notice that inside of the first box its text is centered down the middle.

 
### Building "grid"-like layouts

* If you want to lay out lots of boxes evenly spaced out like a grid, you need to calculate their sizes AND their margins/paddings, then set an outer box that is that total.
* So imagine you want a X by Y set of boxes like the picture to the right. If each box is 50 pixels, with 5 pixel margins and 5 pixels padding, that means each box is really 70 pixels (50 width + 5 left margin + 5 right margin + 5 left padding + 5 right padding), so four boxes x 70 pixels = all four boxes would take up 280 pixels across.. and if you set up a 4x4 grid that would be 280 x 280 pixels.... So a container for all 16 boxes (if the container ITSELf has zero padding and zero margins) would need to be 280 x 280.
* But if you just put all those divs together, they would not stack. So each "row" of boxes need to all have the same float (like float:left), AND you need to "reset" the floats after each row.

This is the drawing from today's class to help you visualize the grid layout:

<img width="500px;" src="demos/104/W5/drawing.jpg">

 

### Internal Stylesheets

* Stylesheets are sections of HTML where you can save groups of style instructions that match selections of HTML elements in your page. For example, you can define one group of styles that applies a color of red and background color of green, and just point various HTML elements to this group of styles. This way, if you need to make changes to the styles, you only have to change it in one place rather than in the style attribute of every HTML element.
* They are located either in the "head" of a page (which is called an internal stylesheet), or in a separate file that is "linked" into a page (which is called an external stylesheet).
* Stylesheets start and stop with the "style" tag.
* We create a group of styles with the "squiggly" brackets. Within these brackets, we place one or more style declarations. To apply a group of styles to HTML elements, you target elements on your page with a CSS selector.

#### CSS Selectors

##### ID Selectors
* In your stylesheet, store your style instructions under an ID (pound sign) name in the format #name ... such as #outercontainer
* The object in your page with that id (such as div id="outercontainer") will automatically acquire those style settings

##### Class Selectors
* In your stylesheet, store your style settings under a class (period) name in the format .name ... such as .headline
* Any object in the page that is set to that class will acquire those style properties, such as span class="headline"

##### Tag Selectors
* In your stylesheet, store your style instructions under an html tag name
* ALL objects of that type in the page (img for images, div for div boxes, a for hyperlinks, etc.) will have those style properties as their new defaults

Sample stylesheet (which would be inside a style block in the head):

```css
<html>
	<head>
		<style>
			/* 
			 Applied to any element with an id attribute equal to outercontainer. 
			 Remember, id attributes should be unique on every page.
			*/
			#outercontainer { 
				margin:auto; 
				width:90%; 
			}

			/* these styles will be applyed to any HTML element with a class attribute of bluebox */
			.bluebox { 
				width: 200px; 
				float: right; 
				background-color: blue; 
				border: solid 2px black;
			}

			/* These styles will be applied to all anchors */
			a { 
				text-decoration: none; 
				color: purple;
			}
		</style>
	</head>

	<body>
		<div id="outercontainer">
			This is the outercontainer. It will have a width of 90% and margin auto.

			<div class="bluebox">
				This is div with a class of bluebox. It has a width of 200 px, float right, border, and blue background color.
			</div>

			<div class="bluebox">
				This is another div with a class of bluebox. This will look exactly same as the div above because it has the same class.
			</div>
		</div>
	</body>
</html>
```


###Instagram Photo Grid Demo
To learn more about the grid layouts we are going to re-create an instagram page during today's lecture:

<img width="45%" src="/demos/104/W5/instagram_screenshot_v2.png"/> 

The finished demo file will be uploaded to this [link](demos/104/W5/PhotoGallery.html) when the lecture is finished. 

The calendar starter file will be uploaded to this [link](demos/104/W5/calendar.html) when the lecture is finished.

### Lecture Video
<iframe width="420" height="315" src="https://www.youtube.com/embed/5qIrRklXuXg?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>