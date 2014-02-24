String Methods - charAt, substring, replace and regular expressions
===================================================================

### Overview

* charAt()
* substring()
* regular expressions
* replace()

### Extracting PARTS of strings with charAt and substring

#### charAt()

This method exists on string objects and extracts a SINGLE character from a string

*	selects a single character in a string (must be string data type)
*	charAt(x) reads a specific character at position x in a string
*	to convert to string, use toString() method (works with any object)
*	Convert variable data to a string: data = data.toString()
*	look for character s in a one-character string

```js
function startsWithAnS(str) { 
	if (str.charAt(0) == "s") {
		alert('Starts with an s');
	}
}
```
	
#### substring()

This method exists on string objects and extracts a PORTION of a string:

```js
"dtang@usc.edu".substring(5, 13)
```

Returns all characters between the starting and ending index positions in a string. 

Note: the returned string does NOT include the end position. I.e. the string starts with the first index poition and ends BEFORE the end index position.

Working example that uses both [indexOf with substring](http://webdev.usc.edu/itp301/lecture_examples/email_substring.html)


### Regular expressions

Regular expressions are objects that provide a way to specify certain patterns. Strings or numbers can then be tested against this pattern to see if the entire string or a portion of the string matches this pattern.

For example, say you want to test if a phone number matches the pattern:

(XXX) XXX-XXXX

where X must be a digit.

We create regular expressions objects with 2 slashes and specifying the pattern in between:

```js
var regexPhone = /@usc.edu/;
```

#### replace() method
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
<script>
function validatenum(data) {
	var newdata = data.value;
	newdata=newdata.replace(/,/g, "");
	newdata=newdata.replace(/\$/,"");
	newdata=newdata.replace(/ /g,"");

	alert("New string is " + newdata);

	if (newdata.indexOf(".") == -1) { 
		var decnum = 0; 
	}
	else {  
		var decnum = 3;
	}

	if (numbercheck(newdata, decnum)) { 
		data.value = newdata;
	}
}

function numbercheck(number, decnum) {
	for (var i = 0; i < number.length; i++) {
		if (number.charAt(i) > "9" || number.charAt(i) < "0") { 
			alert("Please enter a valid number");
			return false;
		}
	}

	if (number.length > 5 + decnum) {
		alert("Please enter a number less than 100,000");
		return false;
	}

	return true;
}
</script>

<form>
	<input type="text" onChange="validatenum(this)">
</form>
```