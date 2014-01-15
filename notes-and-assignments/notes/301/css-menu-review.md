Lecture - CSS menus review
===================
Review of creating css-driven menus plus a bit extra. Also resources on CSS3.

Save to your computer before lecture:
* [cssreview.css]
* [page to lay out]
* [Menu page with no css]
* [Menu page with basic css]

####CSS2 review and intro to some areas of CSS3####

 

Quick review of additional CSS2 concepts:
* \* (all) ... rarely used on its own, but often used as a compound such as #menu * to effect all objects inside of the menu object
* Newer properties such as rounded-corners adding "extra" properties but (at least for now) have to use multiple properties... i.e. not just border-radius:25px; but ALSO -moz-border-radius:25px; (for Firefox 3.6 and earlier)
* Full/in-depth list of CSS Selectors in all their permulations -- http://www.w3schools.com/cssref/css_selectors.asp
* Colors formats -- 6-digit hex, 3-digit hex AND RGB -- http://www.w3schools.com/cssref/css_colors.asp
 

 

####CSS-driven drop-down menus####

So to review, most modern "menus" are coded up as unordered lists with certain key properties:
* Each item/button is a list item with an anchor tag inside it
* Items in a menu are a sub-ul inside of a list item. Do NOT close the parent list item until AFTER the sub-list ends
* Remove all margins and paddings from the menu/div, the ULs in the list and the LIs in the list
* Remove the bullets from all list items
* Change the list items so that they stack/float against each other (horizontally).
* Tell each list item that it can "float" against each other, and set margins around each
* Set each anchor/iink to a block element(box) with a fixed height, width, and line height. Remove the underlines. And set the background and text color for the "buttons".

So to see a sample of how the menu is built save the [Menu page with basic css](http://webdev.usc.edu/itp301/lecture_examples/cssmenu1.html). To remind us of how different the "transformed" ul is, here is a version of the same [page with NO CSS](http://webdev.usc.edu/itp301/lecture_examples/cssmenu0.html).

So that is the basic menu structure without "hiding" or tucking away any of the sub-buttons and with no interactivity.

So lets start by setting a hover instruction that changes the background color:
```html
#menu li a:hover{
	background-color: red;
}
```
Now we have them all laid out as we would like... with menu items UNDERNEATH their parents. So we need to set the level2 UL menus to ABSOLUTE positioning...
```html
#menu ul ul{
	position: absolute;
	top: 30px;
}
```
Now we can see the items go straight down from their parents as indented. You can see that or get caught up with the [cssnav2.html](http://webdev.usc.edu/itp301/lecture_examples/cssmenu2.html) file.

Ok and finally, we will set the visibility of the sub-menus to hidden... and then add an instruction for hover of the parents to set their visiblity to visible (note that I have repeated the full menu ul ul from above with the one new additional line):
```html
#menu ul ul{
	position: absolute;
	top: 30px;
	visibility: hidden;
}

#menu ul li:hover ul{
	visibility:visible;
}

```

Voila! Now we have a full cascading menus using no scripting! The above addition and functionality can be seen at [cssnav2b.html](http://webdev.usc.edu/itp301/lecture_examples/cssmenu2b.html).

But wait! Our menu has THREE levels... and that third level, of droid phones, is not "hidden" or folded into its own level.

Ok, so we need to add an instruction that pushes the THIRD level of ul to hidden and a different offset. This instruction should go right below the previous #menu ul ul
```html
#menu ul ul ul{
	position: absolute;
	top: 30px; left:100px;
	visibility: hidden;
}
```
Ok, so now it is tucked to the side, but when you menu into the level 2 (the main Motola menu) it opens up even before you get to the Droid item that should open it. So we need to set something that when the second level is hovered it keeps the third level closed until the correct Droid item is hovered.

```html
#menu ul li:hover ul ul{
	visibility:hidden;
}

#menu ul ul li:hover ul{
	visibility:visible;
}

#menu ul li:hover ul{
	visibility:visible;
}
```
The final version of all that is in [cssnav3.html](http://webdev.usc.edu/itp301/lecture_examples/cssmenu3.html).

And of course, it would be most practical if you were going to use that menu on ltos of pages to store that as an external stylesheet.

A quick reference to the highlights of CSS3:
* Browser support chart from W3Schools -- http://www.w3schools.com/cssref/css3_browsersupport.asp
* Borders -- http://www.w3schools.com/css3/css3_borders.asp
* Custom fonts with @font-face http://www.w3schools.com/css3/css3_fonts.asp
* Advanced background properties such as: http://www.w3schools.com/css3/css3_backgrounds.asp
    Ex: Multiple background images: background-image:url(img_flwr.gif),url(img_tree.gif);
    Ex: Background-size: background-size:80px 60px;
* Multiple columns: http://www.w3schools.com/css3/css3_multiple_columns.asp
* Animated transitions -- http://www.w3schools.com/css3/css3_transitions.asp
    Ex: Some transition instructions on height, width and transform changes and the start page with no hover or transitions
* 2D transforms: http://www.w3schools.com/css3/css3_2dtransforms.asp