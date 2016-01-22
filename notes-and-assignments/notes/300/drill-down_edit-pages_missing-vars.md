Drill Down, Edit/Update Pages, Missing Variables
================================================

### Review: Form and URL Variables (Query String Variables)

* Anytime you submit a form to a page, you can access any of the form data through the php superglobal array variable $_REQUEST, or more specifically $_POST or $_GET depending on the request type. So, for instance, if you have a text field named "title" you would access the data from that text box on the submitted page through $_REQUEST["title"]
* Just about every form object (text boxes, drop-down menus, etc) can be accessed through this method. And it does not matter if you submitted the form through the GET or POST methods.
* You can ALSO access any variable that you manually code into a URL through the same syntax. So, for instance, if you linked to a page called test.php through a link "test.php?id=2", then you could access that "extra" info of the URL through the variable $_REQUEST["id"]. Why does this work? Because if you noticed when forms are posted through the "get" method all of the form data is actually encoded into the URL of the "receiving" page. But besides submitting a form that way you can also manually encode a name=value variable into the link/URL for a page.
 
### Pages that are dependent on data (like IDs) being passed to them:

Some pages are written such that they EXPECT to receive information -- to have it passed to them through form objects or URL variables. For example:

* Search results page: expects search parameters to be passed in
* Record detail page: expects a unique identifier for a record (ID/key) to be passed in

Because these pages have references to "passed" data hard-coded into their pages, if said variable does not exist they will "throw" errors

* Go to record detail page directly -- example page expects an ID field passed in through URL
error "Undefined index: id in ... on line 14" because line 14 has a reference to $_REQUEST["id"]
* Go to results page directly -- example page expects a form variable submitted/passed in 
errors	"Undefined index..." x 10 (once for every reference to posted form fields in the php code)
* Solution: One way to address this is to start a page by having it check for the existence of a variable, and if it does NOT exist to do something different than running the page normally. This typically is some kind of stop message and a link to an alternate page

Example of "detail" page that stops and warns the user if they come directly to it. Core code:

```php
if (empty($_REQUEST["id"])) {
	die("Sorry, you are not allowed to reach this page directly. Please go Back or click on the <a href="/">start page</a>.");	
}
```

Example of php code on a "results" page that redirects the user back to the "search" page if they come there directly. Code:

```php
if (empty($_REQUEST["genre"])) {
	header('Location: search.php');
}
```

### empty():

* This function checks to see if a variable does NOT exist OR if it exists but has an empty (null or "") value. It is "true" if the variable does NOT exist or is EMPTY
* Works great to check for missing variables before the page starts

Example:

```php
if (empty($myvariables)) { 
  exit('Stop tampering with the URL!'); 
}
```

### header(Location)

* This function MUST occur BEFORE any other code on the page in order to operate. it basically tells the user's browser to stop and move to another page. But it must happen in the "header" of the web request.
* the header command can put other instructions/meta data into the page's header, but the Location property is what we are interested right now. It can take an absolute URL or a page name.
* Note that the Location section is ALL in quotes, with no new set of qoutes between Location: and the URL

```php
header('Location: http://webdev.usc.edu');
```

### Creating a 3 page "drill-down" workflow

Imagine a workflow where the first page is search, the second page is results (no details), and the third page is the 'Detailed Record'. When you perform searches on major sites, that is often the sequence we see.

#### Search Page:

* So page 1 is a typical "search" criteria page.
* Form variables: As the first page in the sequence it would not typically have any $_REQUEST variables
* DB queries: Possibly queries to populate data lists (like genres).

#### Results Page:

* List of results. Typically NOT full detailed for every records.
* Each "result" likely has a link to take you to the "detail" page for that record/item. BUT links to detail pages need to PASS the recordID to the "detail" page.
* Form variables: The form fields ($_REQUEST) from the search page.
* DB: Query that uses submitted search criteria to find matching result records. Typically does not have all of the extended data for each result.

#### Detail Page:

* Detailed information for one record.
* Form variables: Receives the unique "ID" for the record to show in detail. Most often passed/encoded directly in the URL.
* DB: Query that gives the full record details. Uses the $_REQUEST ID to select the record.

For an example of three-page drill-down of Search -- to -- Results -- to -- Detail, start at the php_mysql_select_sample2.php search page and click through the steps.

### Pass a record ID along to a second page:

Ok, so say you are outputting a set of records, and you want to pass the record ID for a record along to another page. How do you do so? Well, one method is to encode that data direcly on the URL string for the new page. So, for instance, rather than just loading detail.php you could load detail.php?id=2 ... and on the detail page there would be a $_REQUEST variable "id" -- $_REQUEST["id"].

#### Creating an "edit" page:

Similar to the "record detail" page, the first thing an "update" page needs to know is WHAT record do you want to update... because it needs to load the "current" data before it can let you edit it. So, like a "detail" page, it is best if you start by checking for the existence of the ID that "should" have been passed into the page. Like:

```php
if (empty($_REQUEST["ID"])) { 
	exit('You have reached this edit page in error. Please click <a href="">here</a> to start again.');
}
```

Like a search page, if any of the form GUIs are going to be drop-downs, we need to load all of those data sets in addition to the record information. In other words, we need to know all of the information about the record to be edited, but we ALSO need a list of any look-up values such as genres. See how below I load both the dvd movie information AND a recordset of the genre look-ups.

```php
$con = mysql_connect("localhost","student","ttrojan");
mysql_select_db("dvd"); 

$recordsql = "
	SELECT dvd_titles.*, genre.genre, rating.rating, label.label, sound.sound, format.format 
	FROM dvd_titles, rating, genre, format, label, sound 
	WHERE dvd_titles.format_id = format.format_id 
	AND dvd_titles.sound_id = sound.sound_id AND dvd_titles.label_id = label.label_id 
	AND dvd_titles.genre_id = genre.genre_id AND dvd_titles.rating_id = rating.rating_id 
	AND dvd_titles_ID = " . $_REQUEST['ID'];

$movieresults = mysql_query($recordsql);
$genreresults = mysql_query("SELECT * FROM genres");
```

Ok. So now we have the details of the initial record loaded. We don' really need a "while" loop since there is only one record. BUT if you don't want to write a while loop, you do still need to "fetch" one row (record) of the data/recordset and assign it to a variable:

```php
$moviedata = mysql_fetch_array($movieresults);
```

Now you would build a form with text boxes (and drop-downs) for the data, but unlike the "add" page you need to preload the "current" data into each form object. For text boxes this would be using the value attribute. You could either do that like this:

```php
Title: <input type="text" name="dvd_title" value="<?php echo $moviedata['title']; ?>">
```

Or through one long echo statement inside a php block like:

```php
$title = $moviedata["title"];
echo "<input type='text' name='dvd_title' value='$title' />";
```

So text fields are pretty simple. But what about drop-down menus? In the example below, we need to have our genre select menu preselect the record's current genre value. There are many approaches we can take, but the 2 following approaches tend to be the simplest.

__Approach 1:__

As I loop over all of the genres, I check if each genre is equal to the genre of the movie that I want to edit (or we can compare the genre_ID field too). If it is, I output an option tag with the selected="1" attribute. Otherwise, I leave off the selected attribute on the option tag. 

```php
<select name="genre">
	<?php
		while ($currentrow = mysql_fetch_array($genreresults)) {
			$genre_ID = $currentrow["genre_ID"];
			$genre = $currentrow["genre"];

			if ($genre == $moviedata['genre']) { // compare the genres (could also compare genre ID's)
				echo "<option selected='1' value='$genre_ID'>$genre</option>"; // has the selected attribute
			} else {
				echo "<option value='$genre_ID'>$genre</option>"; // does not have the selected attribute
			}		  
		}
	?>
</select>
```

__Approach 2:__

While we loop over all of the genres and create option tags for each genre, we can compare each genre to the genre of the movie record that we want to edit (or we can compare the genre_ID field too). If they match, then we can apply the selected="1" HTML attribute to the $selected variable. Otherwise, we set the $selected variable to an empty string. When we create the option tag, we echo out the $selected variable in the tag.  

```php
<select name="genre">
	<?php
		while ($currentrow = mysql_fetch_array($genreresults)) {
			$genre_ID = $currentrow["genre_ID"];
			$genre = $currentrow["genre"];
			$selected = '';

			if ($genre == $moviedata['genre']) {
				$selected = 'selected="1"';
			}

		  echo "<option $selected value='$genre_ID'>$genre</option>";
		}
	?>
</select>
```

__Note, if you use php's double quote trick (remember, double quoted strings in php can interpet variables), it makes the option tag creation much easier and more readable.__
 
So all done, and ready to move on to creating the update page to commit that info? Not so fast. We need to put into the form the ID of the record that should be updated... but we don't want it to be editable (the user doesnt get to change the record key/id). So we create a "hidden" form text object where we store that information:

```php
<input type="hidden" name="dvd_titles_ID" value="<?php echo $moviedata["dvd_titles_ID"]; ?>">
```

Ok, so the final "form" page (with only title and genre) might be something like this (code view). 

### Update page:

Ok, so now you've customized a form so that the user can "edit" the current values of a record. But you need to have another page (or the same page with an alternate set of code) take all the form results and create an update sql statement to commit those data changes to the database.

So lets assume that the "edit" page submitted to a separate "update" page. That page will need to build a sql UPDATE statement out of the form data, save it to the database, then let the user know it has done so.

But first off, before it does anything else, that page should check to make sure it had had data submitted to it (from the edit page), and if not STOP.

```php
if (empty($_REQUEST["dvd_titles_ID"])) {
	die("You have reached this update page in error.");
}
```

Ok, so you make a connection like normal to the database, and start building the sql UPDATE statement. A liberal use of line breaks in between strings/variables will make for much more readable code:

```php
$updatesql = "
	UPDATE dvd_titles 
	SET " . " title = ' " . $_REQUEST["dvd_title"] . "' , " .  " genre_id = " . $_REQUEST["genre"] . 
	" WHERE dvd_titles_ID = " . $_REQUEST["id"];
```

__Alternatively, you can use the php doubled quoted strings trick to simplify the concatenation.__

```php
$dvd_title = $_REQUEST["dvd_title"];
$genre_id = $_REQUEST["genre"];
$id = $_REQUEST["id"];

$updatesql = "
	UPDATE dvd_titles 
	SET title = '$dvd_title', genre_id = $genre_id 
	WHERE dvd_titles_ID = $id
";
```

Now, BEFORE we go about trying to commit/submit this sql to the database. Lets FIRST test to make sure we created a valid SQL statement:

```php
die($updatesql);
```

Ok, so if all looks good now we just need to submit that sql to the database:

```php
$results = mysql_query($updatesql);
```

If everything was ok, then you should see no errors and you can display a success message somewhere on the page or redirect back to another page.

__If there were errors or your page just hangs, dump out the SQL statement and try running it in phpMyAdmin under the SQL tab of the database. You will get better error messages in phpMyAdmin and this makes debugging much easier.__