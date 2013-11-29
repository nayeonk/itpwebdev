If Statements
=============

#### Bo's class
[form.txt](http://itp300.usc.edu/yuanbo/lecture%208/form.txt)
[result.txt](http://itp300.usc.edu/yuanbo/lecture%208/result.txt)
[insert_form.txt](http://itp300.usc.edu/yuanbo/lecture%208/insert_form.txt)
[insert.txt](http://itp300.usc.edu/yuanbo/lecture%208/insert.txt)

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

### Summary

* A php conditional if statement starts with the if command
* Then in parentheses provides an evalution (a question) you want to test to be true.
* The "operators" for the condition are == (NOT single equal) and != (not equal to) and < and > and <= and >=
* After the "condition" for the if statement, you wrap code in squiggly brackets that you want to be execute if the statement was true.
