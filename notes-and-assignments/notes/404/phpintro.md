PHP Intro
=========

My following notes are targetting PHP version 5.4 or higher.

### Overview

* Installation of PHP
* HTTP, web servers, application servers, headers, and status codes
* Review of JSON, JSONP
* Server-side proxy

### Class Demo

* Instagram REST API overview: http://instagram.com/developer/endpoints/
* What is REST?
* HTTP requests from PHP
	* variables / semicolons / concatenation
	* file_get_contents()
* Rendering
	* client-side rendering
	* server-side rendering
		* php data structures
		* json_decode()
		* foreach loops
		* objects and classes
* previous example with form submission

### What is PHP?

PHP is an open source, server-side language suited for web development.

http://php.net/manual/en/intro-whatis.php

### Mac Installation

On MAC, install MAMP (Mac Apache MySQL PHP). To get running, place all of your php scripts in the __htdocs__ folder and start up MAMP.

### Windows Installation

Install either WAMP (Windows Apache MySQL PHP) or XAMP (Apache MySQL PHP). The X in XAMP stands for cross platform because it could be installed on multiple platforms. 

To get running, place all of your php scripts in the __htdocs__ folder and start up XAMPP/WAMP.

### PHP from the command line

Alternatively, if you have a mac with PHP 5.4 or greater installed (PHP comes preinstalled on macs), you can use the built in version of PHP:


```
# should say 5.4 or higher for the following to work
php --version

cd your-project-directory

# start up the server in your project directory
php -S localhost:3000
```

### PHP Blocks
To create a block of php code, use the following PHP tags:

```php
<strong>HTML here</strong>
<?php 
	// php code here
?>
<div>more HTML here</div>
```

### Variables

Variables begin with a dollar sign.

```php
$name = 'David Tang';
```

### Concatenation

Concatenation is accomplished with a period, similar to + in JavaScript

```php
$hello = 'Hi, my name is ' . $name;
```

Alternatively, you can use variables in double quoted strings and they will be interpreted.

```php
$hello = "Hi, my name is $name";
```

### Echo

The echo command is used to output/write data to the web page.

```php
echo 'hello!';
```

### Indexed Arrays

```php
$restaurants = ['Urth', 'Benihanas', 'Sushi Dan'];
```	

### Associative Arrays

```php
$settings = [
	'url' => 'http://localhost:8888/index.php',
	'app-id' => '23232323',
	'database' => 'my-app-database',
	'username' => 'root',
	'pw' => 'root'
];
```

### Request Data

Intercept POST data using the $_POST superglobal arrays where the key corresponds to the 'name' attribute on a form field.

```php
$email = $_POST['email'];
```

Query string data can be intercepted using the $_GET['page'] superglobal

__ex: http://my-site.com?page=2__

```php
	$page = $_GET['page']; // 2
```

### HTTP Headers

##### Redirecting:

```php
header('Location: index.php');
```
