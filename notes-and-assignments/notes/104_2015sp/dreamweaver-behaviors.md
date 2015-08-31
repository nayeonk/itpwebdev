Dreamweaver Behaviors
====================

**<span style="color:red">Download the following files for this lecture</span>**
* [flip.gif](images/flip.gif) <img src="images/flip.gif"/>
* [flop.gif](images/flop.gif) <img src="images/flop.gif"/>
* [fgdhtml.zip](downloads/fgdhtml.zip) (Note: this is a zip file so after you download the file to your computer, you will have to uncompress it)

### Dynamic HTML

* Dynamic HTML or <em>DHTML</em> is basically combining HTML, CSS and Javascript 
  to create interactive, dynamic elements on web page 
  * HTML creates the objects on and in a page.
  * CSS defines the properties (color, size, etc.) of HTML objects
* HTML and CSS are static, and when a page completes loading in your browser the underlying HTML and CSS do not change.
* Javascript runs inside a page, and can alter the content/properties of HTML and CSS, often in respone to the actions of a user on the page
* Dreamweaver has a range of "pre-written" Javascript routines that let you set up certain page and object interactions. Basically you can make elements of the page change as users do certain things. These pre-written Javascript routines in Dreamweaver are called "Behaviors".

### Dreamweaver "Behaviors"

* Behaviors are Dreamweaver's pre-written Javascript routines. They basically introduce degrees of interactivity or DHTML.
* Behaviors have two core componenets: Triggers/Events and Actions.
* "Events": What user interaction will trigger the behavior? Mousing over an object? Clicking it? Etc. When you create behaviors, you always start by selecting the object on which the EVENT will be associated (not necessarily the one with which the action will be).

	* Typical events include: onmouseover, onmouseout, onclick and onchange.

* "Actions": These are the actual Javascript/DHTML functionalities such as changing an image, bringing up an alert message, opening a new browser windows, and others. Actions will usually have parameters to be defined through an authoring GUI -- which image will be changed (and to what new graphic file), what page will be loaded into the new browser window, what is the message for the pop-up alert, etc.
  
* Types of common "actions" include: opening new browser windows, changing the appearance of images, showing or hiding layers, change the text inside containers, and bringing up pop-up alert messages.

* Creating a behavior: You highlight the object that you want the event (user interaction) to be based on or triggered by. Then you go to the Behaviors window and Add the Action to be run. After defining the parameters of the Action, you will see a new entry in the behaviors window. You can then change the Event (trigger for the Action) or the action details.
* Editing behaviors: You highlight the TRIGGER object on which the EVENT was attached, then in tbhe Behavior window you can change the Event or double-click on the Action to redefine its parameters.