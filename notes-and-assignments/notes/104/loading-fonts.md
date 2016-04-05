Fonts
-------------

Fonts are a key element in the world of web design. 

###CSS Font Families

In CSS, there are two types of font family names:

* **generic family** - a group of font families with a similar look (like "Serif" or "Monospace")
* **font family** - a specific font family (like "Times New Roman" or "Arial")

<img src="images/fonts02.png" width="800"/>

<img src="images/fonts.png" width="800"/>

###Custom Fonts
There are a few fonts that are standard in websites. These are the most common fonts you have seen such as Arial, Times New Roman, Courier New, and more. But what about those fancy looking fonts?

There are currently two ways of implementing custom fonts
1. Link through Google fonts
2. use @font-face

####1. Google Fonts
[Google Fonts](http://www.google.com/fonts) has hundreds of fonts for free that are very easy to use. Use the steps below to use these fonts:

1. Browse through their collection. You can filter through different styles of fonts (serif, sans serif, etc), thickness, width, and more.
	<img src="images/fonts03.png" width="800"/>

2. When you find a font you like, click "Add to collection." You can keep adding more fonts until you are done with your selections.

3. Click on the "Use" tab at the bottom of the page. This will bring up a page that shows a list of the fonts you have selected. You can select alternate styles of the chosen fonts here (bold, italic, etc).

	<img src="images/fonts04.png" width="800"/>

4. Google will also generate two pieces of code that you need to add to your code to use the fonts you selected. You will see something like below. Add it somewhere inside the <head> of your HTML file
		<head>
			<link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
		</head>

5. Then, add this inside your any selector of your style:
	
		font-family: 'Lobster', cursive;


####2. Using @font-face

You can add in almost any fonts out there as long as you have the font file. Note that although you may see the font a certain way on YOUR computer, other computers may not see it the same. 

First, you must upload the font file to your web server. Then, add the following to your stylesheet:

	@font-face {
		font-family: myFont; /* You can name this however you'd like */
		src: url(NAME_OF_FONT_FILE.ttf);
	}

Then you can add this font-family wherever you need. Such as:

	body {
		font-family: myFont; /* Now all the elements in the body tag use this font */
	}

###Resources
* [Google Fonts](http://www.google.com/fonts)
* [100 Best Free Fonts](http://www.creativebloq.com/graphic-design-tips/best-free-fonts-for-designers-1233380)

###Lecture Video
<iframe width="560" height="315" src="https://www.youtube.com/embed/O32LK0KLx00?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

###Lecture Files
* [font.html](/demos/104/W12/font.html)
* [video.html](/demos/104/W12/video.html)
* [social.html](http://scf.usc.edu/~nayeonki/itp104/social.html)