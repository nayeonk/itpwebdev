Lecture - Arrays, dynamic documents
===================================
Building strings, document.write(), arrays, creating dynamic pages

******************************************************************
Please download the following zip file and extract it to a folder:

Yuanbo's class: [starter files](http://itpwebdev.herokuapp.com/starters/301/array_innerhtml.zip)
******************************************************************


### Building strings

*	So hopefully by now everyone understands and is comfortable with the idea of a string being a set of text in quotes, such as "patrick' or "my favorite number is 77".
 
*	We also, of course, know that we can store strings in variables, such as var favoritecolor = "blue" or var photocaption = "Patrick Dent teach Web development at USC."
 
*	We have also learned that you can "add" strings together (called concatenation) using the + sign. So, for instance, the string "patrick dent" is the same as "patrick" + " " + "dent". And we can mix strings and variables as well, such as alert("The value of the variable favoritecolor is " + favoritecolor)
 
*	This gets more complicated if we want to build a string that parallels an html tag. Take the complete html tag <hr width="80%"> .... We could store that as a string in a variable through something like

```js
var thelinetag = '<hr width="80%">';
```
	
Notice how building strings get more complicated when you need to use string delinaation symbols such as single ro double quotes marks as PART of the string itself. I.e. if you want to store the word don't in a string, you cannot say var theword = 'dont't but rather have to use the other quote set like var theword = "don't" ... in the former example since we are using single quotes to define the string, the apostrophe in the middle of the word actually ended the string, which would have messed up the javascript statement
 
*	Ok, so onto something slightly more complex. What if had the value for my line width in a variable, and wanted to store the new tag that way. Lets say I had stored that value through var linewidth = "80%". So I want to use that variable in "building" my hr tag (and storing it in a variable as well). Lets see how that might look:
	
```js
var linewidth = "80%";
var thelinetag = "<hr width='" + linewidth + "'>";
```
	
*	Ok, so that's all fine and dandy, by why in the world would I want to build html tags through Javascript? Because with the document.write() method I can generate html through Javascript directly into a page.
 
 
### document.write()

*	The document.write() method "outputs" text directly into the html code of the page at the exact location it is encountered. So, for instance, look at the code below:

```js
	Hello 
	<script>
		document.write("<strong>patrick</strong>")
	</script> 
	how are you?
```
	
	Notice in the above example that Javascript is not only outputting some text in that location of the html, per se, but has outputted an html tag as well as text.
	
*	document\.write() is at the heart of creating dynamic web pages using Javascript. But before we get deeper into that, we need to learn about how to store multiple rows of data into a single variable using "arrays"
 
 
### Arrays:
*	A typical variable might hold a single piece of string data, such as "patrick" or "blue". So, for nstance, var favoritecolor = "blue". But what if you wanted to store multiple pieces of data under one variable. For instance, what if you wanted to not just store your single favorite color, but a set of colors? I.e. not blue but blue, black, white and red? 
 
*	An array variable sets up a series of ROWS of strings to store multiple pieces of data under one variable name. If it helps as a metaphor, picture a spreadsheet where you can store multiple entries for one column under different rows.
 
*	So if you have more than one entry, how do you identify or separate them? Each "row" of an array variable is numbered, starting with ZERO. So the first "item" is number 0, the second items is number 1, etc. References to row numbers are put in square brackets. So the third item in an array variable named "favoritecolors" would be references as favoritecolors[2]. The "row number" of an array if called its index.
 
*	Like most variables, you "create" the variable with a var command. BUT, in creating an array variable you first need to initialize or "create" the varaible as a specific object type (of array). So in creating an array varaible you FIRST create it, and then store data in it. But when you create an array variable you must create it explicitly as an array using the "[]" command. So to create the array favoritecolors you would write var favoritecolors = []. 
 
*	Ok, so lets see what it would look like to create the array variable favorite colors, store four colors in it, then bring up an alert featuring the third entry: 
	
```js
var favoritecolors = [];
favoritecolors[0] = "blue";
favoritecolors[1] = "red";
favoritecolors[2] = "purple";
favoritecolors[3] = "green";
alert("The second entry in favoritecolors is " + favoritecolors<2>);
```
 
### Parallel Arrays:
*	The concept of a parallel array is the idea that you have a number of related pieces of data that you want to store in arrays. For instance, imagine you have first names, last names and emails. You want to not only store all the first names in one array, last names in another, and emails in a third array, but want to relate each row of one array to that in another. you don't want the first name of the first person to be related to the last name of the second person and to the email of the third person.
 
*	Parallel arrays are related to each other conceptually and NOT programmatically. I.e. there is no command that says array 1 is locked parallel to array 2. Rather, you set up the rows to line up... so that fname[1] = "patrick" is lined up with lname[1] = "dent" which is lined up with email[1] = "dent@usc.edu" ... because the entries in the different arrays use the same index (row number) for related data, I can treat them as parallel arrays and know that index 1 can pull data across all arrays for that row -- i.e. "patrick" and "dent" and "dent@usc.edu".
	
```js
var fname = [];
var lname = [];
var email = [];

fname[0] = "david";
lanme[0] = "tang";
email[0] = "dtang@usc.edu";

fname[1] = "patrick";
lname[1] = "dent";
email[1] = "dent@usc.edu";
```

 

 ### Dynamic Documents: 
 
The idea of a "dynamic document" is one whose content is different depending on factors such as: random elements, user interaction, logic branching, etc. 

In general these kinds of pages have data abstracted/stored in variables and arrays. 

The simplest example would be a random image, or otherwise pages that have elements that make the page different based on random numbers and data extraction. 

At the core of dynamic elements is the document.write() method. This allows you to create html instructions/tags on-the-fly. For instance, rather than creating a static html tag of \<img src="pic1.gif"\> ... you could dynamically generate the picture source. 

Of course, you can use document.write statements for static html code as well. The key concept is that you are actually writing into the html file with that statement... as if the page had originally had that code in it. For instance, having the literal code <img src="pic1.gif"> in a page would be identical to having the following code in its place:

	```html
	<script>
		document.write('<img src="pic1.gif">')
	</script>
	```


So to make that a dynamic entry, imagine that instead of writing the whole string to a document write statement like

```js
document.write('<img src="pic1.gif">');
```

that you wrote two string pieces with a variable in between such as

```js
document.write('<img src="' + picnamevariable + 'pic1.gif">')
```
	
... of course, that would assume that you had previously defined the variable picnamevariable. 

And of course, in order to output a document.write statement the JS must be in a script block or an event handler. 

So, to take this one step further, imagine you generate all of the attributes of an img tag dynamically. Look at the following code: 

```js
var picname = "pic1.gif"; 
var picw = "232px"; 
var pich = "343px";

document.write('<img src="' + picname + '" style="width:"' + picw + '; height:' + pich + '" />');
```


Look at the code of the [sample page](http://webdev.usc.edu/itp204/lecture_examples/simple_dynamic_image.html) and notice the normal html img tag generation versus the one genated dynamically through js) 

The next step of abstraction would be, for instance, to store a number of images (image filepaths) in an array, randomly pick a row number from that array, and display that image. You can use code such as the following to create a random number from 0 to 8: 

```js
var number1 = Math.floor(Math.random() * 9);
```

Now, to extend this further, imagine that you have a set of parallel arrays -- for instance one with image names and another with parallel photo captions for each of the iamges. A random number would pick one row, and you could extract an image path (from one array) to build an image tag from and extract a related photo caption (from the second array) to put beneath the photo. Take a look at the sample array set up below:
	
	```js
	var photos = []; 
	var photocaptions = [];
	
	photos[0] = "washington.jpg" ; photocaptions[0] = "George Washington at the head of his army."
	photos[1] = "lincoln.jpg" ; photocaptions[1] = "Abraham Lincoln in front of his home."
	photos[2] = "franklin.jpg" ; photocaptions[2] = "Ben Franklin seated inside his library."
	```
	
Note that in the above example, I have placed the parallel arrays on the same lines (separating the two statements on each line with a semi-color). I did that to make their relationship more clear to myself as a coder, but it is not required. Instead of 4 lines the above code could have been 8 lines (with just one statement per line).


#### innerHTML
Very similar to .html() in jQuery. In JS, you could use innerHTML property to set the content of an existing DOM object.
We could build image tags using the array we used above, then save the Tag code in an parameter. Once we have the tag built, we could set it to an existing project using .innerHTML property.

	```js
		var photoTags = [];
		photoTags[0] = "<img src='" + photo[0] + "' />";
		photoTags[1] = "<img src='" + photo[1] + "' />";
		photoTags[2] = "<img src='" + photo[2] + "' />";
		
		document.getElementById('imgContainer').innerHTML = photoTags[0];
		document.getElementById('photocaption').innerHTML = photocaptions[0];
		
	```
	
 
### Dyamic Page Example
 
[Dynamic color page](http://webdev.usc.edu/itp301/lecture_examples/arrays_colors/colors.html): Related colors, images and phrases are stored in parallel arrays. One index is randomly picked and color, image and phrase from that row are generated dynamically to build the page. Color is also used to set the background of the page. To START this project, save the start page [HERE](http://webdev.usc.edu/itp301/lecture_examples/arrays_colors/colors_start.html).