File Uploads
============

The first step in creating a file upload is to properly create the HTML FORM to collect and upload the file. There are two key concepts:

### Form Enctype

Your form tag needs to have an enctype set to multipart/form-data .. i.e.

```html
<form action="" method="post" enctype="multipart/form-data">
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
	Below browse to a file, then press upload:
	<input type="file" name="thefile" />
	<input type="submit" value="Upload" />
</form>
```

### Processing and saving the file

When a file is uploaded through a form to a PHP script, the php server saves the file as a filesystem temp file, and then fills out attributes of the file under the $_FILES superglobal under the form object name, and THEN under the names _name_ and _tmp_name_. This is a multidimensional array (arrays nested in arrays).

So, for instance, if you uploaded a file under the object name "thefile" then:

```php
$filename = $_FILES["thefile"]["name"]; //NAME of original file: 
$tmp = $_FILES["thefile"]["tmp_name"]; // Temp location and name: 
```

If you var_dump $_FILES, the multidimensional $_FILES array looks something like this:

```php
array(
	'thefile' => array(
		'name' => 'davidsprofilepic.jpg'
		'tmp_name' => 'asdfd'			
	)
)
```

The php server places the file in a temp location from where it will be purged/deleted. When you upload a file, you need to use the _move_uploaded_file_ function to copy it from the temp location/directory to a permanent destination.
Let's assume you want the file to be moved to an uploads folder.

```php
move_uploaded_file($_FILES["thefile"]["tmp_name"], "../uploads/" . $_FILES["thefile"]["name"]);
```

Sample code to go with the form page above:

```php
if (empty($_FILES["thefile"]["name"])) {
 // either the form is loading for the first time OR it was submitted with no file 
} else {
	// there is an uploaded file from a form object named "thefile"
	echo "Received a file in the form object 'thefile'.";
	echo "file was named " . $_FILES["thefile"]["name"];
	echo "file was saved as a temp file at " . $_FILES["thefile"]["tmp_name"];
	move_uploaded_file($_FILES["thefile"]["tmp_name"], "../uploads/" . $_FILES["thefile"]["name"]);
}
```