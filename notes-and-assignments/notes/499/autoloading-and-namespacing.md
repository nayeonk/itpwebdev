Autoloading and Namespacing
===========================

### Overview

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

