Lecture - Loops, charAt, substring, replace
==========
Conditional loops, data transformation using charAt and substring, and replace and regular expressions

### Conditional "Loops":
*	A "loop" takes a set of code and runs it over and over... "looping" around the one or more lines of code inside it. But of course, if you had a generic loop as I just described it would just run and run and run, and after the millionth or so time the computer would lock and up stop :>
*	A 'for' loop in Javascript is a loop that runs as long as a defined condition is met. Think of taking the "condition" from an if statement, and using that to determine whether a loop continues to run (to repeat). Most commonly a "for loop" or conditional loop simply runs a certain number of times. 
*	Three core parameters for a "for loop":
	1.	Create a variable and give it an initial value. This step is only run/executed the very FIRST time the loop is run.
	1.	Set up the "condition" that determines whether a loop continues to repeat -- almost always build around evalulating the variable created in part 1. This condition is evaluated at the STATE of every loop.
	1.	Write a command that is run at the END of every loop. Most often this consists of increasing the value of the variable (from Step 1) by 1.

*	Example:

	```js
		for (var i = 1; i <= 5; i=i+1) {
			document.write('Number is ' + i + '<br />');
		}
	```
	
	*	First it initializes the variable i and sets its value to 1
	*	Then it sets up the condition of "i is less than or equal to 5" as the condition that is evaluated to decide whether to continue repeating the code in the loop at the BEGINNING of each loop
	*	Then it states that at the end of each loop the value of the variable i will be set to the current value plus 1 (it will increase by 1) after each loop
	*	So the above would output to the screen:
	
		```html
		Number is 1
		Number is 2
		Number is 3
		Number is 4
		Number is 5
		```

 
*	The Break command is used to prematurely stop a loop. For instance, you could have a conditional (if) statement INSIDE the looop that if certain conditions are met the loop 'breaks' (it stops repeating). This is typically used in routines that are looping through information to find a specific piece or set of data.

### Array Loops:
*	A so-called "array loop" is simply the idea that you have created one or more arrays, and now want to loop through the data in the arrays.
*	For instance, lets say you have a stored a series of photos on an array, and you at first decided to randomly pick one of the photos and output that image (build an image tag) like this example. Ok, but what if rather than just picking one photo and outputting it, you wanted to output ALL of the phtoos? You could set up a loop around the code that created the img tag, but use the variable from the conditional loop as the "array index" (the row number) for the array data.
*	Ok, lets look at that example. The following code would all be inside a script block in a page:

		```js
			var wpath = "http://webdev.usc.edu/itp301/dogs/"
			var imgname = new Array
			imgname[0] = 'dogs01_s.jpg'
			imgname[1] = 'dogs02_s.jpg'
			imgname[2] = 'dogs03_s.jpg'
			imgname[3] = 'dogs04_s.jpg'
			imgname[4] = 'dogs05_s.jpg'
			imgname[5] = 'dogs06_s.jpg'
			imgname[6] = 'dogs07_s.jpg'
			imgname[7] = 'dogs08_s.jpg'
			imgname[8] = 'dogs09_s.jpg'
			imgname[9] = 'dogs10_s.jpg'
			imgname[10] = 'dogs11_s.jpg'

			for(var i=0;i<11;i=i+1){
				document.write('<img src="' +  wpath + imgname[i] + '"> ');
			}
		```
		
*	So in the [above](http://webdev.usc.edu/itp301/lecture_examples/dogtest2.html) example, it creates images of ALL of the dogs, not just one.
*	For another example, lets take a [page](http://webdev.usc.edu/itp301/lecture_examples/loop_start.html) that has an array of colors. Write a loop that each time through the loop changes the background color of the page and brings up an alert with the color name (which will also create a pause in between each color). See an example of that [here](http://webdev.usc.edu/itp301/lecture_examples/loop.html).
*	Ok, so how about a loop that leverages parallel arrays to output the full data set across a series of arrays? Remember the [random color page](http://webdev.usc.edu/itp301/lecture_examples/arrays_colors/colors.html)? It picked one color and outputted images, backgrounds, and phrases based on that color. Well how about instead of a random number just create a loop that uses all rows of the arrays? An example of that is [here](http://webdev.usc.edu/itp301/lecture_examples/arrays_colors/colors_for.html).
 

#### Extracting PARTS of strings with charAt and substring:

__charAt:__ extract a SINGLE character from a string
*	selects a single character in a string (must be string data type)
*	charAt(x) reads a specific character at position x in a string
*	to convert to string, use toString method (works with any object)
	*	Convert variable data to a string: data = data.toString()
*	look for character s in a one-character string

	```js
	function charattest(currentstring)
	{ 
		if (currentstring.charAt(0) == "s")
			{ alert('Starts with an s') }
	}
	```
	
*	look for character through ENTIRE string:

	```js
	function charat(currentstring)
		{ 
			for (var i = 0; i< currentstring.length; i++)
				{
					if (currentstring.charAt(i) == "s")
						{ alert('Contains an s') }
				}
		}
	```
	
*	problem: above routine alerts on EVERY finding


__substring:__ extract a portion of a string:
*	Format: ```substring(index1, index2)```
*	Returns all characters between the starting and ending index positions in a string. Note: the returned string does NOT include the end position. I.e. the string starts with the first index poition and ends BEFORE the end index position.
*	Example, if ```varB = "Los Angeles"``` then ```varB.substring(2,5)``` would return "s A" which is position 2 until before position 5).
*	Working example that uses both [indexOf with substring](http://webdev.usc.edu/itp301/lecture_examples/email_substring.html)


#### Parsing/editing and custom formatting strings:


*	Regular expressions:
	*	Assign to variables, use as arguments directly in method, etc.
	*	Can contain special character instructions, format with wild characters, detect characters within words, at beginning of words, etc.
		*	Formatted with / instead of ' or ", such as /man/ or /woman/
		*	Can have i or g after, such as /man/g or /woman/ig
		*	"\b" = word boundary, such as \bman would detect manpower and man but not human and man/b would detect human
		*	"." = any character, so .p. would detect depend but not bop or peter
		*	"\d" = number 0 through 9
		*	LOTS more? see Javascript Bible pp 1010-1011 or W3Schools [JavaScript RegExp Object](http://www.w3schools.com/jsref/jsref_obj_regexp.asp)
	*	g suffix represents more than one occurrence, such as "/pat/ g" to represent ALL occurrences of the string "pat"
	*	i suffix means case insensitive
	*	So, for instance, searchstr = /-/ g would represent all dashes. Why is that useful? See "replace" method below

*	replace method
	*	format: replace(regularexpression, replacestring)
		*	expression can be a string or a regular expression. For instance, you could search for "mystring" or /mystring/ or varC
		*	replace string should be a string such as "secondstring" or "" or varD
		*	So, for instance, varB.replace(/-/,"") would strip out one dash in varB, and varB.replace(/;/g,"," would replace all semicolons with commas in varB


Demo/example page with many internal examples of data validation and data transformation using indexOf, replace and substring. As a stand-alone demo/review lab can start from the file [validateform_start.html](http://webdev.usc.edu/itp301/lecture_examples/validateform_start.html) and follow the instructions to build to [validateform.html](http://webdev.usc.edu/itp301/lecture_examples/validateform.html)


[More complex example](http://webdev.usc.edu/itp301/lecture_examples/dollar_parser.html): Parsing/stripping and recompiling dollar figures:


*	Related data concepts:
	*	Dollar figures sometimes contain commas, and sometimes don't.
	*	Dollar figure sometimes begin with $ signs
	*	Databases often prefer that numeric data (including dollar figures) do not contain either of those punctuations.
	*	For the purposes of this example we will not allow numbers about 99,999.99

*	Solution:
	*	Step1: When data is inputted into the dollar field, strip out all $ and , characters
	*	Step 2: Check to make sure all remaining characters are either numbers or one decimal point.
	*	Step 3: New data string should not exceed 5 characters if there is no decimal point, and 8 characters if there is.
	*	Step 3. Replace the original string with the new one.
	*	Step 4. Recompile the new string for data display purposes:
		1.	Determine if the string has a decimal point in its third-to-last position. If so, variable decpos=3, and if not variable decpos=0
		1.	Determine if a comma is needed in the number by checking if it is more than 3 characters long if no decimal, or more than 6 characters long if there is a decimal.
		1.	Create a new string that contains $.
		1.	If a comma is needed:
			1.	Add characters 0 or 0 and 1 to $ (depending on the length of the string, and whether is has a decimal or not).
			1.	Add a comma to the string.
			1.	Add the remaining three or six digits (depending on whether there is a decimal).
		1.	If a commas if not needed.
			1.	Add the number string to the new string.

	```js
		<script language="javascript">
		function validatenum(data)
			{
			var newdata = data.value
			newdata=newdata.replace(/,/g, "")
			newdata=newdata.replace(/\$/,"")
			newdata=newdata.replace(/ /g,"")

			alert("New string is " + newdata)

			if (newdata.indexOf(".") == -1)
				{ var decnum=0 }
			else
				{  var decnum=3 }

			if (numbercheck(newdata, decnum))
				{ data.value = newdata }

			}

		function numbercheck(number, decnum)
			{
				for (var i = 0; i < number.length; i++)
					{
					if (number.charAt(i) > "9" || number.charAt(i) < "0")
						{ 
						alert("Please enter a valid number")
						return false
						}
					}

				if (number.length > 5 + decnum)
					{
					alert("Please enter a number less than 100,000") 
					return false
					}

				return true

			}

		</script>

		<form>
		<input type="text" onChange="validatenum(this)">
		</form>
	```