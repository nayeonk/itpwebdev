Object Oriented Programming - Part 1
====================================

To connect to a database and make queries from PHP, you have a couple options. You can use the mysql or mysqli extenstions that provide a handful of mysql specific functions for making a connection to a mysql db and executing queries. Note that the mysql extension is deprecated as of PHP 5.5. 

mysqli is an _improved_ version of the mysql extenstion.

Another option is pdo (PHP Data Objects). The mysqli extension gets the job done but it does have a downside. That is, your code is specifically tied to MySQL. If you change your db layer in the future to something else, you have to go in and udpate all of your code.

__PDO provides a uniform method of accessing multiple types of database.__

In this class we will be looking at frameworks. Framework authors have no idea what database you will be using for your application. If they used the mysqli extension, the framework would be tied to MySQL and everyone using the framework would have to use MySQL. Instead, many PHP frameworks (if not all), take advantage of PDO. This way, they can write db utility libraries without having to know exactly which db your application will be using.

### Object Oriented Programming (OOP)

PDO has an object oriented API, not a procedural one. Hence, we need to go over some terminology in order to understand how to use it, but first, what is OOP and why use it?

OOP style of programming lends itself to __code reusability__. You can create generic modules of code that can be reused from project to project. Once it is developed and tested, you can treat it like a black box and expect consistent results without having to worry about the inner details.

OOP allows you to create modular units of functionality, much like creating functions. However, OOP takes this a step further and encapsulates related pieces of functionality into __classes__.

### OOP Terminology

* The fundamental building block of object oriented programming is the __class__
* __Objects__ are isolated instances of a class. A class defines how its objects will behave and what properties they have. A very common analogy that you'll see is a class is like a blueprint. You can create multiple houses (objects) from a blueprint.
* Objects are another data type like strings, numbers, booleans, arrays, etc
* Simply put a class is a group of related variables and functions packaged up together.
* A variable associated with a class is called a __property__ and a function is called a __method__.

### PDO

Now that we have some of the terminology down, let's look at how we can use the PDO class to make a connection to a MySQL database and called different methods to execute an SQL query.

