File Uploads
============

Note: File uploads can run into complications and slightly more complex scripting so may be well suited to beginner scripters.

The first step in creating a file upload is to properly create the HTML FORM to collect and upload the file. There are two key concepts:

### Form Enctype

Your form tag needs to have an enctype set to multipart/form-data .. i.e.

```html
<form action="" method="post" enctype="multipart/form-data">
</form>
```
If your form is not posted with that enctype the file will NOT be submitted/passed aong.

### File Input Type

One of the pre-built HTML form objects is the input FILE object. It automatically provides the file system browser dialog and file name fill-in functionality for the user.


```html
<input type="file" name="thefile" />
```

Ok, so a simple form like above might be:

```html
<form action="" method="post" enctype="multipart/form-data">
	Below browse to a file, the press upload:
	<input type="file" name="thefile" />
	<input type="submit" value="Upload" />
</form>
```

Processing and saving the file:

When a file is uploaded through a form to a PHP page, the php server saves the file as a filesystem temp file, and then fills out attributes of the file under the $_FILES variable scope, under the form object name, and THEN under the names name and tmp_name.

So, for instance, if you uploaded a file under the object name "thefile" then:

```php
$filename = $_FILES["thefile"]["name"]; //NAME of original file: 
$tmp = $_FILES["thefile"]["tmp_name"]; // Temp location and name: 
```

Ok, but the php server places the file in a temp location from where it will be purged/deleted. So when you upload a file, you need to use the _move_uploaded_file_ function to copy it from the temp location/directory to its eventual destination.
Let's assume you want the file in the same location as the php upload form script, then you would use:

```php
move_uploaded_file($_FILES["thefile"]["tmp_name"], "../uploads/" . $_FILES["thefile"]["name"]);
```

Sample code to go with the form page above:

```php
<?php
if (empty($_FILES["thefile"]["name"])) {
 // either the form is loading for the first time OR it was submitted with no file 
}
else { // there is an uploaded file from a form object named "thefile
	echo ("Received a file in the form object 'thefile'.");
	echo ("file was named " . $_FILES["thefile"]["name"]);
	echo ("file was saved as a temp file at " . $_FILES["thefile"]["tmp_name"]);
	echo( "to save a permanent version of this file you would need a command such as move_uploaded_file($_FILES["thefile"]["tmp_name"], $_FILES["thefile"]["name"]); which would upload the file to the same directory as the php page.");
	// move_uploaded_file($_FILES["thefile"]["tmp_name"], "../uploads/" . $_FILES["thefile"]["name"]);
	exit(); 
}
?>
```

Sample upload page in php and txt