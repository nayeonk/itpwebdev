#Object Oriented PHP

###Overview
* Object Oriented Programming
* Objects vs Classes
* Defining class properties
* Defining class methods
	* $this 
* Magic Methods
* Inheritance
* Access Modifiers
	* public
	* private
	* protected
* Static properties and methods
* Midterm Project

See folder __flickr-api-class__ for a full example using web services with public, protected, and private members and inheritance.

###Objects vs Classes

A class is like a blueprint for a house whereas an object is like the actual house created based on the blueprint. Sometimes developers interchange the terms class and object even though they are different things. Essentially, classes form the structure (properties and methods) for objects. More than one object can be created from a class at the same time, and each object will be independent of the other objects.

###Defining a class

To define a class, use the keyword __class__ followed by a class name. Class names typically have their first letter capitalized.

```php
	class Person {
		// class properties and methods here
	}
```

To create an object from the class, use the _new_ keyword.

```php
	$david = new Person();
```

Here is an example of a Person class with a few properties and methods:

```php
	class Person {
		public $name;
		public function greeting() {
			echo "Hello, my name is " . $this->name;
		}
	}
	
	$david = new Person();
	$david->name = "David";
	$david->greeting(); // Hello, my name is David
```

Inside class methods, the $this variable can be used to reference itself (the object that you are calling the method on). This is similar to the use of __this__ in other object oriented languages like Java, and similar to the use of the keyword __this__ inside constructor functions in JavaScript.


###Magic Methods
In the above example, we had to set the public name property manually. Wouldn't it be nice if we could initilize our Person object with a name? We can through the use of a constructor method. PHP has what are known as magic methods. One common magic method is __construct(). This method acts as a constructor. So to revise the example above, we could initialize our object with a name like so:

```php
	class Person {
		public $name;
		
		public function __construct($first_name) {
			$this->name = $first_name;
		}
		
		public function greeting() {
			echo "Hello, my name is " . $this->name;
		}
	}
	
	$david = new Person('David');
	$david->greeting(); // Hello, my name is David
```

__construct is automatically invoked (assuming you have defined it in your class) when you create a new object.

* __construct() is the class constructor method
* __destruct() is the class destructor method

There are several other magic method available, but these 2 are typically the most frequently used.


###Inheritance

Classes can inherit methods and properties from other classes using the __exends__ keyword. For example, say you wanted to create a custom WebDeveloper class that extends from the basic functionality of the Person class, since after all, a web developer is also a human.

```php
	class WebDeveloper extends Person {
		public function code() {
			echo $this->name . ' likes to code for the web.';
		}
	}
	
	$david = new WebDeveloper('David');
	$david->greeting(); // Hello, my name is David
	$david->code(); // David likes to code for the web.
```

###Access Modifiers

Up until this point all our properties and methods have been made public. That is, public properties and methods can be accessed from within our class (such as from other methods), from within child classes, or even from outside our class.

Sometimes you want to limit the visibility of properties or methods. For example, say you have a Flickr API wrapper class to hide the complexity/details of Flickr's web service. To work with the Flickr API, you need to have an API key. Once you set it as a class property, there is no need to modify it or access it, but class methods should still have access it to make requests to Flickr. You only want other developers who are using this class to be able to set the API key via a constructor method, but never be able to change it from the code they write outside of the class. 

In this case, you can make the API key __protected__ or __private__. When a property or method is either protected or private, it cannot be accessed from outside the class. If a property or method is protected, it can only be accessed from within the class itself or from child classes, also known as "sub-classes". Private members (properties or methods) can only be acccessed from within the class that contains the private member and NOT outside the class or from subclassess.

A good use for protected and private members include:

* database connections
* api keys (sometimes there are more than one key)
* user credentials
* or even just internal properties and utility methods that are needed by other methods but don't need to be exposed as part of the public interface

###Static properties and methods

Methods or properties can be declared as __static__ which essentially means that they can be accessed without instantiating the class. Think of it like an object literal in JavaScript, where the object has properties and methods, but you don't create an instance from that object literal. When would you want to use static methods or properties? One example would be if you wanted to create a String Utility class that contained several string manipulation methods, but there really was no need to create independent instances but we still wanted to group these functions (or methods) into a class. For example, one method might trim off white space on either end of a string and another method might replace all spaces with dashes. In this case, we could create a StringUtility class with several static methods.

```php
	class StringUtility {
		public static function trim($str) {
			return trim($str);
		}
		
		public static function remove_spaces($str) {
			$modifiedString = preg_replace("/\\s/ui", "-", $str);
			return $modifiedString;
		}
	}
	
	$someString = "   This is a string with a lot of extra white space  .  ";
	$str1 = StringUtility::trim($someString); // "This is a string with a lot of extra white space  ."
	$str2 = StringUtility::remove_spaces($someString); // "---This-is-a-string-with-a-lot-of-extra-white-space--.--"
```
Static properties and methods can be accessed by using the class name, the double colon (called the scope resolution operator), and the static property or method name. 

One thing to note is that classes with static members can also have instance methods. Here is an example that uses both static and instance members:

```php
	class Database {
		protected static $connection = null;
		
		public function __construct($user, $pw, $host, $db) {
			if (!static::$connection) {
				static::$connection = mysqli_connect($host, $user, $pw, $db);
			}
		}
		
		public function query($sql) {
			$result = mysqli_query(static::$connection, $sql);
			$rows = mysqli_fetch_assoc($result);
        	return $rows;
		}
	}
	
	$db = new Database('root', '', 'localhost', 'my-database');
	$results = $db->query('SELECT * FROM my-table');
```

__On XAMPP, the default password is a blank string__

__On MAMP, the default password is 'root'__
 
One of the major benefits to using static properties is that they keep their stored values for the duration of the script. When would you want to do this? Say you created a Database class that made interfacing with a database a little easier. Creating a database connection is an expensive operation, so typically you only want to create 1 connection, and run multiple queries off of that 1 connection instead of creating a new connection for different queries. This way your site will run faster. We can store our database connection as a static property, and when multiple Database objects are created from that Database class, they will all use the same connection.

In the example above, we are creating a static $connection property initialized to _null_. The first time we create a Database object, the code that tests if the $connection has been created will evaluate to false (null is a falsy value) and so the code in the if-statement will execute and the connection will be created. Every subsequent Database object that is created will then test if the static $connection property exists (it will exist), and reuse that $connection static property since the if-statement inside the constructor will evaluate to false.

###Resources
* [Object Oriented PHP for beginners](http://net.tutsplus.com/tutorials/php/object-oriented-php-for-beginners/)
* [mysqli overview](http://php.net/manual/en/mysqli.overview.php)
* [Book: PHP Object Oriented Solutions by David Powers](http://www.amazon.com/PHP-Object-Oriented-Solutions-David-Powers/dp/1430210117/ref=sr_1_1?ie=UTF8&qid=1351574545&sr=8-1&keywords=object+oriented+solutions)

###Midterm Project
[Midterm Project Description](https://docs.google.com/document/d/1fHc3LVucDNusjm-Cgzx7aXWTEIuaQ2G9cO-Y-B7KQiM/edit#heading=h.qdwau2oyrvfw)