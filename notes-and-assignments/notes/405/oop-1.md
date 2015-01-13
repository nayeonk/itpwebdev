Object Oriented Programming - Part 1
====================================

To connect to a database and make queries from PHP, you have a couple options. You can use the mysql or mysqli extenstions that provide a handful of mysql specific functions for making a connection to a mysql db and executing queries. Note that the mysql extension is deprecated as of PHP 5.5. 

mysqli is an _improved_ version of the mysql extenstion.

Another option is pdo (PHP Data Objects). The mysqli extension gets the job done but it does have a downside. That is, your code is specifically tied to MySQL. If you change your db layer in the future to something else, you have to go in and udpate all of your code.

__PDO provides a uniform method of accessing multiple types of database.__

In this class we will be looking at frameworks. Framework authors have no idea what database you will be using for your application. If they used the mysqli extension, the framework would be tied to MySQL and everyone using the framework would have to use MySQL. Instead, many PHP frameworks (if not all), take advantage of PDO. This way, they can write db utility libraries without having to know exactly which db your application will be using.

### Object Oriented Programming (OOP)

PDO has an object oriented API, not a procedural one. Hence, we need to go over some terminology in order to understand how to use it, but first, what is OOP and why use it?

### PDO

Now that we have some of the terminology down, let's look at how we can use the PDO class to make a connection to a MySQL database and called different methods to execute an SQL query.

