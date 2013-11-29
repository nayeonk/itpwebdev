### Formatting dates in php

In general PHP and MySQL work very well together. The one area where you may run into difficulties is with their differences in formatting dates. With DATETIME fields MySQL likes to have dates and times in the format YYYY-MM-DD HH:MM:SS ... or just the date with no time data such as YYYY-MM-DD. Whereas php likes dates to be in the integer "timedatastamp" format.

But through the simple use of the date() function we can solve the issues. As a reminder, the PHP date() function lets you format a date by parsing out components from a date/time stamp. So for instance, you could extra just the day name (Monday), or just the hour and minutes (2:45), or custom format a date (April 2, 2011).

The first parameter of date is the list of elements you want to display, so for instance date(So when you call date("m/d/Y") would output something like 9/30/2011.

The second (optional) parameter of the date function is the date/time you want to parse. When left blank is is the current date/time from the server.

#### Converting date (in php) and reformatting:
```php
$thedate = odbc_result($results, "eventdate");
$thedate = strtotime($thedate);
echo date('m/d/Y',$thedate);
```


#### Problem 2: I have only times in my database (like Access) and when converted they become 12:00AM

If your original time data was __ONLY__ a time (with no date) such as in Access, when it is loaded from the database it may have been given a generic date in the year 1899. The strtotime function does NOT recognize dates before 1901.

When you output the raw time, if it has a date like 1899-01-01 before the time then add the following "replace" step in your workflow:
```php
$thetime = odbc_result($results, "starttime");
$thetime = str_replace("1899", "1999", $thetime);
$thetime = strtotime($thetime);
echo date('h:i A',$thetime);
```


#### Displaying date FROM _MySQL_ INTO _PHP_:

__BUT__, if you want to use the date function on a specific date (as opposed to the current time/date), the time/date you feed into the date function must be in a __SPECIFIC__ format... __AND__ in general time/dates that you provide or get from a database are not going to be in that format.

So before you feed a time/date into the date function, you first need to convert it to a special integer format. In php the simplest way to do that is to use the strtotime function.

Simple PHP example:

```php
$thedate = "9/30/2011";
// convert to integer version of date using strtotime
$thedate = strtotime($thedate);
echo "Date formatted: " . date("m/d/Y", $thedate);

````

#### Taking a date from a _PHP webpage_ and using it in _MySQL_

Ok, so what about if you now want to take a date from php (from a variable of a form) and use it in MySQL?

Well, MySQL would like that date which may be in any strange format back into YYYY-MM-DD ... or if it's a full datetime combo into YYY-MM-DD HH:MM:SS

First off, we don't have to use any strange punctuations around the date just normal single quotes, such as release_date = '2011-09-30'

IF you have a date that a user is editing (such as in a form), if you simplay display the date in the YYYY-MM-DD format then you can simply use that form data directly to put it into MySQL, such as " release_date='" . $_REQUEST<"releasedate"> . "' "

But if you are not sure, or want to be extra careful, what you can do is in PHP take the data in question and 1) Convert it to php format with strtotime and then 2) Re-format it into the YYYY-MM-DD format before using it in SQL/MySQL.

Below is a simple example:

```PHP
$thedate = $_REQUEST["releasedate"]; 
	// this is assuming the date came from a form object called releasedate
$thedate = strtotime($thedate);
$thedate = date("Y-d-m",$thedate);
$thesql = "UPDATE dvd_tiles SET release_date ='$thedate' WHERE dvd_titles_ID = 5";
```
