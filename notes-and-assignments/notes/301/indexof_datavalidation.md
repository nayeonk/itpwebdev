Lecture - indexOf, data validation
===========
indexOf method, validation data for certain characters, lengths, etc.

******************************************************************
Please download the following zip file and extract it to a folder:

Yuanbo's class: [starter files](http://itpwebdev.herokuapp.com/starters/301/xxx.zip)

******************************************************************

### Order page demo

So start lets play with a new demo that will have us use existing object manipulation techniques to make an order form more interactive. Save the file [sales_page_start.html](http://webdev.usc.edu/itp301/lecture_examples/order_files/sales_page_start.html) to your computer. Open up the file. File file already has two functions -- calcul which you will use to calculate the total for the order and isnumeric which validates if an object contains ONLY numbers.

Ok, so let's add two simple types of interactivity.

First, let's enable the + and - buttons in the order form so that clicking on them increases or decreases the number in the box:
*	For the first "+" button, let's write a function that receives a text BOX (object), take the value from the box, convert it to a number, and then incrase it by one, and then writes the new number BACK into the box.
*	For the "-" button, let's write a function that similarly receives a text box, takes the number from the box, converts it to a number, subtracts one, and then writes the number back to the box.
*	But WAIT: What if the minus function creates a number below 0? So add to the "-" function an if statements right before the end that checks if the new number is below 0, and if so sets the number TO 0.
*	Just to add another consumer short-cut, lets add an event handler to the figure image so that if a user click on the figure picture, it increases the figure box total.
So with those two buttons enabled, it's easy to then go add those functions through event handlers to the other "+" and "-" buttons, just changing the object they pass to the function.

Ok, so on to writing the function that does a simple calculation to "add up" the total for the order. There is already a function named calcul() for you to write your JS in, and it already lists out the steps you need to take:
*	Start building a subtotal in the subt variable:
	*	Add price of figures * number of figures to sub
	*	Add price of mugs * number of mugs to subt
	*	Add price of t-shirts * number of t-shirts to subt
	*	Add price of watches * number of watches to subt
	*	Add price of lamps * number of lamps to subt
*	Write subt to the subtotal box.
*	Calculate total as subt + (subt * tax rate)
*	Write total to the total box.

To see most of the above scripting in final form go to [sales_page1.html](http://webdev.usc.edu/itp301/lecture_examples/order_files/sales_page1.html)

Ok, before we move on to a demo using form validation lets first review "this" and learn some new data methods... 

#### this \([example](http://webdev.usc.edu/itp301/lecture_examples/this_routine.html)\):
*	From inside an object in an HTML page, can use "this" as a function argument to represent the object. So, for instance, if you wanted to do data validation on a form field, you could use 'this' from within the function to refer to the object
*	Sample:
	
	```js
		function testthis(string)
			{ alert(string) }

		<input type ="text" name="email" onChange="testthis(this.value)">
	```
	
*	Notice the difference between the two uses of this below:

	```js
		<input type="text" name="email" onChange="testthis(this)">
		<input type="text" name="email" onChange="testthis(this.value)">
	```
		
#### length
___length___: property returns the length of a string (number of characters) or an array (number of items in the array):
*	The length property is most often used for data validation with conditional if statements. For instance, imagine a user entered a US state abbreviation and you wanted to make sure they entered only two characters, or for a zip code that the user entered only five characters.
*	The length property of a string returns how many characters there are in that string. So, for instance, "patrick".length equals 7 ... and if varB = "john" then varB.length equals 4.
*	The length property of an array variable is how many items are in that array. So if the array variable colors has four colors stored in it (four rows of data), then colors.length is equal to four. On the other hand, if the first item in colors is black (colors<0>="black") then colors<0>.length is equal to five... the number of characters in the string in array position 0 of the colors array variable.
 

#### toUpperCase\(\) and toLowerCase\(\)

The methods ___toUpperCase\(\)___ and ___toLowerCase\(\)___ transform a string to all uppercase or all lower case:
*	toUpperCase\(\) -- transforms a string to all upper case. So alert\('patrick'.toUpperCase\(\)\) would alert PATRICK.
*	toLowerCase\(\) -- transforms a string to all lower case. So if var favcolor = "RED" then favcolor\.toLowerCase\(\) would be "red".
*	Most often used to take two strings and compare them case NEUTRAL \(since Javascript IS case-sensitive\) or to explicitly check if something is all lowercase and/or all upper case.
*	Example1:

	```js
		varA = "pat" ; 
		varB = "PAT"
		if(varA.toUpperCase()==varB.toUpperCase()) 
		{ alert("varA and varB are equal with case neutrality") }
	```
	
*	Example2:
		
	```js	
		varA = "patrick"
		if (varA == varA.toLowerCase())
			{ alert("varA is ALL lower case.") 
	```		
	
### Multiple conditions in an if statement:

__&& and ||__
*	So by now most students should be comfortable with writing normal conditional logic such as if(favcolor == "red") .... but what if you want to write more than one condition?
*	The && and || symbols let your string together multiple "conditions" in one conditional logic statement.
*	The && symbol is the logical equivalent of AND ... so if\(favcolor!="red" AND favcolor!="blue"\) would fire off (be true) only if favcolor was BOTH not "red" AND not "blue".
*	The || (two occurrences of the symbol sometimes called a "pipe") is the logical equivalent of OR ... so if\(myage\<16 || myage \> 20\) would fire off if myage was NOT between 16 and 20... because that statemet is true (will activate the if code) if myage if less than 16 OR if myage is more than 20.
*	The AND and OR clauses are great for stringing together more complex data validation conditions, such as checking if an email address has BOTH an at symbol AND a period (for the domain).

Ok, so lets take a break here and start up a new demo that uses the above methods...


### Password validation demo

First, save and open up the start file [password_colors_start.html](http://webdev.usc.edu/itp301/lecture_examples/password_colors_start.html).

Looking at the page, you can see there is a text box IDed as thebox, there is a button that calls a function checkpass(), and there is a function checkpass() that currently just throws up and alert telling you the current password.

What we want to do is write a series of JS checks that validates against each condition, and then updates the color of the correspondan "rule" box based on the findings.

Write JS lines into the checkpass function so that it runs conditional statements on each of the following, and if it fails sets the corresponding box to red, if it is good sets it to green:
*	Must be 5 characters -- is length \> 5?
*	Must contain lower and upper -- is the value = value converted to upper (if so no lower) AND is the value = value converted to lower?
*	Is the value equal to '?

Ok, so that leaves three other conditions -- does it contain password, does it contain an @ symbol and does it have a period?

To check those, we are going to have to learn a new method -- indexof\(\) -- which is a core data validation functionality for Javascript.


#### indexOf()

*	Searches for the position of a strng inside a string. So for instance, varA.indexOf(varB) searches for the location of varB INSIDE varA
*	Format: string\.indexOf\(searchstring\<, starting position\>\) where searchstring represents what you are looking for, and startpos represents what character in the string it begins at. Starting position is optional and defaults to 0.
*	If the string is not present, it returns -1
*	So we can check to see if a string exists inside another string by checking to see if an indexOf == -1
	
	```js
		function indextest(currentstring)
		{ 
			var lookingfor = '$'
			if (currentstring.indexOf(lookingfor) == -1)
				{ alert('Your string does not have a $ in it') }
			else
				{ alert('Your string has a $ at position ' + currentstring.indexOf(lookingfor)) }
		} 
	```
	
	[Example](http://webdev.usc.edu/itp301/lecture_examples/indextest.html) of indexOf looking for @usc.edu within a string the user typed


### Password validation part 2

Ok, so armed with that new tool, we can use indexOf\(\) to see if "password", "@" and/or "." are "found" in the password they typed.

So back to our demo, see if the result of indexOf is -1 (which means it is not present) for the following, and change the appropriate box to red or green accordingly:
*	Does it contain "password"
*	Does it contain "."?
*	Does it contain "@"?

So that brings us to this partial solution: [password_colors1a.html](http://webdev.usc.edu/itp301/lecture_examples/password_colors1a.html). But what if we wanted to further add interactivity by making it update in real-time __as the user types!__

There is an event bandler called onKeyPress that fires off every time a key is types. So what if we put the following inside the input box itself:
	
	```js
	onkeypress="checkpass(this.value)" 
	```
	
Now as the user types it dynamically updates. See this version at [password_colors1b.html](http://webdev.usc.edu/itp301/lecture_examples/password_colors1b.html)

Ok another wrinkle... at times the keypress is a bit buggy because the validation sometimes fires off TOO fast -- before the key that was pressed has even made it into the box. So to fix that we might add a delay to the trigger -- a concept we will come to later in the course. But if you want to see that version go to [password_colors1c.html](http://webdev.usc.edu/itp301/lecture_examples/password_colors1c.html)

There is one final step we would take a in a normal environment. It's fine to check each condition individually, but in a real page what we need is for the password to pass all of the rules __simultaneously__ -- to fulfill ALL of the conditions. That would be one LONG conditional statement!


__evaluating functions:__

In normal/professional data validation, you set up each sub-routine (is it a number, is it an email, is it a phone number, etc.) as a separate routine, and have each individual routine "return" a true or false response, for each condition. To leverage this we use the "return" command and treat a function as if it were a piece of data (variable) that we are going to evaluate as true or false.

*	Using functions AS expression evaluations

	```js
	if (1 == 1) { alert('true') }

	if (routine1) { alert('true') } 

	function routine1() {return true }
	```
	
*	In above charAt example, nest validation routine one deeper and evaluate outcome
	
	```js
	function charateval(currentstring){ 
		if (!charat2(currentstring)){ 
			alert ('There is an s in the string');
		}
	}

	function charat2(currentstring){ 
		for (var i = 0; i < currentstring.length; i++){
			if (currentstring.charAt(i) == "s"){
				return false; break
			}
		}
		return true
	}
	```

__Data validations:__
*	isEmpty routine: write a function to use in different pages that checks for nulls or "" data
*	isNumeric routine: function that parses a string character-by-character and checks its ASCii value to see if it is a 0-9 character
	*	for one-digit numbers
		
	```js
		function oneisNumeric(currentstring){
			if (currentstring > "9" || currentstring < "0"){
				return false
			}
			return true
		}
	```	
		
	*	full routine:
	
	```js
	function isNumeric(currentstring){
		for (var i = 0; i < currentstring.length; i++){
			if (currentstring.charAt(i) > "9" || currentstring.charAt(i) < "0"){ 
				return false
			}
		}
		return true
	}
	```
 
