Lecture - Intro to Interactivity, JS 
=============================================
Introduction to concepts of interactivity, client-side web development and Javascript

###What is Interactive Web Development? Well, let's back up and ask first what are some terms:###
* Web Publishing: Basic production of web pages using html and css
* Web Development: Adding coded elements to pages such as database calls, interactivity, pull data from other pages or sites, etc. Basically everything beyond publishing.
* Server-side Web development: Code that runs on a server that executes in various scripting languages such as ASP/.Net, PHP, Coldfusion, JSP, etc. ALL server-side scripting is executed and REMOVED from pages BEFORE the output (web page) is sent to the end-user's browser/computer.
* __Client-side Web Development: Scripting stored in a web page that runs in the client's browser (on their machine). ALL interactivity and real-time elements of pages have to be client-side (because server-side is removed before the page is delivered to the user). Javascript (and varient libraries such as Ajax and jQuery) is the ONLY language that runs in the browser and therefore enab les interactivity.__

So regardless of what server platform you build a site in (.Net, PHP, etc.) what are the ONLY technologies that make up the end result of a Web page that is delivered to a user?
* HTML
* CSS
* Javascript (including JS libraries such as jQuery, Ajax, etc.)

#### HTML: ####
* HTMLtags create OBJECTS on a Web page. So the img tag creates an image, the a tag a hyperlink (anchor), the p tag a paragraph, the div tag a "box", etc.
* Attributes of HTML tags further define the properties of an object. So the href of an anchor defines where the link goes to, the class attribute of a tag defines what css class the object belongs to, the maxlength attribute of a form text box defines the maximum number of characters that can be entered, etc.
* Although HTML tags technicallt support attributes such as width, height, bgcolor, etc., best practice is to use Styles/CSS for all formatting and design instructions for objects.

#### CSS/Styles: ####
* CSS/Styles do NOT create objects.
* Style properties -- such as width, color, float, etc. -- define the appareances, dimensions, and at times behaviors of objects (created by HTML tags).
* Style instructions can be applied in-line (inside HTML tags in "style" blocks
* Most commonly style instructiosn are written inside stylesheets and applied to objects through IDs, Classes, Tags, or combinations of the three.
* A small number of pseudo-classes such as "hover" allow CSS to apply a limited amount of interactivity to objects.

#### Javascript: ####
* So HTML creates objects, and CSS defines many of the properties of the objects, but those instructions are STATIC (they do not change). The unique thing that Javascript can do is REDEFINE objectsa dn their properties.
* The majority of interactivity in a page is implemented by "delayed" Javascript that executes when a particular user "event" occurs upon an HTML object. Most of the interactive "effects" performed by Javascript consist of assigning new values to HTML and/or CSS properties of objects. So for instance, a rollover is simply an instruction to change the "src" attribute of an image (to another file) when the "OnMouseOver" event occurs upon that image.
* Rather than having to write common JS-based functionality from scratch every time, developers write libraries for common activities. All of the "Behaviors" in Dreamaweaver are pre-written Javascript routines implemented through a visual interface. The Spry modules such as drop-down menus in DW are similarly run by a series of functions and pseudo-objects that Adobe developers wrote.
* To make JS-development even easier, developers write not only libraries but new frameworks with their own unique syntax (simpler and easier to use than Javascript) to implement powerful, interactive features in Web pages.
#### Why is JS important / what can it do? ####
* Create interactivity betwee the user and the page
* Make pages dynamic AFTER they load
* Implement logic, workflow and analysis into a page
* Process asyncronous data -- ability to exchange information with other web pages and sites in real-time
* Act as a bridging technology between:
  * page and the user
  * html and scripting/programming languages (server side)
  * html and css
#### What does it do: ####
* Manipulates objects
  * generic object manipulation
  * layer manipulation
  * div redefinitions
* Creates objects (advanced)
* Stores data in variables and arrays
* Calculates: literal math, evaluates data, etc.
* Can have logical branching -- puzzles, good and bad data, etc.
* Can be event-based -- delayed execution

#### Javascript is commonly used to: ####
* Validate data in forms
* Respond to user interaction with objects on a page
* Change content, stylesheets, images in a page
* Load data from a server (generally in XML format) and display it in a page (without reloading)
* Create dynamic menus
* Animate elements such as objects "flying" around the page, or creating visual transitions such as layer wipes or fades
* Create stand-alone widgets such as preview interfaces, calendars, clocks, calculators, etc.

#### Advanced JS: ####
* complex apps -- full data GUIs, games, etc.
* call and parse web services
* set up callers and "wait"
* communicate with flash apps
* catch variables/data from server-side and store

#### Javascript examples and notes ####
* ___Images swapping and pre-caching___
  * Related Concepts:
    * Pre-caching Images
    * Vary Basic Programming:
      * Changing Objects
      * Timers (in milliseconds)
      * Loops
    * Example http://www.dannyg.com/javascript/imgobj/imgobject.htm

* ___Interactive UIs___
  * Drop-down navigation menus
  * [Spry Tabbed Panels](http://webdev.usc.edu/itp104/lecture_examples/spry_tabbed_panels.html)
  * [Spry Accordians](http://webdev.usc.edu/itp204/lecture_examples/colors_spry_accord.html)
  * [Custom Interactive Photo Galleries](http://webdev.usc.edu/itp104/lecture_examples/fg/div_sample_2b.html)

* Storing/retrieveing data inside (conditional) routines.
  * Related concepts:
    * Serverless data storage
    * Data entry validation
    * Array objects
  * JS Example: www.dannyg.com/examples/ssn2/ssbirthplace.htm
  * Notes: Commonly Web sites store data in databases, and clients enter in their query or desired information and then server-side request is made, data located in database, and answer returned in new page. But that can be time-consuming. If the data set is small enough, AND STATIC, much faster to store all data in conditional routines or arrays (or both) and let Javascript retrieve or filter data to same page.

* Forms validation:
  * Related concepts:
    * Data checking/validation
    * Notes: Dreamweaver's validation functions are just JS routines. Hand-writing JS allows one to create custom validation routines and criteria, including multiple, conditional versions.

* Interactive data:
  * Related concepts:
    * Scripted tables (graphic images compiled together)
    * Analysis of data
    * Pre-cached images
    * Custom images (combination) like a Perl script
  * Graphic Resitors Example: www.dannyg.com/examples/res2/resistor.htm
  * Password Validator Example: http://webdev.usc.edu/itp204/lecture_examples/password_colors2.html
  * Other examples: Most "build a computer/car" web pages, such as http://www.bmwusa.com/Standard/Content/BYO/Default.aspx (after you pick a model)
* Dynamic HTML:
  * Displayed concepts:
    * Layers
    * Object Positioning
  * Example: www.dannyg.com/examples/puzzle/mapgame.htm
  * Notes:
    * Notice many of the 'behaviors' you've seen in Dreamweaver such as dragging objects by changing its coordinates to that of the mouse coordinates when active.
    * Conditional routines check the coordinates of puzzle pieces and change the state headings to green when appropriate. 
    * If all state coordinates correct 'Congratulations' appears.
    * ' graphic runs routine that brings out Instructions layer by changing putting its Z index forward and changing its X coordinate by -5 increments until it is fully onscreen (width of browser window interior / 2 - 150).
    * This map is cross-browser, but originally Danny had two versions, one for each browser.

### Concept Review: ###
* Server-side processing and dynamic pages
* Client-side processing/scripting
* Javascript vs. Java vs. Ecma vs. ActionScript
* XHTML and XML
* Dynamic HTML
* Interactive web pages
* Javascript vs. JQuery vs. AJAX
* Object-based scripting
* What types of sites use Javascript?
