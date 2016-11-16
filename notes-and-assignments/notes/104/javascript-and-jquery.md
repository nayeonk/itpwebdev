JavaScript, jQuery, and Plugins
============================

### To-do for today's lecture
* Copy paste this starter code: <a href="http://codepen.io/nayeon/pen/ZBpbNG" target="_blank">http://codepen.io/nayeon/pen/ZBpbNG</a>
* Images to download for the LightBox demo:
	* [Image01_thumb](/demos/104/W13/image01_sm.jpg)
	* [Image01_large](/demos/104/W13/image01_lg.jpg)
	* [Image02_thumb](/demos/104/W13/image02_sm.jpg)
	* [Image02_large](/demos/104/W13/image02_lg.jpg)
	* [Image03_thumb](/demos/104/W13/image03_sm.jpg)
	* [Image03_large](/demos/104/W13/image03_lg.jpg)

### Review of Web Technologies
We have talked extensively about HTML and CSS this semester. Hopefully by now it is clear to you what HTML and CSS is. One major language used to manipulate a web page that we haven't talked about as much is **JavaScript**. Here is a review of those three languages and their major responsibilities:
* HTML - creates objects 
* CSS - defines how objects are displayed (its colors, sizes, etc)
* JavaScript - redefines or changes objects and their properties **at will**

### So what is JavaScript??
* A programming language (i.e. think variables, loops, functions) that can be run on your browser (i.e. no need to download it) to do more complicated functions such as math calculations, validate input, create online quizzes, and more.
* Became popular because it is supported by most major browsers.
* Generally used to make web pages interactive.
* NOT the same thing as Java, another programming language. They are completely different, just have similar names. Don't get these two confused.
* Currently HUGE in the web industry thanks to nodeJS and JS frameworks such as Angular and React. 

#### How to add JavaScript to my web page?
You can easily add JavaScript onto your usual HTML file by using a `<script>` tag. It can be added anywhere on the HTML file, but usually it is recommended to add this tag right before the closing `</body>` tag. See below for a concrete example:

```
<html>
	<head>
		<title>Title of page</title>
		<style>
			/* CSS styles here */
		</style>
	</head>
	<body>
		Hello world! etc etc

		<!-- Start script tag here -->
		<script>
			Can add JavaScript code anywhere here within the <script> tag
		</script>
	</body>
</html>
```


### What about jQuery?
You may have also heard the term **jQuery** while searching around to work on your assignments. You can think of jQuery as different way to use JavaScript. jQuery is:
* a JavaScript **library**, which is a bunch of code packaged together for you to do several things easier than just coding in straight JavaScript. 
* jQuery has functions for AJAX, animation (show, hide, fadeIn, fadeOut, etc), and many other useful JavaScript utilities
* jQuery is known for allowing you to very easily "select" any object on the web page and make it do interactive things. Example below.

In class we'll be touching the very basics of JavaScript and jQuery. If you would like to learn more about them (and do really cool things with them), take ITP301 or ITP302

#### How to add jQuery to my web page?
Adding jQuery is similar to adding JavaScript to your web page. Set up your HTML file as usual and add the `<script>` tag at the end of the page, right before the closing `</body>` tag. You have to do one more major thing though - you have to add the jQuery code so that you can use jQuery. JavaScript is built into the browser so you did not have to do this part for only using JavaScript, but you do have to do this part to use jQuery.

```
<html>
	<head>
		<title>Title of page</title>
		<style>
			/* CSS styles here */
		</style>
	</head>
	<body>
		Hello world! etc etc

		<!-- 1. Add jQuery code here using relative or absolute path -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script>
		<!-- 2. Start script tag here -->
		<script>
			Can add jQuery code anywhere here within the <script> tag
		</script>
	</body>
</html>
```

#### One more thing
When using jQuery it is a good idea (some would say required) to add this piece of code within the `<script>` tag:

```
<script>
	$( document ).ready(function() {
	    
	});
</script>
```

All this piece of code is saying is wait for ALL the objects of the page to load BEFORE jQuery can start doing its magic. This is neccesary because you don't want to select an object before it is created. More on this in more advanced classes. For the purpose of this class, just make sure you add it when you use jQuery. Here is how an entire HTML file would look like with jQuery plus this code:

```
<html>
	<head>
		<title>Title of page</title>
		<style>
			/* CSS styles here */
		</style>
	</head>
	<body>
		Hello world! etc etc

		<!-- 1. Add jQuery code here using relative or absolute path -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script>
		<!-- 2. Start script tag here -->
		<script>
			$( document ).ready(function() {
	    		Can add jQuery code anywhere here within the parentheses
			});
		</script>
	</body>
</html>
```

### Using jQuery Plugins
For the scope of this class, this is the extent we will be talking about JavaScript and jQuery. We won't be going deep into JavaScript of jQuery. Instead, we'll be learning how to use **plugins**, a set of code that provides specific set of functionality. They are usually written in jQuery and we don't have to do much to harness their power.

We will be trying out LightBox and Slick plugins.

####LightBox
* Go to LightBox official <a href="http://lokeshdhakar.com/projects/lightbox2/" target="_blank">website</a> for the documentation and demo 

####Slick
* Slick is one of many jQuery plugins for sliders
* <a href="http://kenwheeler.github.io/slick/" target="_blank">http://kenwheeler.github.io/slick/</a>

####General steps when using Plugins
As you saw above, each plugin has their own unique set of instructions on how to use them. Some may be a lot easier than others. However, there are usually three steps that you need to do to use most jQuery plugins:

1. Download the plugin files (usually a zip) and save them to a folder where your webpage lives.
2. Link the CSS and/or JS files to the webpage you want to use this plugin.
3. Initiate the plugin by pasting in some code.

####More plugins you could try out
*   [Fancybox 2](http://fancyapps.com/fancybox/)
*   [Lightbox 2](http://lokeshdhakar.com/projects/lightbox2/)
*   [Cycle 2](http://jquery.malsup.com/cycle2/)
*   [Face Detection](http://facedetection.jaysalvat.com/)
*   [Zoom](http://www.jacklmoore.com/zoom/)
*   [jCarousel](http://sorgalla.com/jcarousel/)


You can search for [more jQuery plugins in the registry](http://plugins.jquery.com/).

### Files from Lecture
* <a href="http://codepen.io/nayeon/pen/gLwLwp" target="_blank">Brief into to Javascript & jQuery</a>
* <a href="/demos/104/W13/lightbox.html" target="_blank">LightBox Demo </a> - To see the code, right click on this page and choose 'View Page Source'

### Lecture Video
<iframe width="560" height="315" src="https://www.youtube.com/embed/CB0U2qEXFvM" frameborder="0" allowfullscreen></iframe>
