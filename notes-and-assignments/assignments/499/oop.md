Song class
==========

In this assignment, you will be creating a form that allows you to insert new songs into the __music__ database.

### Create the a database driven HTML form (add-song.php)

Start by creating an HTML form that meets the following requirements:

* title => text input
* artist => select menu that is generated from the artists table
* genre => select menu that is generated from the genres table
* price => text input

For the dynamic select menus, use PDO to query the database. You should only create 1 database connection.

This form should send a POST request to add-song-process.php

### Processing page (add-song-process.php)

In this page, you should accept the user input and insert the song into the database. Rather than using plain PDO, here you will define a class called Song in a file called Song.php. Include Song.php in your add-song-process.php.

To insert a song into the the database, you should be able to do the following:

```php
	$pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
	
	// create a song using a Song class
	$song = new Song($pdo); // pass the song a connection to the database
	$song->setTitle($songTitle);
	$song->setArtistId($songArtistId);
	$song->setGenreId($songGenreId);
	$song->setPrice($songPrice);
	$song->save();
```

Lastly, display a message saying:

> The song _your-song-here_ was inserted successfully!

### Submission

To submit, push this code up to the __same repository__ as Assignment 1 and email the repository URL to itpwebdev@gmail.com