##PHP Intro

* Overview of the server-side
* Installation
* variables
* echo
* concatenation
* double quoted strings vs single quoted strings
* Arrays
	* indexed
	* associative
* [foreach loop](http://php.net/manual/en/control-structures.foreach.php)
* Request Data
	* $_POST
	* $_GET
* if statements
* headers
* Common PHP functions 
* user defined functions
* includes & requires


PHP is a server-side language typically used with the Apache web server and MySQL database.

###Installation
You could install PHP, Apache, and MySQL yourself, but there are tools out there that make this process really easy. On MAC, install MAMP (Mac Apache MySQL PHP). On Windows, install either WAMP (Windows Apache MySQL PHP) or XAMP (Apache MySQL PHP). The X in XAMP stands for cross platform because it could be installed on multiple platforms.

To get running, place all of your php scripts in the __htdocs__ folder and navigate to:

http://localhost:8888/my-script.php

This assumes your port is 8888. If you are on another port, change that number.

###PHP Blocks
To create a block of php code, use the following PHP tags:

```php
	<?php 
		// php code here
	?>
```

###Variables
Variables being with a dollar sign.

```php
	$name = 'David Tang';
```

###Concatenation
concatenation accomplished with a period, similar to + in JavaScript
```php
	$hello = 'Hi, my name is ' . $name;
```

Alternatively, you can use variables in double quoted strings and they will be interpreted.

```php
	$hello = "Hi, my name is $name";
```

###Echo

The echo command is used to output text from the server onto the page.

```php
	echo 'hello!';
```

###Arrays
```php
	$restaurants = array('Urth', 'Benihanas', 'Sushi Dan');
```	

###Associative Arrays
```php
	$settings = array(
		'url' => 'http://localhost:8888/index.php',
		'app-id' => '23232323',
		'database' => 'my-app-database',
		'username' => 'root',
		'pw' => 'root'
	);
```


###Request Data
Intercept POST data using the $_POST superglobal where the key corresponds to the 'name' attribute on a form field.

```php
	$email = $_POST['email'];
```

Query string data can be intercepted using the $_GET['page'] superglobal;

__ex: http://my-site.com?page=2__

```php
	$page = $_GET['page']; // 2
```

###HTTP Headers

Redirecting:
__header('Location: index.php');__ 

###Common PHP Functions

* trim()
* isset()
* [strpos()](http://php.net/manual/en/function.strpos.php)
* strlen()


## Assignment

####Step 1: form.php
Create a form that POSTS to a PHP script called submission-process.php. The form must have fields for: name, email, message.

####Step 2: submission-process.php
Create a user defined function called validate_email. It should accept 1 parameter being the email address. Inside the function, check to make sure the email address contains an @ symbol. Also, declare a local variable for that function called _domains_. _domains_ should be an indexed array containing yahoo.com, gmail.com, usc.edu, hotmail.com, and aol.com. Iterate over the array to make sure the supplied email address contains one of those domains. If it passes both of those conditions, return true, otherwise return false.

This script should require the following:

* the name field was entered in
* the email address was entered in, contains an @ symbol, and contains one of the domains listed previously
* the message field was entered in

If all of those conditions pass, echo out to the screen 'Thank you for your submission' in a well-formed HTML document.

If it doesn't pass all of those conditions, redirect back to the form page.


####Step 3: functions.php
Extract your user defined function, validate_email into a separate file called functions.php and require it on the submission-process.php page at the top.

###Step 4: navigating to submission-process.php
Lastly, make sure that if a user navigates directly to submission-process.php without going through the form, the user is redirected back to the form. __Hint:__ Check to see if a form field called _submit_ (the form submit button with a name of 'submit') was set using the isset() function.

Push your files up to GitHub into a new repository called: ITP404:PHP_Intro