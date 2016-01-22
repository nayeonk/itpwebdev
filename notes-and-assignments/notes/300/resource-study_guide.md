# Exam Study Guide
==================

### Fundamental Database, SQL and PHP Concepts:

* Database fundamentals: Concepts in __{Database Fundamentals}__ covered basic db concepts such as tables, fields/columns, records/rows, primary and foreign keys, data types, relationships, and normalization. 
 
* SQL: Lectures on __{Basic SQL}__ and __{SQL part 2}__ covered the basic SQL commands (SELECT, FROM, WHERE, ORDER BY), syntax and order of clauses, and the four basic types of SQL transactions -- SELECT, INSERT, UPDATE and DELETE. 
 
* PHP: The first lecture __{PHP Basics}__ introduced the basic syntax of php, common operations such as creating variables and outputting data, using common php functions and server variables, and an introduction to php errors. Elements of later lectures such as __{PHP db basics}__ and __{missing variables}__ introduced the concept of writing conditional logic using "if" statements to test data and creating "while" loops to repeat a set of code -- generally re-running code once for every record in a result set. In many lectures including the recent __{drill-down}__ students also learned to work with form variables. 
 
* PHP and databases: The first __{php-db basics, odbc}__ lecture introduced a set of odbc-specific commands that are used to connect to an odbc database, submit a query to that database, and parse through the results of that query. The material also (as noted above) explored outputing the data from the query. The next lecture on __{php and mysql}__ introced the php commands specific to connecting to a mysql database, specifying a specific database, submitting a query to the db, and parsing through the results of a returned query. 
 
* PHP and queries: The __{php odbc}__ and __{php and mysql}__ lectures showed the basic construct for taking a query and parsing through its results -- either to return a single piece of data or to output all records in a loop. Later lectures introduced more complex versions including writing dynamic sql __{with the if statement}__. 
 
* Web page and data workflow: When the class got to __{drill-down}__ we had evolved a general model of a workflow where on a "criteria" or search page, a user would enter a query, on a "results" page the matching records would be outputting, and then an optional "detail" page would give the in-depth details of an individual record. Integrated into that passive data "read" workflow were pages that could __{insert a new record}__ and __{edit a record}__ in the database through web interfaces.
 
 
### PHP Summary:

#### PHP variables:

* variables names ALWAYS start with the dollar sign, such as $name
* you can create variables at any time and store information in them
* variables that refer to form objects start with $_REQUEST and then the name of the form object inside quotes inside square brackets, such as $_REQUEST["rating"] -- there are also URL ($_GET) and POST ($_POST) versions but you do not have to be familiar with them
* any variable that already exists in the php language starts with $_ whereas variables YOU create start with $ but then are followed directly with the variable name you create
 
#### PHP "conditional" clauses

* an "if" statement sets up a "question" with a set of associated code -- if the question is "true" then the stored code is executed
* the "question" is surrounded in parentheses, and generally has two values separated by an evaluative symbol, such as $a == "patrick" or $_REQUEST["genre"] != ""

	```php
	if ($_REQUEST["genre"] != "") { 
		echo "form object genre has data" ; 
	}
	```

#### Review of odbc php commands:
* odbc_connect() -- connect to a database through its odbc name
* odbc_exec() -- submit a sql statement to an odbc db
* odbc_result_all() -- debug-like command that "dumps" the full recordset to the screen
* odbc_fetch_row() -- retrieve one row of a recordset
* odbc_result() -- output a field of a row of a recordset


#### Review of mysql php commands:
* mysql_connect() -- connect to mysql server
* mysql_db_select() -- select which database to communicate with
* mysql_query() -- submit sql to a mysql database
* mysql_fetch_array() -- retrieve one row of a recordset

 
#### php "while" loop:
* if you have a recordset in memory (from a database), you can set up a "loop" that each time through the loop moves to another "row" of the recordset, and outputs data/fields in that row
* while ($currentrow = mysql_fetch_array($recordset) sets up the loop, then is followed by squiggly brackets that contain the code to be run inside the loop
* loop runs over and over until the recordset runs out of rows
* inside the loop the "$results" variable that is created is used to access/output that row of data using fields from the query
 
