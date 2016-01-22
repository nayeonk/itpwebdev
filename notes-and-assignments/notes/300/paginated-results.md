Paginated Results
=================
Creating multi-page results (next/previous)


__Start file__: Save the two files below to your directory then rename from .txt to .php. Test.  
* [search.txt](http://itp300.usc.edu/dent/php_nextprevious/search.txt)
* [results.txt](http://itp300.usc.edu/dent/php_nextprevious/results.txt)

#### Advanced results -- subset of results with next / previous

When you have a very large result set it is often not feasible (or at least desirable) to display them all at once. Instead, it often works better to only display a portion of the results -- and then offer the user a "Next" button.

So, lets say you have 100 results. You could show the user the first 10, then give them a "Next" button to view the next 10 records.

That means you need to do a number of things that were not necessary when you display "all' results:

Start -- what record are you starting with? #1? #11? Etc
How many to display -- "end" and how many at a time -- starting with record X, how many to display? If you only want to show 10, and you have already displayed 10, then you need to "break" or exit the display loop
Pass along criteria -- the user is passing between pages of results, so you need to "re-pass" all of the search criteria when they click on Next (or Previous)
Conditional "Next" -- option should only appear if there are more results to display
Conditional "Prev" -- option should only display if there are results before the current set
As a baseline for playing around with this you can use [search.php](http://itp300.usc.edu/dent/php_nextprevious/search.php) and results.php which show ALL records at once.

Limited results:

To start, what we want to do is not output ALL of the records, but only a subset. One way would be set to up a "for" loop, in which we manually declare the fetch_array and manually set its start point.

But since we are already familiar with the "while" construct based arround a fetch_array command, we will edit that basic construct.

So currently we have output records through something like:
```php   
while ($currentrow = mysql_fetch_array($results)  
	{ echo $currentrow<"title"> . "<br />"; }  
```
So first off, lets establish a "start" number, and "end" number, and a "counter", and then manually set where the "results" start (i.e. move the recordset pointer to Record 1, or Record 100).
```php  
$start = 1;
$end = 10;
$counter = $start;
mysql_data_seek($results,$start-1);
```   
Now, notice I "set" the "pointer" of the resultsset (what record it is "starting" at BEFORE the first record (before the start).That is because if I set the recordset at Record 1, then when the "while" loop was run it would move "forward" from there and actually start with Record 2. So I have to set it one BEFORE the first record I want it to start with in the loop.

So putting that together:
```php
$start = 1;
$end = 10;
$counter = $start;
mysql_data_seek($results,$start-1);

while ($currentrow = mysql_fetch_array($results)
	{ echo $currentrow<"title"> . "<br />"; }
```  
Ok, so it operates pretty similar to how it used to. Now what I need to do is "use" the "counter" variable inside the loop, and stop or "break" the loop before it goes beyond the maximum record I want displayed (#10 for now).

So....
```php  
$start = 1;
$end = 10;
$counter = $start;
mysql_data_seek($results,$start-1);

while ($currentrow = mysql_fetch_array($results)
	{ 
	echo $currentrow<"title"> . "<br />";
    
	if($counter==$end) 
    	{ break; }

	$counter++;
	}
```   
Ok, so now the while loop "breaks out" if my counter reaches the "end" number. So it wil only display records 1 to 10. To test this, I could edit the "start" and "end" variables, say to 11 and 20, to see if it only shows #11 through #20.

So to see this in action, go to [seach2.php](http://itp300.usc.edu/dent/php_nextprevious/search2.php) and look at results2.php, which ONLY displays records 11 through 20 of the results. Of course, if the original search only returned 5 results there would be no 11 - 20, and if the original search returned 15 there would only be 11-15 not 11-20. So eventually we will need to "trap out" these possibilities. Not only will the results not be accurate, but your "data_seek" command will throw an error if the the "row" you are trying to move the recordset pointer to does not exist.

Ok. So we now understand a bit about how to set up mechanics to display just "part" of a large result set. Onward to creating next and previous buttons, and then trapping out "bad things" that could happen.

First off, lets start with a search that will return around 15 records, such as G-rated comedies. That way, if we only display 10 at a time, we will need one "next" button on the first page, but NOT on the second. And we will need a "Previous" button on the second page but NOT on the first.

We will once again set up variables, but this time we will set them up slightly differently: Please note that we are also putting some "missing form variables" protection at the top of the page (see lines 2-25 of results3.php).
```php  
if(empty($_REQUEST["start"]))
	{ $start=1; }
else
	{ $start = $_REQUEST["start"]; }

$end = $start + 10;

if (mysql_num_rows($results) < $end)
	{ $end = mysql_num_rows($results); }

  $counter = $start;
```   
So we see if a form variable "start" already exists, and if NOT we set it to 1, and if it does we set the "start" variable to the form version. Then we set the "end" to start +10. But then we check to see if the end is HGHER than the total number of records... and if so reduce the "end" to the total. So, for instance, if the recordset only had 2 records end would be changed from 10 to 2.

Now imagine I put something like the below on the page:  
```php  
<a href="results3.php?start=<?php echo $start-10; ?>">
Previous Records</a>
  |
pa href="results3.php?start=<?php echo $start+10; ?>">
Next Records<a>
```
Ok, this is flawed because I lose all the criteria of the search. But try doing a search with no criteria, and notice that it correctly goes forward and back 10 records at a time... although of course if you go "back" from 1 you will get an error. You can play around with [search3](http://itp300.usc.edu/dent/php_nextprevious/search3.php) and results to see this in action. The main flaw is that we are not passing the "search" crtieria between pages (from results 1-10 to results 21-20), and that we are not trapping out "bad" data (on Record 1 no Previous button, no Next if there are not more records, etc.).

Ok, so now onto our final version of the page...

Ok, so to pass along all of the "search" criteria from one results page to another is going to take one long, and UGLY set of code:  
```php  
<a href="results4.php?start=<?php echo $start+10; ?>
	&genre=<?php echo $_REQUEST["genre"]; ?>
    &title=<?php echo $_REQUEST["title"]; ?>
    &format=<?php echo $_REQUEST["format"]; ?>
    &label=<?php echo $_REQUEST["label"]; ?>
    &rating=<?php echo $_REQUEST["rating"]; ?>
    &sound=<?php echo $_REQUEST["sound"]; ?>">
    Next Records</a>
```  
Parsing that out, the URL string will be something like:

_results4.php?start=41&genre=7&title=&format=All&label=All&rating=All&sound=All_

So if we edit our "next" button, we can go "forward" from page to page (10 records to next 10 records) and the criteria (and total number of results) should be the same. Yeah!

Ok, so the last step is to put in some in some conditonal code to trap out for things like if there are not any "previous" or "next" records.

So the Previous button is easy. Basically only if we "started" with Record 1 will there not be any "previous" records. So I will wrap a simple conditional around the "Previous" button:
```php  
<?php
  if($start != 1)
  {
?>
  <a href="results4.php?start=<?php echo $start-10; ?>
  &genre=<?php echo $_REQUEST["genre"]; ?>
  &title=<?php echo $_REQUEST["title"]; ?>
  &format=<?php echo $_REQUEST["format"]; ?>
  &label=<?php echo $_REQUEST["label"]; ?>
  &rating=<?php echo $_REQUEST["rating"]; ?>
  &sound=<?php echo $_REQUEST<"sound">; ?>">
  Previous Records</a>
<?php
  }
?>
```  
For the Next button, what I need to do is check if the current start record + 10 if LARGER than the total number of records (if there will be records left over to display on another page).  
```php  
<?php
if($end < mysql_num_rows($results))
  {
  ?>
  <a href="results4.php?start=<?php echo $start+10; ?>
  &genre=<?php echo $_REQUEST["genre"]; ?>
  &title=<?php echo $_REQUEST<"title">; ?>
  &format=<?php echo $_REQUEST["format"]; ?>
  &label=<?php echo $_REQUEST<"label">; ?>
  &rating=<?php echo $_REQUEST["rating"]; ?>
  &sound=<?php echo $_REQUEST<"sound">; ?>">
  Next Records
  </a>
<?php
  }
?>
```  
All right! Now we should be able to do searches and paginate through them using [search4](http://itp300.usc.edu/dent/php_nextprevious/search4.php) and results 4! Try a small search like G-rated comdies, as well as larger searches, to see it in action! To grab the final code see [search4.txt](http://itp300.usc.edu/dent/php_nextprevious/search4.txt) and [results4.txt](http://itp300.usc.edu/dent/php_nextprevious/results4.txt)

 
