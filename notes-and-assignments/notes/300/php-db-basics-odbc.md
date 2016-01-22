Conecting to databases using ODBC
=================================

### php Review

* All php code needs to be inside a __php block__ ("<?php ?>")
* All variables start with "__$__"
* **_Created_ variables** (ones you write) start with $ and then a letter and then any letters or numbers. So $favcolor or $var2 or $a
* __$\_SERVER__ variables have information that the server knows such as $_SERVER["HTTP_USER_AGENT"] and $_SERVER["REMOTE_ADDR"]
* __$\_REQUEST__, __$\_POST__, __$\_GET__ variables contain form objects that were SUBMITTED to a page. If you open a page directly (not through a form) then $_REQUEST variables will throw an error (because there is no form). For an example if a form has a field named "color", then the "receiving" php page could have code such as:

```php
echo "You picked the color " . $_REQUEST["color"];
```

For a simple example of that workflow in action go to [form.php](http://itp300.usc.edu/dent/form.php) and submit it.

### Web databases:

__Access:__ database is in a physical file. Connection will be created to the database through an odbc object (next week).

__MySQL:__ database is typically created and maintained through a php MySQL interface. Connection can be made through functions built into php through the database name (see later in the semester)

In all cases, in php, once you have a connection to a database, you can then submit SQL to the database, and in the case of a Select statement assign the "result/dataset" to a variable which you can then parse and display on a Web page.

### Basic php database workflow: 
 
#### Part I: Get the data 
 
1. Create/establish a connection to a database server and a database. 
 
2. Write/create a sql query. 
 
3. Submit the query to the database and create a variable to contain the "result" of the query (the returned records). 
 
  3a (optional) Test the query. 
 
#### Part II: Display the data 
 
4. Display any results meta data and form information such as how many records were returned, and what were the criteria of the query. 
 
5. Create a php "loop" around the results, and then inside that loop output fields/columns from each record in the results. 

### Connecting to ODBC databases: 
 
ODBC (Open Database Connection) is a neutral platform/mechanism for connecting databases up to servers. PHP can communicate with any database that has a ODBC driver. The upside is this includes not only any database, but other formats that have ODBC drivers such as excel. The downside is that the php odbc commands/tools are not as easy to use and bulletproof as the php commands specifically dedicated to working with MySQL databases. 
 
When a server admin creates an ODBC connection to a database that connection is assigned a name (such as "moviedatabase"). Once that relationship has been created on the server then php can use that connection and database through that name. 
 
The core php odbc commands are:

* [odbc_connect() -- connect to "named" database](http://us.php.net/manual/en/function.odbc-connect.php)
* [odbc_exec() -- submit sql to a database](http://us.php.net/manual/en/function.odbc-exec.php)
* [odbc_result_all() -- a "testing" command to dump results of a query to the screen](http://us.php.net/manual/en/function.odbc-result-all.php)
* [odbc_fetch_row() -- extract one row from results (and advance to next row)](http://us.php.net/manual/en/function.odbc-fetch-row.php)
* [odbc_result() -- return individual fields/columns from an active row of a resultset](http://us.php.net/manual/en/function.odbc-result.php)


Php can communicate more streamlined if it is talking to a MySQL database, and has special commanads for talking to that specific dbms. 

Extra readings: W3School has a reading on the basics of [PHP Database ODBC](http://www.w3schools.com/PHP/php_db_odbc.asp), including how to create an odbc connection to a database on windows and some sample code for the basic commands. 

### Basic php workflow with an ODBC database: 
 
1. First off, there are typically two different types of display workflows: The user comes directly to a results page. In this scenario the sql statement that creates the page "data" is generaly static, such as a SELECT statement that would pull the 10 most recent articles from a news database.
2. Or the user FIRST comes to a "search" page to select criteria, and then submits a form and arrives at a results page. In this workflow the results page uses a dynamic sql statement using "form" data the user entered/selected.

Ok, onto the ODBC database workflow in detail: 
 
1: Create a connection to an odbc datahase: 
 
The odbc_connect() method creates a connection to a "named" odbc database on the server. Again, the odbc connection must already be defined and named on the machine. This command is used to "open" that connection. 
 
Example:

```php
// this database does not require a username and password, 
// so the second and third parameter have been left blank
$dbconnection = odbc_connect('dvd', '', ''); 
```

2. Draft a sql statement (SELECT, INSERT, UPDATE or DELETE) that you will be "executing" on the database. 
 
Note: In most cases this will not be a static sql SELECT statement, but rather will have one or more components that use variables such as data posted from a form. For instance, you might not want to hard code in a request for all comedies (genre='comedy'), but have the user pick a genre from a form and then use that data to get THAT genre: "genre='" . $_POST['genere'] . "'" (which might translate to genre='Drama') 
 
You output form variables by their "scope". If a form was posted threough the POST method, then all of the form objects are stored under $POST, such as $POST["genrename"], or if you use GET (on the URL) then $GET["moviename"]. But sometimes you might post forms through "post", and other times through "get". Rather than having to worry about which method a form was posted through, the $_REQUEST function searches through all post, get and cookie variable scopes. 
 
Static Example:

```php
$sql = "SELECT * FROM dvd_view where genre='Comedy'";
```

Dynamic Example:
```php
$sql = "SELECT * FROM dvd_view WHERE genre='" . $_REQUEST['genre'];
```

3.Submit/Execute the sql and store the results in a variable. 
 
Ok so you have a connection to a database, and you have some sql you want to run or execute on the database. So now its time to submit that sql. With ODBC databases we use the odbc_exec() function to submit them. 
 
Example:

```php
// submit the sql stored in the variable $sql to the database connection 
// that has been previously created and stored in the variable $dbconnection
$results = odbc_exec($dbconnection,$sql); 
```

3b. (optional) Test and output the full query. 
 
At this point you might want to make sure the query works (runs correctly) as well as see that the content of the results is accurate (what you expected). There is a simple "dump" type command that will output the entire result set from a SELECT statement into an html table. This command is odbc_result_all() -- you just tell it what query result you want to output. 
 
Example:

```php
// assumes you have saved an executed sql command as the result variable "$results"
echo odbc_result_all($results); 
```

Ok. So the query works. Now you probably want to display the data in specific locations on a Web page. 
 
4. Display meta/summary information and other things: 
 
First off, you need to see if the query returned any results. I.e. in most "search" applications the user could enter in information that would return 0 results. For instance, if they did a search for the movie "Die Hard 23" in the DVD database. But we will leave that alone and come back to the question of checking for "null" result sets next week. If you want to see the code now... it checks to see if a fetch_row at position 1 (first record) returns a null response. Then either way it resets the result set back to before its first record. 
 
Example:

```php
if (odbc_fetch_row($results, 1) == "") {
	echo "no records";
}
```

Another thing you might want to do before outputting the main results is to remind the user of any "criteria" they had submitted. For instance, on address search results pages commonly have strings like "Your search for locations in 90089..." before the results. In general this means outputting form variables that were submitted to the page. 
 
Example:

```php
echo "Your searched for movies in the " . $_REQUEST["genre"] .	"genre.";
```

Finally, in terms of "pre-results" data, you might want to tell the user exactly how many records were returned by their search -- such as "Your search returned 23 movies". Many scripting languages commonly have simple commands to "count" the number of results in a recordset. Since the odbc functions do not have a reliable way to do this, the solution is shown below but is not one we will get into right now. If you are really interested, it involves creating a loop around the results, incrementing a variable each time through the loop, and then reseting the results. 
 
Example:

```php
$count = 0;
while (odbc_fetch_row($results)) {
	$count = $count + 1;
}

echo "records returned: " . $count . "";
odbc_fetch_row($results, 0);
```

5. Create a "loop" around the results and each time through the loop output one or more fields/columns from each record. 
 
Ok, now for the meat of the query. The primary focus of any results page are the records actual records being returned. So in our case, this will mean not just a list of the names of "matching" movies but also some other basic information such as their genre and rating. 
 
So first off, we set up the programmic constuct that will run once for every row in the resultset. We do this with a "while" statement that is calling the odbc_fetch_row command -- which retrieves single rows or records from the recordset. 
 
Example:

```php
while (odbc_fetch_row($results)) {
	// run this code once per loop/record
}
```

So that loop runs once for every returned record. So inside the loop we want to output one or more fields. We extract individual fields or columns from a record (a fetched row) using the odbc_result() function ... so for instance the line odbc_result($results,"title") would extract the "titles" field from the returned $results recordset. 
 
Example (with loop):

```php
while (odbc_fetch_row($results)) {
	echo odbc_result($results,"title") . " (rated " . odbc_result($results,"rating") . ")";
}
```

Ok, now for some linked examples that have a full set of code. One file has the code saved as a text so that you can read it all (without the php being parsed and removed) and is named select_odbc_example1.txt. A "running" version is located at [select_odbc_example1.php](http://itp300.usc.edu/dent/select_odbc_example1.php). 
 
A slightly more advanced model would have a "criteria" page where the user selects a genre, and then "submits" that form (and the genre data) to the results page, which then uses that $_REQUEST data to match the genre in the SELECT statement. The core code is the same in the results page, with only the select statement and the pre-results meta data changing. the [select_odbc_search.php](http://itp300.usc.edu/dent/select_odbc_search.php) page has the simple form, which submits to [select_odbc_example2.php](http://itp300.usc.edu/dent/select_odbc_example2.php) ... to see the code behind the latter go to [select_odbc_example2.txt](http://itp300.usc.edu/dent/select_odbc_example2.txt). 
