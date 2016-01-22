Object Oriented Programming Workshop 1
====

## Overview

* What is OOP?
* Terminology
* Procedural code
* classes and objects
* properties
* constructor method and _this_
* data types overview
* defining "behaviors" aka methods
* encapsulation
* examples

### Procedural Code

Imagine you are a business selling several products. Each product has a name, a price, a discount price, a color, a size, and an image. How do you group all of this information together so that a price from one product doesn't get mixed up with a price from another product? 

One approach could be to use an indexed array. 

```php
$product = [];
$product[0] = 40;
$product[1] = 'GO Run';
$product[2] = 35;
```

Another approach could be to use an associative array. 

```php
$product = [];
$product['price'] = 40;
$product['name'] = 'GO Run';
$product['discountprice'] = 35;
```

Arrays hold multiple pieces of data. But what if you want to have functions that operation on this data and group those functions with these related variables? For example, what if you want to have a function called `hasDiscount()` that returns true if a product has a discount, and false otherwise. This is where object oriented programming comes in.

### What is OOP?

Object Oriented Programming (OOP) is a style of programming that lends itself to code organization and reusability. You can create generic modules of code that can be reused. Once a module is developed and tested, you can treat it like a black box and expect consistent results without having to worry about the inner details.

OOP allows you to create modular units of functionality, much like creating functions. However, OOP takes this a step further and encapsulates related pieces of functionality into __classes__.


### OOP Terminology

* The fundamental building block of object oriented programming is the __class__
* __Objects__ are isolated instances of a class. A class defines how its objects will behave and what properties they have. A very common analogy that you'll see is a class is like a blueprint. You can create multiple houses (objects) from a blueprint.
* Objects are another data type like strings, numbers, booleans, arrays, etc
* Simply put a class is a group of related variables and functions packaged up together.
* A variable associated with a class is called a __property__ and a function is called a __method__.

### Example Code

https://bitbucket.org/skaterdav85/itp405-2015-oop-workshop/src

### Reading

Chapter 1 and 2 of [PHP Object Oriented Solutions](http://smile.amazon.com/PHP-Object-Oriented-Solutions-David-Powers/dp/1430210117?sa-no-redirect=1). You can access an electronic copy of it for free from USC. Visit:
https://library.usc.edu/uhtbin/cgisirsi/x/0/0/5?searchdata1=3338637{CKEY}

Then click the link next to Electronic Access that says "» SpringerLink - An electronic book accessible through the World Wide Web; click for information"

Log in with your USC credentials and you can download the PDF of the book.


### Practice Problem

Create a `Student` class that takes in a firstname, lastname, and email address.

```php
$student = new Student('David', 'Tang', 'dtang@usc.edu');
```

Implement a method `hasSchoolEmail()` that returns true if the email contains @usc.edu and false otherwise.

```php
$student1 = new Student('David', 'Tang', 'dtang@usc.edu');
$student1->hasSchoolEmail(); // true

$student2 = new Student('David', 'Tang', 'dtang');
$student2->hasSchoolEmail(); // false
```

Next, create getter methods for firstname, lastname, and email. A getter method is simply a method that returns the value of a specific property. A getter usually takes the form _getXXX()_. For example:

```php
$student1->getFirstname(); // returns 'David'
```

Now create setter methods for firstname, lastname, and email. A setter method is simply a method that sets the value for a specific property and usually takes the form _setXXX(value)_. For example:

```php
$student1->setFirstname('Dave');
$student1->getFirstname(); // returns 'Dave'
```

Lastly, create a method called `getWebsiteUrl()`. This method will return the URL to the USC student's webspace.

```php
$student1->getWebsiteUrl(); // returns http://scf.usc.edu/~dtang where dtang is replaced with your USC email prefix
```

