Edit style properties
=====================

Write Javascript to edit style properties of IDed DIVs

Save this [start page](http://itpwebdev.herokuapp.com/starters/301/edit_style_properties.html). The first thing you might want to do is open that page in Chrome and temporarily change the visibility of the 3 hidden layers that are in the page using Chrome Developer Tools. This way you can see them.

Use JavaScript (NOT jQuery) for the first two rows of buttons. Each "change" requires setting a particular style property of a layer (div). 

Use jQuery to script the third row of buttons (Sports). 

For the "Toggle" buttons either want to set the visibility to visible or to hidden... but you need to use a conditional clause (if) to first read the current visibility property and then set it to the opposite. 

__Advanced:__ 

Although not significantly more complex, the most efficient way to write the page is to create Javascript functions to run all of the changes (as opposed to inside of event handlers), using parameter variables so that things like move and toggle could be used for any object, and write them in such a way that they can be called both by your JS and your jQuery code.  
