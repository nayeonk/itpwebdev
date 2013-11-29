Sessions and Logins
====================

### $_SESSION variable scope and user "sesssions"

A "session" variable is one that exists over time - meaning when a user goes from page to page it STILL exists. The server assigns a custom ID to the user, and tracks their session variables. In order for session variables to be stored for a user, "sessin" must be turned on for EVERY page that expects to use/access those variables.

```php
session_start()
```

The session_start(); command needs to be at the TOP of a page that will use session variables. It must precede the html <html> tag in the code.

For instance:

```php
<?php
	session_start();
?>
<html>
```

Once a session is "active", the server takes care of tracking a user. When you want to create variables and values specific to a user, you just create them through the session variable scope... such as $_SESSION["username"] = "patrick" ... a future page that also has the session turned on could then read and/or output that variable.

So imagine the following code is in "page 1":

```php
<?php
	session_start();
	$_SESSION["username"] = "patrick";
?>
```

Then you have in page2:

```php
<?php
	session_start();
	echo "your username is " . $_SESSION["username"];
?>
```

The W3School page on sessions has a simple example of setting up a "counter" keeping track of how many times a person has visited a page: [http://www.w3schools.com/PHP/php_sessions.asp](http://www.w3schools.com/PHP/php_sessions.asp)

When using session variables, it is a good idea before trying to read or output a variable to first make sure that session variable exists using the "empty" or "isset" functions. I.e. before trying to read or output a session variable first check that it exists, so that your page does not throw an error.

If you want to remove or delete a specific session variable, you use the "unset" function to remove that variable from memory. Such as unset($_SESSION["counter"])

If you want to destroy ALL session information, you can use the session_destroy() command.

Want to see some examples of session variables at work? Start on the counter page and click around to the disclaimer, and reset pages. "txt" versions of the pages are also in that directory so that you can examine the code.

### Setting up a "secure" or "requires being logged in" section of a site

What if you want to create a section of your site that REQUIRES that a user be logged in to access pages?

First off, you would need to establish some kind of a "flag" to tell if a user is logged in. Since you are going to define that flag yourself, how about using a session variable such as $_SESSION["loggedin"]. You might also set up additional session information about a user, once they are logged in, such as $_SESSION["username"] and $_SESSION["securitylevel"].

Since you are going to use this routine over and over, it would be a good idea to set it up as an include. One thing you will need to decide ahead of time is whether the session is activ eon all pages, or only on certain ones. If on all pages, then you would need to make sure that EVERY page on your site starts with a php block that contains session_start(). If you only need sessions on "secure" pages, then you could session_start within your security file.

So imagine a file called "security.php" that 1) checks to see if a varaible called $_SESSION<"loggedin"> exists or is empty (either works). Then 2) if not it includes a "login in" form/page and then STOPS the page (through the exit command). Ok, that's fine, but what if the user had just filled out the form and was submitting that? So it also needs to account for if a user if not logged in BUT a login form had just been submitted.

So the workflow about would be something like:

1. Is user logged in? If so, nothing happens.
   1. If user is NOT logged in, but the login form was submitted, then process the login form (check the login credentials), and proceeed accordingly (login was rejected, login was accepted, etc.).
   2. If user us NOT logged in AND the login form was not submitted, then include the login form AND exit the page (so that nothing beyond the login form is displayed).

SAMPLE of code that might do the above:

```php
session_start();

if (empty($_SESSION["loggedin"])) {
	if (empty($_REQUEST["password"])) {
		// include login form
		include "loginform.php";
		exit();	
		// STOP the page
	}
	else {
		// VALIDATE their login
		if ($_REQUEST["password"]=="itp300") {
			// VALID login
			$_SESSION["loggedin"]="yes";
		}	
		else {
			// INVALID login
			echo "ERROR. WRONG PASSWORD";
			exit();
		}
	}
}
```

The "login" could be a single password (where there is one password for all people who are allowed in), to the more typical username + password combo. Generally in user+pass workflows the script takes the username and password and flows them into a sql statement, querying a table in a database (such as a "users" table) to load any records that match those criteria. If there are not any then of course it was an invalid login.

To see an example of this in action, click on the "secure" page. If you are not logged in, it will bring up the login form.

Securing your security file:

If your security file is meant to be included when needed, and NEVER loaded directly into the browser, then one little check you might want to do is to start the securty file by making sure the URL in the browser is NOT the same as the name of the security file. 
Something like:

```php
<?php
	if (strpos($_SERVER["SCRIPT_NAME"], "security.php")) { 
		exit("you do not belong here"); 
	}
?>
```
