Demo - Creating an insert page
==============================

This demo will walk you through creating an insert page.

First off, you will need to have a "form" page with text boxes and drop-down menus for the user to enter their data into. Conveniently, this page is almost identical to the fully functional search page (with all movie fields) that you built for the lab this week.

The core of the instructional demo will walk you through creating the "insert" page and looking up data in the MySql server.

To watch the demo [CLICK HERE](http://webdev.usc.edu/resources/demos/itp300/itp300_insert_demo.htm)

You can execute (try) out the final pages by clicking on the [add_form.php](http://itp300.usc.edu/dent/oct10/add_form.php) file. And the final code of the insert page is below.

Final Code:


```php
<?php
$dbconnection = mysql_connect("itp300.usc.edu", "student", "ttrojan");
mysql_select_db("dvd",$dbconnection);

// FORM VARIABLES EXPECTED -- title, format, sound

$title = $_REQUEST<"title">;
$format = $_REQUEST<"format">;
$sound = $_REQUEST<"sound">;

$sql = "INSERT into dvd_titles (title, sound_id, format_id)
        VALUES ('$title', $sound, $format)";

echo $sql;

$result = mysql_query($sql);

if ($result) {
  echo "Success!";
}
else {
  echo "There was a PROBLEM!!!!";
  exit();
}
?>
```

If this page was successful it will have added a record to the dvd db.