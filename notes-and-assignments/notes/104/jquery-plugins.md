jQuery and jQuery Plugins
=========================
### Images to download for this demo:
* [Image01_thumb](/demos/104/W13/image01_sm.jpg)
* [Image01_large](/demos/104/W13/image01_lg.jpg)
* [Image02_thumb](/demos/104/W13/image02_sm.jpg)
* [Image02_large](/demos/104/W13/image02_lg.jpg)
* [Image03_thumb](/demos/104/W13/image03_sm.jpg)
* [Image03_large](/demos/104/W13/image03_lg.jpg)

### What is jQuery?

jQuery is an open source JavaScript Library. You can think of it like a toolbox for handling cross browser compatible JavaScript and adding rich behaviors to JavaScript like animations. jQuery has functions for AJAX, animation (show,hide, fadeIns, fadeOuts, etc) , and many other useful JavaScript utilities.

### jQuery Plugins

jQuery provides developers with a way to extend jQuery and abstract functions into a plugin. The main jQuery library includes the most common functions people use. Plugins are more specialized and may not be applicable to all sites/applications. Examples of plugins include:

*   [Fancybox 2](http://fancyapps.com/fancybox/)
*   [Lightbox 2](http://lokeshdhakar.com/projects/lightbox2/)
*   [Cycle 2](http://jquery.malsup.com/cycle2/)
*   [Face Detection](http://facedetection.jaysalvat.com/)
*   [Zoom](http://www.jacklmoore.com/zoom/)
*   [jCarousel](http://sorgalla.com/jcarousel/)


You can search for [more jQuery plugins in the registry](http://plugins.jquery.com/).

### JavaScript Basics

JavaScript can be placed in either an external file with a file extention of .js, within an internal script block (similar to how CSS can be added to a page in style tags), or inline (inside of an HTML tag). 

External scripts are placed in your page using the script tag with the src attribute, where src represents the path to the file name. This path can be relative or absolute.

```html
<script src="main.js"></script>
```


Inline script blocks are when you place JavaScript code within the script tags:

```html
<script>
// Javascript / jQuery code here
</script>
```


### How to add a jQuery Plugin to your page:

The general process typically follows this order, but every plugin is different so always read the documentation instructions.


1. Include the jQuery Source file as an external script reference.
2. Download the jQuery plugin and extract the compressed file. Include the jQuery plugin’s script file as an external script reference __AFTER__ the jQuery source file in step 1. Make sure your relative path is correct.
3. After the jQuery plugin source file inclusion, create a script block that selects the HTML elements you want to use the plugin on. Make sure your CSS selector is correct. 
4. Include the jQuery Plugin’s external CSS file in the head of your HTML page, if one exists
5. Make sure your HTML is structured EXACTLY like in the jQuery plugin’s example or documentation.


### Debugging Tips

1. If a plugin does not work, look in Chrome's Console to see if there are any errors which will be in red. You can access Chrome's console by right clicking on the window, Inspect Element, and click the Console tab.
2. Script order matters! Script references must be in the order of: jQuery source, plugin source file, then plugin script block
