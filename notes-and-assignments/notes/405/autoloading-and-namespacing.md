Autoloading and Namespacing
===========================

### Overview

* __RECORD LECTURE__
* php namespacing
	* index.php, User.php
* autoloading overview
	* autoloading-example.php
* what is composer?
	* psr-4 autoloading with composer
		* autoloading-example2.php, composer.json
	* package management with composer
* class example using Symfony HttpFoundation Session component for flash messages
	* contact.php, contact2.php, contact3.php

### PHP Namespacing

[PHP Namespaces](http://php.net/manual/en/language.namespaces.rationale.php) are a way of packaging up or grouping related code. For example, imagine you were building an ecommerce site. You might have several classes for the different types of products: Shoe, Apparel, Accessory. All of these classes could be grouped together as a Product. In order to group together this code, we can define a namespace for each class.

```php
namespace Skechers\Product;

class Shoe {}
```

Here I am giving a namespace of `Skechers\Product` to the `Shoe` class. The namespace can be as many segments as you want, but usually people use no more than 4 segments. In order to work with the Shoe class, I need to prefix the class name with the fully qualified namespace:

```php
$shoe = new \Skechers\Product\Shoe();
```

Having to use the namespace whenever I use the Shoe class can become tedious to type, so you can specifiy it once at the top, and thereafter use just the Shoe class:

```php
use \Skechers\Product\Shoe;

$shoe1 = new Shoe();
$shoe2 = new Shoe();
```

Another problem that namespaces solve is reducing lengthy class names. Imagine you are building a site that incorporates Twitter and Facebook. You might have your own User class. You might also have a Twitter User class and a Facebook User class. You could make these class names longer, but this can be unwieldy sometimes. Instead, you could have 3 different User classes, each with their own namespaces so there wont be any naming collisions.

### Autoloading

#### function __autoload()

Read more about __autoload() here: http://php.net/manual/en/function.autoload.php

```php
function __autoload($className) {
	$parts = explode("\\", $className);
	require_once $parts[2] . '.php';
}

$user = new \Itp\Models\User();
var_dump($user);
```

#### Using PSR-4

In __composer.json__, specify psr-4 autoloading with the root Itp namespace as below:

```json
{
	"require": {
		"symfony/http-foundation": "2.6.3"
	},
	"autoload": {
		"psr-4": {
			"Itp\\": "App/Itp"
		}
	}
}
```

then run the command:

```
composer dump-autoload
```

### Composer

Composer is a package management command line tool for PHP. Essentially it allows you to easily download and share php packages while also managing dependencies of those packages, and managing dependencies of those packages, and so on. Read more about it [here](http://code.tutsplus.com/tutorials/easy-package-management-with-composer--net-25530) and [the official Composer site](https://getcomposer.org/). In fact, you can grab frameworks like Symfony and Laravel throughs Composer. Each of those frameworks also have their own set of dependencies managed with Composer.

In order to find other PHP packages from the community, head over to [packagist.com](http://packagist.com) and search. For example, you can find the [Symfony HttpFoundation component here](https://packagist.org/packages/symfony/http-foundation)

Composer is also handy for generating an autoload file for your own classes.

### Flash Messages

Flash messages, also called flash data, is data stored in a session only for the next request. For example, imagine you have a contact form. When the user submits the form, you send an email, redirect back to the contact page, and want to show a thank you message only once. If the user refreshes the page, the success message should no longer appear. This is a flash message. You may also see flash messages used in other confirmation pages or pages that display form validation errors. Here is an example for a contact page using the [Session component from Symfony](http://symfony.com/doc/current/components/http_foundation/sessions.html):

```php
use Symfony\Component\HttpFoundation\Session\Session;

$session = new \Symfony\Component\HttpFoundation\Session\Session();
$session->start();

if (isset($_POST['submit'])) {
	// send email
	$session->getFlashBag()->add('contact-success', 'We will get back to you shortly.');
	$session->getFlashBag()->add('contact-success', 'Thank you!');
	header('Location: contact3.php');
	exit;
}
```




### Resources

* [Namespaces Explained](http://daylerees.com/php-namespaces-explained)
* [PHP Namespacing](http://code.tutsplus.com/tutorials/namespacing-in-php--net-27203)
* [Easy Package Management with Composer](http://code.tutsplus.com/tutorials/easy-package-management-with-composer--net-25530)
* [What is composer.lock?](https://blog.engineyard.com/2014/composer-its-all-about-the-lock-file)

<!--

#### Namespaces

* creating a namespace
* using a class with a namespace
* use statement
* aliasing namespaced classes
* namespaced classes that use built-in php classes

#### Autoloading Manually

* autoloading classes using classmap
* autoloading classes using PSR-0 (php standards recommendation)
* autoloading files with __autoload magic function
	* autoload example
* autoloading files with spl_autoload_register

#### Composer Overview

[Composer Introduction](https://getcomposer.org/doc/00-intro.md)

* A great tool that was introduced in the PHP community
	* rails world => bundler
	* node => npm
	* php => composer
* Composer allows us to share and reuse code (packages)
* Dependency manager for packages on a per project basis
* Composer also generates an autoload file that supports classmap, PSR-0, and file autoloading so you dont have to worry about autoloading yourself!
* Composer is a REQUIREMENT for Laravel
* Laravel relies on packages like:
	* Symfony components
	* Date libraries like Carbon
	* Error page library called Whoops
	* Monolog for logging

#### Composer Walkthrough

* Composer installation
* Packagist.org
* composer.json
* loading other packages into our project -> install monolog
* wildcards
* composer install
* /vendor directory
* composer.lock
* composer update
* autoloading our own files using psr-0, classmap, and files
* composer dump-autoload


__Dont commit packages you install to your repositories. Add them to your .gitignore file__

#### Symfony HttpFoundation

* sessions
	* get, set
* flash messages
* query string data
* post data
* redirects

-->