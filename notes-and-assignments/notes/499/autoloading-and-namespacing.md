Autoloading and Namespacing
===========================

### Overview

* namespaces
	* creating a namespace
	* using a class with a namespace
	* use statement
	* namespaced classes using built-in php classes
* autoloading & Composer
	* autoloading files with __autoload magic function
		* autoload example
	* autoloading classes using classmap
	* autoloading classes using psr-0 (php standards recommendation)
	* What is Composer? (see website)
	* Composer comes with an autoloader that supports classmap, psr-0, and file autoloading
	* Composer installation and walkthrough
		* packagist
		* composer.json
		* loading other packages into our project
		* composer install
		* /vendor directory
		* autoloading our own files using psr-0, classmap, and files
		* composer.lock
		* composer update
		* composer dump-autoload
* Symfony HttpFoundation
	* sessions
		* get, set
	* flash messages
	* query string data
	* post data
	* redirects

### Packages
	* Symfony HTTPFoundation
		* https://packagist.org/packages/symfony/http-foundation
		* http://symfony.com/doc/current/components/http_foundation/introduction.html
		* [Sessions](http://symfony.com/doc/current/components/http_foundation/sessions.html)

### Extra Reading

* [Composter article](http://net.tutsplus.com/tutorials/php/easy-package-management-with-composer/)
* [PSR Huh?](http://net.tutsplus.com/tutorials/php/psr-huh/)
* [__autoload magic function](http://www.php.net/manual/en/function.autoload.php)