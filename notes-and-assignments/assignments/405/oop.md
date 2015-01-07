Insert Page using Classes
=========================

In this assignment, you will be creating a form that allows you to insert new songs into the __music__ database. I have set up the form page and the processing page. You will just be creating the classes to make the starter code below work.

Start by creating a folder for A2 with the following:
* add-song.php
* add-song-process.php
* db.php
* classes/ - you will be putting all your classes here

The class you will be creating in this assignment are:

* ArtistQuery
	* getAll()
* GenreQuery
	* getAll()
* ArtistMenu
	* __toString()
* GenreMenu
	* __toString()
* Song
	* setTitle()
	* setArtistId()
	* setGenreId()
	* setPrice()
	* save()
	* getTitle()
	* getId()

You are welcome to create more classes if you want to do any inheritance. You should have the above classes at the very least.


### 1. Database driven HTML form: add-song.php

```php
<?php
require_once 'db.php';
require_once 'classes/ArtistQuery.php';
require_once 'classes/GenreQuery.php';
require_once 'classes/ArtistMenu.php';
require_once 'classes/GenreMenu.php';

$artistQuery = new ArtistQuery($pdo);
$artists = $artistQuery->getAll();

$genreQuery = new GenreQuery($pdo);
$genres = $genreQuery->getAll();

?>

<form method="post" action="add-song-process.php">
	<div>
		Title: <input type="text" name="title" />
	</div>
	<div>
		Artist: <?php echo new ArtistMenu('artist', $artists) ?>
	</div>
	<div>
		Genre: <?php echo new GenreMenu('genre', $genres) ?>
	</div>
	<div>
		Price: <input type="text" name="price" />
	</div>
	<div>
		<input type="submit" value="Add Song" />
	</div>
</form>
```

### 2. Processing Page: add-song-process.php

In this page, you should accept the user input and insert the song into the database. Rather than using PDO by itself, you will instead define a class called Song in a file called Song.php. This class will work with PDO behind the scenes to insert the new song. 

```php
<?php

require_once 'db.php';
require('classes/Song.php');

$song = new Song($pdo);
$song->setTitle($_POST['title']);
$song->setArtistId($_POST['artist']);
$song->setGenreId($_POST['genre']);
$song->setPrice($_POST['price']);
$response = $song->save();

?>

<?php if ($response === true) : ?>
	<p>The song <?php echo $song->getTitle() ?>
		 with an ID of <?php echo $song->getId() ?>
		 was inserted successfully!</p>
<?php else : ?>
	<p>There was an error adding your song.</p>
<?php endif ?>
```

__I intentionally left off inserting playCount. It will default to 0 in the database.__

Here is the db.php file:

```php
$host = 'itp460.usc.edu';
$dbname = 'music';
$user = 'student';
$pass = 'ttrojan';

$pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
```

### Tips

* One thing to note, $response is either TRUE or FALSE. It should be the return value of $statement->execute();
* When a record is inserted using PDO, you can get the primary key of the last inserted record with $pdo->lastInsertId(). Documentation on lastInsertId() can be found [here](http://www.php.net/manual/en/pdo.lastinsertid.php).

### Submission

To submit, push this code up to the __same repository__ with a folder called PHP-OOP-A2 and email the repository URL to itpwebdev@gmail.com