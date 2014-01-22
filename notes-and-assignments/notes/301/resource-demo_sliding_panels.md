Reading - Demo Sliding Panels
========
Demo Project - Sliding Panels Page

###jQuery demo -- code up a sliding panels page:

_Please note: This demo is meant to be done AFTER having gone through the second jQuery lecture "jQuery continued"..._

First off, load up the start file [jq_classes_1a.html](http://webdev.usc.edu/itp301/lecture_examples/jq_classes_1a.html).

Now perform the following steps inside the document ready jQuery script area provided:

1.	Hide all .info objects
2.	When the #bounce object is clicked slideDown ALL .info objects and then slideUp all info objects (chain them).
3.	When the #collapse object is clicked hide all .info objects.
4.	When the #expand objects is clicked show all .info objects
5.	When someone does a mouseover on an .item object:
	1.	Set the css background-color of THAT object to yellow
	2.	Target the NEXT object on the page and perform a slideDown
6.	When someone does a mouseout on an .item object:
	1.	Set the css background-color of THAT object to #eee
	2.	Target the NEXT object on the page and perform a slideUp
Wnen you are done your page should be performing like [jq_classes_1b.html](http://webdev.usc.edu/itp301/lecture_examples/jq_classes_1b.html)

If you want to see a more advancesd version of the page which has an iframe that "previews" the websites, you can look at [jq_classes_2b.html](http://webdev.usc.edu/itp301/lecture_examples/jq_classes_2b.html) ... but note that does use a little bit of Javascript (not just jQuery).