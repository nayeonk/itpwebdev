Loops
=====

******************************************************************
[starter](http://itpwebdev.herokuapp.com/starters/301/loops.zip)
******************************************************************

### Overview

* Loops
* Loops with if statements [99 bottles of beer on the wall](http://jsbin.com/huxep/1/edit)
* Loops with Arrays

### For Loops

A loop takes a set of code and runs it over and over... "looping" around the one or more lines of code inside it. But of course, if you had a generic loop as I just described it would just run and run and run, and after the millionth or so time the computer would lock and up stop

A 'for' loop in Javascript is a loop that runs as long as a defined condition is met. Think of taking the "condition" from an if statement, and using that to determine whether a loop continues to run (to repeat). Most commonly a "for loop" or conditional loop simply runs a certain number of times. 

Three core parameters for a "for loop":

1. Create a variable and give it an initial value. This step is only run/executed the very FIRST time the loop is run.
2. Set up the "condition" that determines whether a loop continues to repeat -- almost always build around evalulating the variable created in part 1. This condition is evaluated at the STATE of every loop.
3. Write a command that is run at the END of every loop. Most often this consists of increasing the value of the variable (from Step 1) by 1.


```js
for (var i = 1; i <= 5; i=i+1) {
	console.log('Number is ' + i + '<br />');
}
```
	
*	First it initializes the variable i and sets its value to 1
*	Then it sets up the condition of "i is less than or equal to 5" as the condition that is evaluated to decide whether to continue repeating the code in the loop at the BEGINNING of each loop
*	Then it states that at the end of each loop the value of the variable i will be set to the current value plus 1 (it will increase by 1) after each loop
*	So the above would output in the console:

```html
Number is 1
Number is 2
Number is 3
Number is 4
Number is 5
```

The __break__ statement is used to prematurely stop a loop. For instance, you could have a conditional (if) statement INSIDE the looop that if certain conditions are met the loop 'breaks' (it stops repeating). This is typically used in routines that are looping through information to find a specific piece or set of data.

### 99 Bottles of beer on the wall

```js
var song = '';

for (var i = 5; i > 0; i--) {
  if (i == 1) {
    song += i + ' bottle of beer on the wall.';
    song += '<br />';
    song += i + ' bottle of beer.';
  } else {
    song += i + ' bottles of beer on the wall.';
    song += '<br />';
    song += i + ' bottles of beer.';
  }
  
  song += '<br />';
  song += 'You take one down, pass it around';
  song += '<br />';
  
  if ( (i - 1) == 1 ) {
    song += (i - 1) + ' bottle of beer on the wall.';
  } else {
    song += (i - 1) + ' bottles of beer on the wall.';
  }
  
  song += '<br /><br />';
}

document.body.innerHTML = song;
```

### Loops with Arrays

*	A so-called "array loop" is simply the idea that you have created one or more arrays, and now want to loop through the data in the arrays.
*	For instance, lets say you have a stored a series of photos on an array, and you at first decided to randomly pick one of the photos and output that image (build an image tag) like this example. Ok, but what if rather than just picking one photo and outputting it, you wanted to output ALL of the phtoos? You could set up a loop around the code that created the img tag, but use the variable from the conditional loop as the "array index" (the row number) for the array data.
*	Ok, lets look at that example. The following code would all be inside a script block in a page:

```js
var wpath = "http://webdev.usc.edu/itp301/dogs/";
var imgname = [];

imgname[0] = 'dogs01_s.jpg';
imgname[1] = 'dogs02_s.jpg';
imgname[2] = 'dogs03_s.jpg';
imgname[3] = 'dogs04_s.jpg';
imgname[4] = 'dogs05_s.jpg';
imgname[5] = 'dogs06_s.jpg';
imgname[6] = 'dogs07_s.jpg';
imgname[7] = 'dogs08_s.jpg';
imgname[8] = 'dogs09_s.jpg';
imgname[9] = 'dogs10_s.jpg';
imgname[10] = 'dogs11_s.jpg';

for (var i = 0; i < 11; i++) {
	document.write('<img src="' +  wpath + imgname[i] + '"> ');
}
```
		
*	So in the [above](http://webdev.usc.edu/itp301/lecture_examples/dogtest2.html) example, it creates images of ALL of the dogs, not just one.
*	For another example, lets take a [page](http://webdev.usc.edu/itp301/lecture_examples/loop_start.html) that has an array of colors. Write a loop that each time through the loop changes the background color of the page and brings up an alert with the color name (which will also create a pause in between each color). See an example of that [here](http://webdev.usc.edu/itp301/lecture_examples/loop.html).
*	Ok, so how about a loop that leverages parallel arrays to output the full data set across a series of arrays? Remember the [random color page](http://webdev.usc.edu/itp301/lecture_examples/arrays_colors/colors.html)? It picked one color and outputted images, backgrounds, and phrases based on that color. Well how about instead of a random number just create a loop that uses all rows of the arrays? An example of that is [here](http://webdev.usc.edu/itp301/lecture_examples/arrays_colors/colors_for.html).
