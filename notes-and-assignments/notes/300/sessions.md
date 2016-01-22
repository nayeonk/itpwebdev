Sessions
========

A "session" variable is one that exists over time - meaning when a user goes from page to page it persists (i.e. it STILL exists). The server assigns a unique ID to the user, and tracks their session variables through that unique ID. This unique session ID is stored in a cookie. Whenever you make requests for a given site, any cookies associated with that site are sent along in the request headers. So in order for sessions to work, cookies must be turned on. If cookies are not turned on, the session ID is propogated through the URL as a query string variable.

For a page to start using session variables, we need to tell the page using session_start().

```php
session_start();
```

The session_start() function needs to be at the TOP of a page that will use session variables. It must precede the html html tag in the code.

```html
<?php
	session_start();
?>
<!doctype html>
<html>
<body>
```

Once a session is "active", the server takes care of tracking a user. When you want to create variables and values specific to a user, you just create them through the session superglobal, such as $_SESSION["username"] = "David" ... a future page that also has the session turned on could then read and/or output that variable.

So imagine the following code is in page 1:

```php
	session_start();
	$_SESSION["username"] = "David";
```

Then you have in page2:

```php
	session_start();
	echo "your username is " . $_SESSION["username"];
```

The W3School page on sessions has a simple example of setting up a counter keeping track of how many times a person has visited a page: http://www.w3schools.com/PHP/php_sessions.asp

When using session variables, it is a good idea before trying to read or output a variable to first make sure that session variable exists using the "empty" or "isset" functions. Before trying to read or output a session variable first check that it exists so that your page does not throw an error.

If you want to remove or delete a specific session variable, you use the "unset" function to remove that variable from memory.

```php
unset($_SESSION["counter"])
```

If you want to destroy ALL session information, you can use the session_destroy() command. This is typically used to logout a user.