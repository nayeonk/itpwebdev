Unit Testing
============

* PHPUnit is the de-facto unit testing framework for PHP
* Laravel ships with a preconfigured testing setup using PHPUnit

### Dependency Injection (DI)

Dependency Injection is a programming technique that makes your code more testable because dependencies can be mocked out.

```php
class Database {
	public function __construct() 
	{
		$this->conn = new MySQLConnection('localhost', 'root', 'root', 'music');
	}
}

$db = new Database();
```

```php
class Database {
	public function __construct(MySQLConnection $connection) 
	{
		$this->conn = $connection;
	}
}

$connection = new MySQLConnection('localhost', 'root', 'root', 'music');
$db = new Database($connection);
```

### Mocking

Mockery is a popular mocking library for PHP. Although you can mock without Mockery using PHPUnit utilities, Mockery tends to be a little simpler and more succinct in its API.

To install Mockery, open up `composer.json` and add the following to `require-dev`:

```
"require-dev": {
	"phpunit/phpunit": "~4.0",
	"phpspec/phpspec": "~2.1",
	"mockery/mockery": "0.9.4"
},
```

Then run `composer update`.

### Getting Started with Unit Testing in Laravel

Simply run `./vendor/bin/phpunit` from the command line.

### Running tests on file changes

Laravel ships with a JavaScript utility built on top of Gulp.js called Elixr.

Install gulp:

```
sudo npm install -g gulp
```

Install Node dependencies:

```
sudo npm install
```

Modify gulpfile.js to this:

```js
elixir(function(mix) {
  mix.phpUnit();
});
```

Run `gulp tdd`

