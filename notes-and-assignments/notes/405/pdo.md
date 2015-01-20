PHP Data Objects (PDO)
====================================

To connect to a database and make queries from PHP, you have a couple options. You can use the mysql or mysqli extenstions that provide a handful of mysql specific functions for making a connection to a mysql db and executing queries. Note that the mysql extension is deprecated as of PHP 5.5. 

mysqli is an _improved_ version of the mysql extenstion.

Another option is PDO (PHP Data Objects). The mysqli extension gets the job done but it does have a downside. That is, your code is specifically tied to MySQL. If you change your database in the future to something else, you have to go in and udpate all of your code.

__PDO provides a uniform method of accessing multiple types of databases.__

In this class we will be looking at a framework. Framework authors have no idea what database you will be using for your application. If they used the mysqli extension, the framework would be tied to MySQL and everyone using the framework would have to use MySQL. Instead, many PHP frameworks (if not all), take advantage of PDO. This way, they can write db utility libraries without having to know exactly which db your application will be using.

PDO has an object oriented API, not a procedural one. 

### Resources

* [PDO and prepared statements](http://www.w3schools.com/php/php_mysql_prepared_statements.asp)

