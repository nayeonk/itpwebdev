PHP Introduction
================

Before lecture starts, do the following:

1. Create a new file named "test.php" and save it in your wwwroot in vlab.
2. In that file enter the following code:

```php
	<?php
		echo "hello world";
	?>
```
3. Bring up that page through the itp300 server. It should be the same general path as your classpage. So, for instance, if your classpage is at http://itp300.usc.edu/dtang/classpage.php then this page would be reached by going to http://itp300.usc.edu/dtang/test.php  

4. If everything above worked correctly then you should see a web page that only says "hello world: (with no php commands/lines).

### PHP Basics

* Fundamental notes about the php server-side scripting language:
* Php is one of many server-side scripting langauges. Similar languages include ASP, Coldfusion and JSP.
* Php executes on the server and is stripped out before web pages are "server" to the end-user. In order for the php to change the default html of the web page, it must output or insert text at certain points.
* Php can be used for a variety of uses, from typically programming (variables, conditional statements) to web-specific functionality such as database communication and generating emails.
* Blocks of php code start with __\<?php__ and end with __?\>__
* EVERY normal line in php must END with a semi-colon **\(;\)** ... if you forget to end a line with one the php server will throw an error. You will forget to do this __A LOT__. The error ___Parse error: parse error, expecting \`',' or \`';'___ will become a familiar friend.
* You can write comments in pho by preceding the comment with double slashes (like in Javascript and C#). You can create a comment "block" by start with slash-asterisk ... and closing it with asterisk-slask (also like in JS and C#).

Example: a php block with a comment:

```php
	<?php
		// write php code here
	?>
```

### Outputting data in php -- the "echo" command:

* Echo is a php command you will be using constantly. Basic overview:
* In order to have php output or "insert" text into a web page, you use the "echo" function.
* Echo outputs one or more pieces of data. For each additional data after the first you use a period to "add" the different data together. Use the period (.) to "add" strings and/or variables together.
* String (text) data is surrounded in quotes. So echo "patrick" . "dent" would output "patrickdent" to the Web page at the location in the code of the echo statement.
* __Adding variables or strings with__ . -- If you want to add one or more elements you use the . symbol. So __echo "you like the color " . "blue"__ would output to the screen _"you like the color blue"_

Example: Some html then a php block that outputs some text and html then more html:

```html
	<strong>Favorite colors are
	<?php
		echo "gold";
		echo "and " . "cardinal";
	?>
	</strong> ... must be from USC
```

### PHP Variables

In PHP there are user-defined variables (ones you make up) and pre-written variables (groups of variables pre-defined in the language). Basics:
All variables in php must start with the $ sign such as $favoritecolor. You can create and assign a value to a variable at any time. Unlike other languages, you do not have to declare the datatype of a variable when you create it.

Like with echo, you "add" together multiple values for a variable with the comma. So, for instance the statement $yourname = "patrick" . "dent" would set the variable $yourname to "patrickdent". The statement $yourcolors = "blue" followed by a statement $yourcolors = $yourcolors . "yellow" would first set the variable to "blue", and then would add ",yellow" onto it, leaving the variable set to "blue,yellow".

Unlike in some languages, variable names __ARE__ case sensitive. So $name is not the same as $NAME, and the $_SERVER cannot be reached through $_server
Short example: The following sample php block sets two variables and then outputs info about those variables to the screen including one echo statement that starts a new line (with the html br command):

```php
	<?php
		$age = "43";
		$fullname = "patrick" . " " . "dent";
		echo "This person is  " . $fullname;
		echo "<br />";
		echo "and their age is " . $age;
	?>
```

### Permanent variables:

There are a set of "pre-built" variables that contain environmental and server information. All "system" variables start with the variable 'dollar' symbol followed by an underscore (_) followed by the variable name and then in square brackets a sub-name. These are read-only variables (you can output them but not set them).

Most system variables are not single variables, but rather are "families" of variables under centralized name. For each "family" you have to reference the family name AND the individual member. The sub-variables are offset with square brackets and surrounded in quotes. so, for instance $_FAMILY<'patrick'> would be the patrick variable inside the $_FAMILY scope. This will make a little more sense below.

####$_SERVER variables:

The $_SERVER scope contains the basic server variables returned when a page is run such as the name of the file/page, the address of the web server, the name of the web server, the URL of the previous web page (if came to the current page through a link), the user's IP address, and lots of other granular data. Try playing around with outputting some of these in an echo block of a php page:

$_SERVER['PHP_SELF']
$_SERVER['SERVER_ADDR']
$_SERVER['SERVER_NAME']
$_SERVER['HTTP_REFERER']
$_SERVER['HTTP_USER_AGENT']
$_SERVER['REMOTE_ADDR']

####Form variables ($_GET, $_POST and $_REQUEST):

When you submit a form (survey, signup, etc.) to a page, the receiving page needs to be able to access all of the form elements the user filled out. Php stores all of the submitted form objects into variable scopes which you can use to output or use the form data.

Depending on the html "method" attribute of a form, you can use the following php variable scopes to access that form data:
* $_GET['form_element_name'] -- $_GET variable is used to collect values in a form with method="get". Information sent from a form with the GET method is visible to everyone in the URL's query string (the portion of the URL after the question mark). For example X ... Y...
* $_POST['form_element_name'] -- $_POST variable is used to collect values in a form with method="post". Information sent from a form with the POST method is not visible to the user. POST is used for longer amounts of data and for sensitive data (like passwords).
* $_REQUEST['form_element_name'] -- $_REQUEST variable contains any form data sent with either methods of GET or POST as well as browser cookies, which you will get more into later. Basically REQUEST will work with EITHER/BOTH form methods.
* Example: First off we need a form page. Imagine a form page contains the following code:

```html
	<form action="output.php" method="get">
		First:<input type="text" name="fname" /><br />
		Last:<input type="text" name="lname" /><br />
		Email:<input type="text" name="email" /><br />
		<input type="submit" />
	</form>
```

Then we have a second page "output.php". The form will be submitted to that page. So we want that second page to output to the screen what the user entered into the form... the fields fname, lname and email. So the output.php file would contain the following code:

```php
	<?php
		echo "The name on the form was " . $_REQUEST["fname"] . " " . $_REQUEST["lname"];
		echo " and their email was " .  $_REQUEST["email"];
	?>
```
If you tried to go __DIRECTLY__ to output.php (not to the form and then submit to output.php) you would get an error... because if you go directly to output.php page -- without coming througha form -- then there ARE no REQUEST objects (form objects).

### PHP pre-written functions:

Functions is php are little pre-built commands that have set functionalities. The core of any scripting language, and how useful and easy it is to use, tends to be its pre-built functions. Most of php's functions are very simple.

* mktime() creates a time/date stamp. Try echoing mktime() .... what? That doesn't look anything like a time or date? That's because ph creates a timestamp in unix format, which is not very decipherable by most people. So what we need is a function that formats time and dates!

* date(format, timestamp) : the date function converts a time and/or date to a specific format.
  * For instance, date("m/d/y",mktime()) would output the current date in the format 09/22/09. Notice that the "format" included formatting characters (slashes) in addition to references to month, day and year.

  * Try playing with some fo the following date and time component symbols, and in particular the different between some of them (such as d versus D): d D l j m M y Y h H i a A ...

  * Full character references can be found at various [php date](http://www.w3schools.com/PHP/func_date_date.asp) pages such as the one on W3Schools.

  * If you do NOT include the second parameter of the function, the date and/or time, the system will automatically use the "current" time/date. So date(h:i a) will output the current time.

  * __Note:__ Times are tricky as a server may be set to a different timezone, and what's more in php times are often indexed off GMT
