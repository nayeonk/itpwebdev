Intro to Styles
===============

HTML/CSS Styles have many components to them, including stylesheets, which we will get into later. For now, think of styles as formatting attributes that you can "turn on" for an object/element or section of the page

Styles can format:

* text properties such as its color, font face, size, etc., as well as to special formatting such as transforming text to ALL CAPS or setting the leading or line spacing for a block are 
* margin and spacing properties of blocks 
* background color and image properties of blocks 
* other, specialized properties such as the bullet styles of lists 


  
For now we are only going to explore setting style properties inside an html tag. Later in the semester we will get into stylesheets and named styles, and redefing style properties of an html object type. 

For formatting sections of text, you will generally put style blocks into paragraph (p) or span (span) tag. Paragraph tags are used to defined a paragraph of text, span tags are used to format any amount of text -- from one letter ro word to multiple paragraphs. The main difference for now is taht paragraphs space themselves out, and that you can use the align attribute of a p tag to make the paragraph right or center aligned. 

To define one or more styles you open up a "style" attribute of an html tag, then set the property to one or more style:value settings. For instance, the following would start a block where all of the text is red.

```html
<span style="color: red;"> 
```

 If you want to include more than one setting at a time, you separate them with semi-colons. The following would start a block of text that is purple and 24 point in size.

```html
<span style="color: purple; font-size: 24pt;">  
```

Some common style properties you will use a lot are:
    
* font-size (typically in measurements such as pt or px, i.e. 18pt or 18px) 
* color (text color) 
* background-color (of an object, from the body to a paragraph to a span tag, named colors like green or hex ones like #4499aa) 
* text-decoration (underline or none -- often used to REMOVE lines from hyperlinks/a) 
* line-height (height of a line, plain number like 2 is line spacing, or measurements such as 18pt) 
* text-alignment (right, left, center)
* background-image (format uses a url object, such as background-image:url(mypic.gif))
* margin - the spacing on the outside of of a block
* padding - the spacing on the inside of an element
    

Some basic tips about assigning style properties:

* Whereas in HTML we set values with equal signs, like border="0", in styles you assign values with colons, such as font-size:24pt 
* Whereas in HTML we "quote" attribute values, in styles you (usually) do not put quotes around the "value" for an attribute. 
* When you close the tag that has the style settings, all of the styles on that tag are cancelled. So for instance, &amp;tl;span style="color:blue;font-weight:bold"&gt; create blue and bold text... and closing &lt;/span&gt; turns off both the blue text switch and the boldness. 
* You can nest style commands. So, for instance, maybe you start your page with a &lt;span style="font-family:Verdana;"&gt; so that all text on the page is in the Verdana font. But then later you start a &lt;span style="background-color: yellow;&gt; to create a short block where the background color behind the text is yellow. The first instruction (font-family) is still active when the background-color is on. And when you just close &lt;/span&gt; that turns off the most RECENT block (the background-color). It will take a second &lt;/span&gt; to turn off that first instruction (font-family). 
    

There are a LOT of style properties you can play with. Some effect text, some will only effect images, and some will effect objects we have not gotten to yet. Try playing around with setting some of them through span tag.

Here is a pretty exhaustive list of CSS properties: [Mozilla CSS Reference](https://developer.mozilla.org/en-US/docs/CSS/CSS_Reference).


###Files from 1/26 Lecture

These are the HTML files I created with you during lecture. Feel free to reference them for your labs/assignments. To view the code, click the file to open, right click on the page, click View Source. 

* [demo.html](/demos/104/W3/demo.html)
* [classpage.html](/demos/104/W3/classpage.html)

