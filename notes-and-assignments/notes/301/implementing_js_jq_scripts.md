Implementing JS/jQ scripts
===========================================
Basics of using other JS/jQ scripts/libraries. Implementing lightBox. Manipulating Spry.
 
******************************************************************
Please download the following zip file and extract it to a folder: 
starter files http://itpwebdev.herokuapp.com/starters/301/implementing_js_jq_scripts.zip
******************************************************************

### Javascript (and jQuery) libraries and plug-ins

Ok first, we will go over the fundamentals of working with JS libraries and plug-ins:

1.	Understanding the script:
	*	Documentation:
		*	To start, any distributed script or library should have documentation. In general, docs are often offered with different levels of detail or technical specificity.
		*	Any distributed script should have a basic "implementation" doc that explain how to install and "call" the functionality of the script. These are usually not too in-depth or technical, and are designed to get you up and running with the script as quickly and simply as possible.
		*	Many scripts and libraries will also have a second level of documentation that deconstructs the script in fine detail. These are useful if you want to edit the underlying script to change its workflow, or to highly customize its functionality.
	*	Samples: Most scripts will include a sample html page that illustrates the functionality through its use in a page.

1.	Implementation: Once you understand how a script works its time to actually use it. For the more basic scripts, it may be as easy as linking the script/s into your page, then calling the routines/functionality you want.
	*	Special objects or naming conventions: Some scripts need objects to be named a certain way (such as with IDs). Others will actually require that you include specified objects or variables in your page.
	*	Variables or configurations: Some script require you to define certain variables in a page, such as filepaths, roots, or environmental information about objects.
	*	Parameters: Almost all third-party functions will require you include input parameters when you call the functions. For instance, if you were to call a function showHideLayer, obviously that function would need to know what the ID of the layer is, and whether you want to show or hide it.
	*	Legalese: Most major distributed scripts come with clear legal language that outline the terms of distribution/use. The most common says that you must include their copyright/permission notice when you use their script. Basically that amounts to not removing their cmomments -- the idea is that if someone views the source/scripts of your page, they can clearly see who wrote the script you are using and its permissions/rights.

1.	Customization:
	*	With simpler scripts, it is often easy to go in and re-write their routines to customize their functionality or workflow to you pages.
	*	Other scripts and libraries such as JQuery or MooTools are so complex that it is doubtful you will want to take apart and re-write their functionality or workflow.
	*	Legalese part 2: Make sure to read the copyright/legal notices in scripts you use. Some specifically prohibit altering their code.

Now we will review the ___Basics for adding ANY Javascript or jQuery script to a page:___
1.	JS and CSS files: Identify which files need to be included into script and link tags in your page:
	1.	(Primary library: If the script is a plug-in for another framework/library then you need to first load the primary library. For instance a jQuery plug-in requires first loading basic jQuery.)
	1.	JS file	: There will always be at least one core JS/jQuery file to load (the basic script/plug-in/library). You can load a local or network/web copy. So for instance you might have script loads locally like <script src="lightbox.js"></script> or remotely like <script src="http://webdev.usc.edu/jquery.lightbox-0.5.js"></script>
	1.	(CSS file: Many plug-ins have CSS files that define the look and UI of elements used in their scripts. For these you have to include one or more core CSS files as well. Again these can be local like <link rel="stylesheet" href="lightbox.css" /> or remotely like <link rel="stylesheet" href="http://webdev.usc.edu/jquery.lightbox-0.5.css" />
1.	(Custom HTML: Some scripts require that page content (to be used/accessed by the script) to be specially formatted. This can vary from from adding special classes to content to formatting images for a gallery into unordered lists.)
1.	Initialization script block:: With few exceptions, you will need to include some starter commands in a script block in the page.
1.	(Custom JS: Some scripts require writing or editing basic set-up Javascript that specifically references IDs and Classes of objects in your page.)

#### Sample implementation -- jQuery Lightbox

Ok now we will go through the above steps with the super simple lightbox jQuery plug-in:
1.	Documentation: Doing a Google seach for "jQuery lightbox" leads us to the [jQuery Lightbox Plug-in](http://leandrovieira.com/projects/jquery/lightbox/) site. From there we can see info on Examples, How To Use, etc.
1.	Implementation: From the How to Use above we learn that items for the lighbox need to be in links (anchor tags) for each item that will be part of the presentation. And to activate lightbox you just a command .lightbox() off a jQuery reference to all of the relevant links. So for instance $(".lightbox").lghtbox() would make all links of class "lightbox" part of the Lightbox Presentation. Or $("#gallery a").lightbox() would make all links inside of the #gallery div/object lightbox items.
1.	Customization: The Extend tab in the Documentation also explained ways in which we can customize lightbox. For instance we can customize the background color of the lightbox, the opacity setting, the graphics used for Next and Previous buttons, etc. We will try changing the overlayBgColor and overlayOpacity. And also adding txtImage for image captions.

Ok so now that we understand how lightbox works, we are going to implement it into a page of images. Load up [dogs_lightbox_start.html](http://webdev.usc.edu/itp301/lecture_examples/dogs_lightbox_start.html).

So now we will follow our implementation steps in the above page:
1.	__Include files__: We need to load in jQuery, the Lightbox Plug-in and the lightbox CSS file. So we will add to our page at the end of the head:
	```js
		<script src="http://webdev.usc.edu/jquery.js"></script>
		<script src="http://webdev.usc.edu/jquery.lightbox-0.5.js"></script>
		<link rel="stylesheet" href="http://webdev.usc.edu/jquery.lightbox-0.5.css" />
	```

1.	__Custom HTML__: We need to decide how we are going to label/reference the items to be included in the lightbox. One approach is we could add a class of "lightbox" to any link that contains something we want in the Lightbox. In that instance we would add class='lightbox' to each link. The nice flexibility of this is that we could have photos spread through the page (in different areas). But notice that in our page all of the links are already inside of a special div with an ID of "gallery". So we actually don't need to do any HTML changes.
1.	__Initialization__: So since all of our lightbox links/anchors are inside of the div #gallery, our initialization string just requires a script block with a setup referencing #gallery a:
	```js	
		<script>
		$(document).ready(function(){
			$("#gallery a").lightBox();
		});
		</script>
	```
	
Ok so now test it. You can also go to [dogs_lightbox2.html](http://webdev.usc.edu/itp301/lecture_examples/dogs_lightbox2.html). Notice all of the images run the lightbox, and are one continual album. Of course, you might have noticed that there no previous and next buttons, and that the initial loading graphic was broken. That is because lightbox expects graphics to be in an images folder that we did not copy. But in general it is working well.

Ok so now we will customize it a bit.

Going into the core lightBox() command, and based on the documentation, we can add a map of lightBox properties so that the initialization code changes to:

	```js
		$("#gallery a").lightBox({
			overlayBgColor: 'teal', 	// color of the background of the lightbox
			overlayOpacity: 0.9		 	/* opacity of the lightbox. 
										The higher the value the less clearly you can see 
										the page when the lightbox is loaded */
		});	
	```
Take a look at the updated page or go to [dogs_lightbox2b.html](http://webdev.usc.edu/itp301/lecture_examples/dogs_lightbox2b.html). You can play with different colors and opacity settings to see the difference.


Working with Spry elements

When you add any Spry element to a page, Dreamweaver both copies to your computer any neeed library files and puts in the JS and HTML eventHandlers to trigger them.

So for instance, if you add any Spry Effect (from Behaviors > Effects) to a page, it adds a reference (and saves the file) for . All of the effects (fade, slide, etc.) run off that single file. And then of course it adds eventHandlers inside the trigger (html) tags/object based on your Behavior set ups.

For Spry widgets (like tabbed menus and accordian panels) it is a bit more complex. It is more than just loading a script file.

To get a feel for this we will add a tabbed panel to a page, then take a look at what Dreamweaver added to our page code. Then see if we can custom trigger functions of the Spry (within our own code).

So create a new blank document. Then save it. Then Insert > Spry > Spry Tabbed Panels. Then re-save. First notice that Dreamweaver prompted you that it saved TWO files -- a JS and a CSS file.

Now look inside the code of the page. We can see that it added the JS and CSS files into the page:
	```js
		<script src="SpryAssets/SpryTabbedPanels.js" type="text/javascript"></script>
		<link href="SpryAssets/SpryTabbedPanels.css" rel="stylesheet" type="text/css" />
	```
	
And also that it put script block at the bottom of the page of:
	```js
		<script type="text/javascript">
		var TabbedPanels1 = new Spry.Widget.TabbedPanels("TabbedPanels1");
		</script>
	```
	
So we can see that the JS files defined a parent object (Spry) that has a sub-object Widget. And inside that object is defined the TabbelPanels object (with all of its behavior and functionality). And that the initialization string took one div object from the page (TabbedPanels1) and told the script it was of that new TabbelPanels object type.

Looking into the HTML that it generated, we see the ID of the div it transformed into a tab Panel. Identifying it by ID of course allows the page to have multiple panels (each with its own ID and each initialized in its own JS line). Looking more closely as the HTML it generated we see that the tabbed panel consist of a div with a class of TabbedPanels. Inside that there is a .TabbedPanelsTabGroup with the tabs and .TabbedPanelsContentGroup with the respective content for each panel. Also note the tabs are only tied to their content by the order:
	```js
		<div id="TabbedPanels1" class="TabbedPanels">
		  <ul class="TabbedPanelsTabGroup">
			<li class="TabbedPanelsTab" tabindex="0">Tab 1</li>
			<li class="TabbedPanelsTab" tabindex="0">Tab 2</li>
		  </ul>
		  <div class="TabbedPanelsContentGroup">
			<div class="TabbedPanelsContent">Content 1</div>
			<div class="TabbedPanelsContent">Content 2</div>
		  </div>
		</div>
	```
	
So what if we wanted to create manual triggers in our page? Or add a delay before panels are changed? How can we figure out the behind-the-scenes of how to manipulate the objects?

Doing a Google search for "Spry TabbedPanel Documentation" I come across the Adobe Help/Documentation for [Tabbed Panels widget overview and structure](http://livedocs.adobe.com/en_US/Spry/SDG/help.html?content=WS6FED301A-59A1-45ce-BC1F-110743A27FE9.html). Besides walking us through how the Tabbed Panels work, notice that on the left navigation there are lots of sub topics for Tabbed Panels include "Open panels programmatically". And under that entry it has a sample:
	```js
		<button onclick="TabbedPanels1.showPanel(0)">open first panel</button>
	```
	
So, based on that, I could try creating links at the top of the page. So above the panel I write:
	```js
	<a href="#" onclick="TabbedPanels1.showPanel(0)">Open Panel 1</a> | 
	<a href="#" onclick="TabbedPanels1.showPanel(1)">Open Panel 2</a>
	<hr />
	```

Trying out the page, my manual links work just as well as the tabs. So now I could write a page workflow. Maybe one a quiz page after the user answers the first set of questions scripting automatically moves to another panel or questions. And manual Next/Prev buttons on each panel can move between them.


At this point we will try implementing another script that is a bit more complex than Lightbox. The instructions are on the Resource Demos implementing cycle...

 