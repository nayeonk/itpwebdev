PHP and MySQL
=========================

### ITP 300a - Class examples from last week
* http://itp300.usc.edu/dtang/dvd-search-form.html
* http://itp300.usc.edu/dtang/odbc-demo.zip

### ITP 300b - Class Examples from last week:
* http://itp300.usc.edu/yuanbo/form.html
* http://itp300.usc.edu/yuanbo/odbc_results.txt


### Lecture sub-topics:

* Review: php and database workflow odbc review
* Using mysql php commands
* Generating dynamic select menu
* php/mysql results page
* Conditional logic (if statements)

So lets review our basic php/database workflow from last week:

### Part I: Get the data
1. Create/establish a connection to a database server and a database.
2. Write/create a sql query.
3. Submit the query to the database and create a variable to contain the "result" of the query (the returned records). 
 
### Part II: Display the data 
4. Display any results meta data and form information such as how many records were returned, and what were the criteria of the query.
5. Create a php "loop" around the results, and then inside that loop output fields/columns from each record in the results.
 
When php works with a mySql database, the workflow is the same. The only difference is that steps 1 and 5 are slightly different, and that you CAN read the number of records in your resultset.

Lets start off by creating a page that displays all of the "genres" on one page. So this query will simply grab all records in the "genre" table of the "dvd" database on the mySql server.

### Getting the data from MySQL

** Unlike with odbc, connecting to a database takes TWO steps -- 1) Connect to the database SERVER, 2) tell it what database on the server you want to communicate with.**

```php
$dbconnection = mysql_connect("localhost", "student", "ttrojan");  
// please note this is a generic account, and you each have your own individual accounts
// mysql_connect() creates a connection to a mysql server
  
mysql_select_db("dvd", $dbconnection); 
// on the mySql server, select the "dvd" database as the one to submit queries
// mysql_select_db() specifies what mysql database you will submit to
    
$thesql = "SELECT genre, genre_id FROM genre ORDER BY genre";

$results = mysql_query($thesql);
// mysql_query() submits a sql statement to a sql database that you have previous defined
```

IF you run into probles with your statements, php has a nice command called mysql_error() that contans the last error encountered while doing a mysql command (connecting to database, submitting sql, etc.).

Now, you could do a statement like echo "Error:" . mysql_error(); ... but that would show up when the page runs CORRECTLY... whereas of course we really only want or need to have an error output statement if there is a problem.

So one way we can have conditional error information is to "trap out" when "bad" things happen at each stage of our workflow. We do this in two ways: 1) Write a conditional php statement that checks to see if there was a problem with the previous step, and 2) If so output errors AND STOP the page. We stop the page through the exit() or die() command (two different names/methods for the same command).

Ok, so below is an example of setting up a connection to the database server, then BEFORE selecting a specific database from that server FIRST checking to see if that connection was made correctly/successfully... then selecting a db, submitting sql to the and storing the results in a variable, then pausing to see if that variable was created/populated correcly.

```php
$dbconnection = mysql_connect("localhost", "student", "ttrojan");  

if (!$dbconnection) {
	echo "There was a PROBLEM! Error: " . mysql_error();
	exit();
}  

mysql_select_db("dvd", $dbconnection); 
    
$thesql = "SELECT genre, genre_id FROM genre ORDER BY genre";

$results = mysql_query($thesql);

if (!$results) {
	echo "THERE was a PROBLEM! Error: " . mysql_error();
	exit();
}	

echo "If you see this statement everyone worked CORRECTLY with no errors!";

```

At this point if there were no errors we should have a recordset of data (from the SELECT statement) stored in the $results variable.


So, want to see how many rows it returned? Easy. With mySql we don't need to create a loop with a counter variable:

```php
echo " Search returned " . mysql_num_rows($results) . " records.";
// sql_num_rows() returns how many rows records) are in a recordset.
// We can ALSO use this to see if the recordset is empty (if no results were returned).
```

Ok, so onward to displaying the results. Again the workflow but we have a slightly different method. While we still set up a WHILE loop based around a row-by-row "fetch" command, now we set up a variable to represent each row (in the loop), and call fields off that using the VARIABLE<"fieldname"> syntax.

#### OLD way with ODBC:

```php
while (odbc_fetch_row($results)) {
	echo odbc_result($results,"title") . " (rated " . odbc_result($results,"rating") . ")<br />";
}
```

#### With MySQL:

```php
while ($currentrow = mysql_fetch_array($results)) {
	echo $currentrow["genre"] . "<br />";
}
		
/* 
	with MySQL you need to set a variable equal to the 
	fetch command (in the while loop. This part is more 
	complicated than odbc. Then, inside the loop, you reference
	any field (from the query) as a sub-variable of that 
	"currentrow" variable. Although it sounds tangled, 
 	this part is actually easier/quicker than with odbc. 
	You output the field in quotes, inside square brackets 
	such as $row["fieldname"]
*/
		 
```

Ok, so lets put that all together to output the genres as a series of radio buttons to the screen. Let's change the output block/loop to:

```php
while ($currentrow = mysql_fetch_array($results)) {
	echo "<input type='radio' name='genre' value='" . $currentrow["genre_id"] . "'>" .  $currentrow["genre"];
}
		
```

Initial examples so far:

Output all genres to html: [working php](http://itp300.usc.edu/dent/php_mysql/php_mysql_select1.php) and [codefile](http://itp300.usc.edu/dent/php_mysql/php_mysql_select1.txt)
Output all genres as radio buttons in a form: [working php](http://itp300.usc.edu/dent/php_mysql/php_mysql_select2.php) and [codefile](http://itp300.usc.edu/dent/php_mysql/php_mysql_select2.txt)
Ok, so lets finish up by creating the page to "receive" their genre selection, and display all "matching" records.

This page will assume there is a form object called "genre" that is really the ID of a genre (genre_id). We find this variable by looking through all form variables, which we learned previously are all stored under the $REQUEST variable. So $_REQUEST["genre"] should be equal to the value of the "genre" form object that was submitted to a page.

So going to build a new "results" page: [working page](http://itp300.usc.edu/dent/php_mysql/php_mysql_results.php) and [codefile](http://itp300.usc.edu/dent/php_mysql/php_mysql_results.txt).


```php
<?php

echo "Returning records for the genre " . $_REQUEST["genre"] . "<br /> <br />";
$dbconnection = mysql_connect("localhost","student","ttrojan");
mysql_select_db("dvd", $dbconnection); 

$thesql = "SELECT dvd_titles.*, genre.genre, rating.rating
 FROM dvd_titles, rating, genre 
 WHERE dvd_titles.genre_id = genre.genre_id AND dvd_titles.rating_id = rating.rating_id 
 AND dvd_titles.genre_id = " . $_REQUEST["genre"] . " 
 ORDER BY title";

$results = mysql_query($thesql);
echo " Search returned " . mysql_num_rows($results) . " records<br /> <br />";
?>

<style>
	div { float:left; width:150px; }
</style>

<div>RecordID<hr/></div>
<div>Title<hr /></div>
<div>Rating<hr/></div>
<div>Genre<hr /></div>
<br style="clear:all">

<?php
while ($currentrow = mysql_fetch_array($results)) {
	echo "<div>". $currentrow["dvd_titles_ID"] . "</div>";
	echo "<div><strong>" . $currentrow["title"] . "</strong></div>";
	echo "<div>" . $currentrow["rating"] . "</div>";
	echo "<div>" . $currentrow["genre"] . "</div>";
}
?>

```

### PHP Conditional Statments (If Statements)

PHP "if" statements are fairly straight forward, and consistent with conditional statements in other scripting languages. You start with the if command, then in parentheses give it a statement you want to test to be true, such as if ($_REQUEST["format"] != "All") which would check if the form format field is NOT equal to "All"... or if (!$dbconnection) ... which would check if the $dbconnection variable does not exist or has bad data.

After the condition and the parentheses clause/question, you then contain code in squiggly brackets (kind of like our while statement).

So an example could be:


```php
if ($_REQUEST["format"] != "All") { 
	$thesql = $thesql . " AND format_id = " . $_REQUEST["format"]; 
} 
``` 


or


```php
if (!$dbconnection) {
	echo "There was a problem connecting to the database: ". mysql_error();
	exit();
}
```


or even


```php
if (empty($_REQUEST['genre'])) {
  echo "Error. You must go to the search page. You cannot load this page directly.";
  exit();
}
```

You can see an example of this on the [php_mysql_results_sample2.txt](http://itp300.usc.edu/dent/php_mysql2/php_mysql_results_sample2.txt) page (to test the page submit from the [search page](http://itp300.usc.edu/dent/php_mysql2/php_mysql_select_sample2.php)).

