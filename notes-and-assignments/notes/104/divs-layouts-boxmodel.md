Divs &amp; Layouts, Floats, &amp; The Box Model
===============================================

### Overview
* Recreating this article: http://www.nytimes.com/2015/09/10/technology/apple-tv-iphone-6s.html
* Download these two images: [image01](/images/apple_article_img01.png) | [image02](images/apple_article_img02.png)
* styles review
* floats (floating an image right and left w/ a paragraph that wraps around it)
	* margin property
* clearing floats
* divs (generic containers)
	* floating div with text wrapping around it
	* margin vs padding
* div for sections of the page (buckets)
	* header, nav, sidebar (floated), main (floated), footer
	* id attribute
	* layout help
	* float the sections
* "outercontainer" divs
	* centering the outercontainer
* the box model
	* total width of an element = width + borders + padding + margin
* general design considerations

### Style Review
  
So first off, it is a good practice to use CSS style properties to define the appearance and dimensions of objects. So while technically you can scale an image by doing:

```html
<img src="pic1.jpg" width="200" height="200" alt="David" /> 
```

... you __should__ use style properties to define its width and height, such as:

```html
<img src="pic1.jpg" style="width: 200px; height: 200px;" alt="David" />
```

We can add style margin and padding attributes to create some rudimentary indenting and spacing around elements. And we can use (with images in particular) the "float" style property to move an element to the side, also letting other elements "wrap" around it.

Before we get into layouts and the new "div" tag, let's remind ourselves how the style property "float" works. If you put three images side-by-side in your code, and they all have the same "float" (such as float:left), then they actually "stack" horizontally side by side (assuming there is enough horizontal width in the browser). But we can use this concept to control more than just images...


### Page layouts and the div tag

By default, text and images laid out on a page go the width of the screen browser. In other words, the default page is a large, single column that goes the width of the browser.

So the next step in controlling web page layouts is to use "div" tags to create "boxes" that do NOT go the width of the screen.

First off, we know that if you put an image in the middle of a paragraph of text, and give that image a float value, that the text will "wrap" or go around the image. As well as the concept above that we can "stack" up images side-by-side.

Similarly, if we store text in a "box" we can actually float that box in the middle of a paragraph, and the outer text will "wrap" around the "box" of text.

_Take a look at the page [float_image_box.html](http://itpwebdev.usc.edu/notes-examples/104/float_image_box.html) that shows one paragraph wrapping an image, and then another paragraph wrapping a box (with text in it)._

We create "boxes" (of text, images, or both) using the div tag. It is similar to the paragraph tag, except that it is regularly used to create regions that are NOT the whole width (100%). Rather, when we create divs we generally give them SET widths.
  
So what if we were to lay out three "text boxes" with divs tht were only 200 wide... and output them one after another? Well even though each box is not very wide, they render on different lines. Ok so what if we do the same thing but give each box float values? Then they lay out side-by-side similar to how images with float values stack together. Look at the code below, and compare the output of the top section (divs with no floats) versus the bottom section. To see the page in action look at [floating_divs.html](http://itpwebdev.usc.edu/notes-examples/104/floating_divs.html):


```html
<div id="box1" style="width:200px; height:500px; background-color: pink">Box 1</div>
<div id="box2" style="width:200px; height:500px; background-color: yellow">Box 2</div>
<div id="box3" style="width:200px; height:500px; background-color: magenta">Box 1</div>
```

```html
<div id="box1" style="width:200px; height:500px; float:left;background-color: pink">Box 1</div>
<div id="box2" style="width:200px; height:500px; float:left;background-color: yellow">Box 2</div>
<div id="box3" style="width:200px; height:500px; float:left;background-color: magenta">Box 1</div>
```


Ok, so what does this tell us? First off, the div tag can be used to create "boxes" in a layout. Unlike the paragraph tag, we CAN put divs (boxes) inside divs.

By default, a div tag runs the entire width of its container. i.e. divs have a default style of width:100%.If it is inside another div (box), then by default it goes all the way across (fills out) that box. If it is inside the page, then it by default goes all the way across the page.

### Key div layout style properties:

*  width: how wide will the box be... width:400px ... width:50% ...
*  float: for all but the outermost container, you probably need to have a float orientation (left or right) -- NOTE: for DIVs float will NOT work unless you ALSO have set a width to the box.
*  id: it is not readily obvious why yet, but for now just get in the habit of giving each div a UNIQUE ID name. Some good structural names are "outercontainer",  "header", "footer", "nav" and "maincontent". You can of course also make up custom names like "movie1" or "actor2".
*  margin: is the item "indented" or otherwise have a margin around the OUTSIDE of it? The property margin: will set a margin around all four sides of the box. Or you can set just a single side such as margin-left: 20px ... which would put a 20 pixel margin on the left side of the box. You can also use a special setting to make a box be "centered" within its containor (most often used to center a layout on a page) by setting margin: auto
*  padding:  where margin sets space OUTSIDE of a box, the style property padding creates spacing INSIDE the box (between the edge of the box and its internal contents. And like margin setting just padding will create padding on all four sides inside the box, or you can set an individual side such as padding-top.
*  border: the border around the edge of a box. attribute looks like border: solid 2px red ... which means a solid (line) border around the item, that is 2 pixels wide (the border) and is the color red. We will revisit borders in more detail next week.


### Layout help - Give unique background colors to each "box":

Before you start laying out a page, it is useful to first draw some sketches and have an idea of what layout you want to create. It is MUCH harder to lay out web pages "on the fly" without having first sketched and figured out the overall structure of the "boxes" of content.

Some people also find it useful to have unique background colors for all boxes (div) when they first start building the page and then remove them when their layout is created.

### Layouts -- start with an "outercontainer":

The first thing you will often do is decide the overall width dimensions of your page and create an "outer container" box for all of the elements. Think of this as setting the "width" of the main layout of your page. So if you wanted the whole web page to be 800 pixel across, then you would create an "outer" div (box) that would have a style setting of "width:800px" and then build your main page inside that space. An example of this might be:

```html
<div style="width:800px" id="outercontainer">
  Main page here
</div>
```

Second, you probably figured out a background color or images for that main page container. Do you want the area outside that "layout box" to have a background color or image? If so put some background style instructions into the body tag (which the "outercontainer" div is INSIDE.

To see an example of this, view the the [layout_start.html](http://itpwebdev.usc.edu/notes-examples/104/layout_start.html). Note that the PAGE (body) has a background-color of yellow, the "layout" area (outercontainer) has a background-color of pink, and there is some placeholder text inside the layout area to distinguish the boundaries of the layout space from the rest of the browser window.
  
Now it's time to plan out the main interiror of the layout space. Do you want an inverted L layout? Does your page have a distinct header and footer? Will your page have more than one column in its main space? Is there a navigation, and if so should it be a distinct column of be wrapped by the main content area? At the bottom of the lecture there are some links to sample layouts of news articles you can look through. All of those layouts start with an outercontainer/box, and then inside that box the page layout is created with 3-4 boxes.
  

### Some general design considerations for most web page layouts: 

1.  Will the web page have a fixed width or dynamically scale to the browser?
2.  Will the page have a header and/or footer?
3.  Will the page have an overall navigation (generally yes). Will it be Left, Right or Top aligned? Is it a fully separated column or will it "float" within other content?
4.  Outside of the navigation, will the main page have multiple columns or one main column?
5.  What kind of background colors and images will weave throughout the page?


### Files from lecture:
These are the HTML files I created with you during lecture. Feel free to reference them for your labs/assignments. To view the code, click the file to open, right click on the page, click View Source. You can also right click, save as.. to save the page on your computer.
* 