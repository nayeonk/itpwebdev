substring and regular expressions
=================================

### Overview

* substring()
	* extract email domain example -- isStudentEmail(email) -- Amazon Prime
* regular expressions
	* defining regexp for @usc.edu
	* regexp.test()
		* move to function isUscEmail(email)
	* character classes -- [ssn/dob account creation example](http://jsbin.com/qilagado/1/edit)
		* regexp for SSN -- validSSN(ssn)
		* regexp for DOB -- validDOB(dob)
		* onsubmit event handler
	* string.replace() with strings
		* strip dollar sign
	* string.replace() with regex and flags
		* strip $, commas, and spaces with g flag [bidding form example](http://jsbin.com/gajukivi/2/edit)
	
### substring()

This method exists on string objects and extracts a PORTION of a string:

```js
"dtang@usc.edu".substring(5, 13)
```

Returns all characters between the starting and ending index positions in a string. 

Note: the returned string does NOT include the end position. I.e. the string starts with the first index position and ends BEFORE the end index position.

```js
function parseEmail(email) {
	var atposition = email.indexOf('@');
	alert('Your email prefix is ' + email.substring(0, atposition));

	domainStart = atposition + 1;
	domainEnd = email.length;
	alert('Your email domain is ' + email.substring(dstart, dend));
}

parseEmail('dtang@usc.edu');
```

Working example that uses both [indexOf with substring](http://webdev.usc.edu/itp301/lecture_examples/email_substring.html)

### Regular expressions

Regular expressions are objects that provide a way to specify certain patterns. Strings or numbers can then be tested against this regular expression pattern to see if the entire string/number or a portion of it matches this pattern.

For example, say you want to test if an email has @usc.edu. We could use indexOf() or we can use regular expressions. We create regular expressions objects with 2 slashes and specifying the pattern in between:

```js
var regexEmail = /@usc.edu/;
```

We can test if a string/number matches a regular expression using the regular expression test() method. The [regular expression test() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) returns a boolean.

```js
/@usc.edu/.test('dtang@usc.edu'); // true
/@usc.edu/.test('dtang@usc.ed'); // false

// or we can save the regular expression object to a variable:

var regexEmail = /@usc.edu/;
regexEmail.test('dtang@usc.edu'); // true
regexEmail.test('dtang@usc.ed'); // false
```

What if you want to test if a phone number matches the pattern:

XXX XXX-XXXX

where X must be a digit. In this case, we can use special symbols called character classes that match something specific. For example:

* \d matches a digit character [0-9]
* \s matches white space characters
* \w matches letters, digits, and underscores

A regular expression to match the above phone number pattern would be:

```
var phoneRegexp = /\d\d\d\s\d\d\d-\d\d\d\d/;
phoneRegexp.test('498 543-9876'); // true
```

What about the pattern (323) 345-7864?

```
var phoneRegexp = /\(\d\d\d\)\s\d\d\d-\d\d\d\d/;
phoneRegexp.test('(498) 543-9876'); // true
```

Notice the \ symbol before the parenthesis characters? The parenthesis are something specific in regular expressions so to tell our regular expression that we want to match the literal ( ) characters, we need to escape them. We do that by prefixing the ( ) characters with \, hence \\( \\).

More documentation on character classes can be found at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#character-classes

### replace() string method

Strings have a replace method where we can search for a string and replace it with something else.
	
```js
"310-342-5673".replace('-', ''); // 3103425673
```

The first argument is what we are searching for and the 2nd argument is what we want to replace it with. The first argument can be a string itself or it can be a regular expression.

```js
"310-342-5673".replace(/-/g, ''); // 3103425673
```

Notice the _g_ after the regular expression? This is a flag. The global flag will match ALL occurences of the pattern in the string. Other flags include:

* g global
* i ignore case 
* m multiline

```js
"David".replace(/d/gi, ''); // avi
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

### Class Example

```html
<form action="" method="post" onsubmit="return createAccount()">
  SSN: <input type="text" id="ssn">
  <br>
  DOB: <input type="text" id="dob">
  <br>
  
  <input type="submit" value="Create Account">
</form>
```

```js
function validSSN(ssn) {
  var ssnRE = /\d\d\d-\d\d-\d\d\d\d/;
  
  if (ssnRE.test(ssn)) {
    return true;
  }
  
  return false;
}

// 06/14/75
function validDOB(dob) {
  var dobRE = /\d\d\/\d\d\/\d\d/;
  
  if (dobRE.test(dob)) {
    return true;
  }
  
  return false;
}

function createAccount() {
  var ssn = document.getElementById('ssn').value;
  var dob = document.getElementById('dob').value;
  
  if (ssn == '' || dob == '') {
    alert('Empty fields');
    return false;
  }
  
  if (validDOB(dob) && validSSN(ssn)) {
    alert('yay!');
    return true;
  } else {
    alert('bad data entered');
    return false;
  } 
}
```



### More Examples

Demo/example page with many internal examples of data validation and data transformation using indexOf, replace and substring. As a stand-alone demo/review lab can start from the file [validateform_start.html](http://webdev.usc.edu/itp301/lecture_examples/validateform_start.html) and follow the instructions to build to [validateform.html](http://webdev.usc.edu/itp301/lecture_examples/validateform.html)

[More complex example](http://webdev.usc.edu/itp301/lecture_examples/dollar_parser.html): Parsing/stripping and recompiling dollar figures:


#### Related data concepts

*	Dollar figures sometimes contain commas, and sometimes don't.
*	Dollar figure sometimes begin with $ signs
*	Databases often prefer that numeric data (including dollar figures) do not contain either of those punctuations.
*	For the purposes of this example we will not allow numbers about 99,999.99

#### Solution

*	Step 1: When data is inputted into the dollar field, strip out all $ and , characters
*	Step 2: Check to make sure all remaining characters are either numbers or one decimal point.
*	Step 3: New data string should not exceed 5 characters if there is no decimal point, and 8 characters if there is.
*	Step 3. Replace the original string with the new one.
*	Step 4. Recompile the new string for data display purposes:
	1.	Determine if the string has a decimal point in its third-to-last position. If so, variable decpos=3, and if not variable decpos=0
	2.	Determine if a comma is needed in the number by checking if it is more than 3 characters long if no decimal, or more than 6 characters long if there is a decimal.
	3.	Create a new string that contains $.
	4.	If a comma is needed:
		1.	Add characters 0 or 0 and 1 to $ (depending on the length of the string, and whether is has a decimal or not).
		2.	Add a comma to the string.
		3.	Add the remaining three or six digits (depending on whether there is a decimal).
	5.	If a commas if not needed.
		1.	Add the number string to the new string.

```js
function validatenum(data) {
	var newdata = data.value;
	newdata=newdata.replace(/,/g, "");
	newdata=newdata.replace(/\$/,"");
	newdata=newdata.replace(/ /g,"");

	alert("New string is " + newdata);

	if (newdata.indexOf(".") == -1) { 
		var decnum = 0; 
	} else {  
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
```

```html
<form>
	<input type="text" onChange="validatenum(this)">
</form>
```