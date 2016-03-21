External Stylesheets and CSS Selectors 
===================================

**Use the following starter file(s) for today's lecture:**
* <a href="http://scratchpad.io/tough-jam-6625" target="_blank">navigation_start</a>
* <a href="http://scratchpad.io/harmonious-idea-6086" target="_blank">position_start</a>
<!-- * [position_start.html](/starters/104/position_start.html) -->
<!-- * [css_selectors_start.html](/demos/104/W10/css_selectors_start.html) -->
<!-- * [dogs_end_captions.html](/demos/104/W10/dogs_end_captions.html) -->
<!-- * [cssnav_start.html](/demos/104/W10/cssnav_start.html) -->

###External Stylesheets

<p>One of the main reasons to use external stylsheets is to set up styles for use across ALL pages of a web site. You want a consistent look and feel in all your pages. The main "container", navigation, headers, etc., should all look the asme. So why set up those styles for every page when you can enter them in a central external stylesheet that all pages "load".
</p>

To link your external stylesheet, add the following code in the HTML file that uses the external stylesheet:

	<link rel="stylesheet" href="NAME_OF_STYLESHEET.css" type="text/css">


We can look through the sample CSS below, which could be in an external stylesheet that all pages of a site would share. We can think about how each instruction would set up "defaults" for all of the pages of the site:


<code><pre>
body { 
    font-size: 12pt; 
    color: purple; 
    background-color:yellow;
}

a {
	text-decoration:none;
}

a:hover { 
	text-decoration: underline; 
}

#outercontainer { 
	width:900px; 
    margin:auto; 
}

#content { 
	width: 100%;
}

.headline { 
	font-size: 24pt; 
    font-style: italic; 
    font-weight:bold; 
    text-align:center; 
}
</pre></code>


###CSS Selectors: Tag, ID, Class, and "Compound"

<ul style="margin-top:0px">
<li> <strong>Tag</strong>: Stylesheet instructions that start with a tag name redefine the style properties of that html tag. So a{text-decoration:none} remove all underlines from anchors (hyperlinks), just as img { border: 1px solid red} would apply red borders to all images placed with the img tag. <em>Note: there is a special master tag called "*" that represents all tags... so for instance * { color:black } would specify the color for ALL objects. </em></li>
<li> <strong>ID</strong>: Stylesheet instructions that start with a pound (#) sign are ID and define style properties for ONE object on the page (<em><strong>Reminder: </strong>You can only use an ID ONCE on a page for one object</em>). So for instance, #outercontainer { width:800px; background-color:yellow} would make the html object with id="outercontainer" 800 pixels wide with a yellow background color.</li>
<li> <strong>Class</strong>: Stylesheet instructions that begin with a period (.) define style properties for ANY objects that are set to that class. So an instruction of .thumbnail {width:80px;height:80px} would make any html objects with class="thumbnail" be 80 pixels wide and 80 pixels tall.</li>
<li> <strong>Compound</strong>: A compound is a selector that combines more than one component. For instance, a stylesheet instruction for ul a{ } would target not all ULs, and not all As, but only those anchors that are inside of a ul. Similarly, a selector of div.infobox would only target div that of the class infobox. And one for #nav * would target all objects inside the nav object. And to extend this much deeper, a selctor of #nav ul li a would target anchors that are inside list items, inside of unordered lists, that are inside of the object IDed as nav.  
</li>
</ul>


<p>
We are going to add the following to a page which will also act as a review of different style properties, syntax and functionality:
</p>

<code><pre>a {
	text-decoration:none;
}

a:hover {
	text-decoration:underline;
}

#outercontainer {
	width:1020px;
	background-color: yellow;
	text-align:center;
}

.box {
	width:220px; 
	min-height:120px;
	background-color: pink;
	float:left;	
	text-align:left;
	padding:15px;
	margin:2px;
}

.definition{
	padding-left: 20px;	
}
.box .highlight {
	font-weight:bold;
	color:purple;		
}

.linkbox {
	width: 600px;
	margin:auto;
	text-align: left;
	background-color: teal;
	color: white	
}

.linkbox a {
	color:white;	
}

.linkbox ul a{
	color:yellow;	
}

.linkbox ul a:hover{
	color:red;	
}

.linkbox strong{
	color: #9F9;	
}

.bc {
	clear:both;	
}

* { 
 	border: 1px solid gray;
}</pre></code>


<p>
In particular notice the in the stylesheet instructions the difference between the entries for the "a" instuctions and the ".linkbox a". The "a" instructions would apply to all anchors by default. Then the ".linkbox a" instructions would override the previous "a" ones ... but only if an anchor was inside an object with a class of "linkbox".
</p>


###CSS-driven drop-down menus

<p> So with our previous examples we saw that we can create a degree of "interactivity" in a page purely through css, with no Javascript, by setting up styles on a "hover" version of an object. But CSS can drive much more interactivity than just that.</p>

<p>
It may sound strang, but most navigation menus on Web pages today are actually coded up as UNORDERED LISTS. What you say? They look NOTHINg like bulleted lists. Well lets make up one anyways... trust me.
</p>

<p>
So to start out, create a set of nested ULs that contain links. For instance, we could take the main pages of a sports site like ESPN to create top level items (using li) for each sport, then under each sport we would have sub-unordered lists for different sub-categories.
</p>

<p>For our purposes, I've coded up a set of unordered lists based on Web Development at ITP.</p>
<code><pre>	
&lt;div id="nav"&gt;
    &lt;ul&gt;
    	&lt;li&gt; Webdev&lt;/li&gt;
    	&lt;ul&gt;
            &lt;li&gt; ITP104T&lt;/li&gt;
            &lt;li&gt;ITP104W&lt;/li&gt;
        &lt;/ul&gt;

	&lt;li&gt; W3Schools&lt;/li&gt;
        &lt;ul&gt;
            &lt;li&gt;HTML&lt;/li&gt;
            &lt;li&gt;CSS&lt;/li&gt;
        &lt;/ul&gt;
    	&lt;li&gt;Zen Garden CSSITP Web Site&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;
</pre></code>     
    
<p>Ok, so what we are basically going to do is:
</p><ul style="margin-top:0px">
	<li> Remove all margins and paddings from the menu/div, the ULs in the list and the LIs in the list</li>
    <li> Remove the bullets from all list items</li>
    <li> Change the list items so that they stack/float against each other (horizontally).</li>
  <li> Tell each list item that it can "float" against each other, and set margins around each</li>
</ul>

<p>First off, we need to remove all of the paddings and margins that might be in various parts of the menus. We could individially target different levels of the menu -- frm the parent div, to the ULs inside the div, and give each padding:0px and margin:0px ...</p>

<code><pre>
#menu {
	padding:0;
	margin:0;
	}

#menu ul {
	padding:0;
	margin:0;
}

#menu li{
	margin: 0;
	padding:0;
}
</pre></code>

<p>But INSTEAD, it is simpler to actually use the * object to simultaneus target "all" objects inside the menu like below:</p>
<code><pre>#menu * {
	padding:90px;
    margin:0px;
}</pre></code>

<p>So we would do this through the following CSS additions to the page to address the positioning, bullets and stacking of items: </p>

<code><pre>
#menu li{
	position: relative;	
	float: left;
	list-style: none;
	}
</pre></code>

<p>Now we need to add style instructions to the anchor themselves so they:
</p><ul style="margin-top:0px">
	<li> set a fixed width of 100px</li>
    <li> height of 30px</li>
    <li> change the anchors to BLOCK elements</li>
    <li> remove the underline</li>
    <li> set a text-slign of center and line-height of 30px</li>
    <li> set a yellow background for the "buttons" and a purple text color</li>
</ul>

<code><pre>#menu li a{
	width:100px;
	height: 30px;
	display: block;
	text-decoration:none;
	background-color: purple;
	color: yellow;
	text-align: center;
	line-height: 30px;
}
</pre></code>

<p>And lets also set a hover instruction to set the background color to a highlight color</p>

<code><pre>#menu li a:hover{
	background-color: red;
}</pre></code>


<p>Now we have them all laid out as we would like... with menu items UNDERNEATH their parents, etc. A sample of this is <a href="/itp104/lecture_examples/cssnav_2.html" target="_new">cssnav_2.html</a> You can see the cool hover color effects... BUT they are laid out across not up and down. So we need to set the level2 UL menus to ABSOLUTE positioning...</p>

<code><pre>#menu ul ul{
	position: absolute;
	top: 30px;
}
</pre></code>

<p>Now we can see the items go straight down from their parents as indented. See that in cssnav_3.html</p>
<ul style="margin-top: 0px">
    Remove all margins and paddings from the menu/div, the ULs in the list and the LIs in the list
    <li> Remove the bullets from all list items</li>
    <li> Change the list items so that they stack/float against each other (horizontally).</li>
  <li> Tell each list item that it can "float" against each other, and set margins around each</li>
</ul>
<p>Ok and finally, we will set the visibility of the sub-menus to hidden... and then add an instruction for hover of the harents to set their visiblity to visible (note that I have repeated the full menu ul ul from above with the one new additional line):</p>

<code><pre>#menu ul ul{
	position: absolute;
	top: 30px;
	visibility: hidden;
}

#menu ul li:hover ul{
	visibility:visible;
}
</pre></code>
<p>Voila! Now we have a full cascading menus using no scripting! Final result can be seen in the class examples repository.</p>
   		
&nbsp;

<p>Now.. having designed a snazzy navigation like that, I'd say there's a good chance you are going to use that nav on MULTIPLE PAGES of your site. And what a pain to have to copy and paste all that CSS into every page. Well, you don't have to. Writing out style entries in a page directly is called an Internal Stylsheet... but with an External Stylesheet we can save instructions in one central (non-html page) file... and then "point" web pages at that file to load in their style entries.
</p>

###Lecture Files from today
<!-- * [Completed CSS Selector](/demos/104/W10/css_selectors_end.html)
* [Completed CSS Visibility](/demos/104/W10/dogs_end_captions_end.html)
* [Completed CSS Position](/demos/104/W10/position.html)
* [Completed Dropdown Menu](/demos/104/W10/cssnav_end.html) -->

<!-- * [Completed CSS Position](/demos/104/W13/CSS_Position_Demo.html) -->
<!-- * [Completed CSS Navigation](/demos/104/W13/nav.html) - external stylesheet is linked inside this HTML page -->
