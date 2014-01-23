Song class
==========

In this assignment, you will be creating a form that allows you to insert new songs into the __music__ database.

### 1. Database driven HTML form: add-song.php

Start by creating an HTML form that meets the following requirements:

* title => text input
* artist => select menu that is generated from the artists table
* genre => select menu that is generated from the genres table
* price => text input

For the dynamic select menus, use PDO to query the database. You should only create 1 database connection.

This form should send a __POST__ request to add-song-process.php

### 2. Processing Page: add-song-process.php

In this page, you should accept the user input and insert the song into the database. Rather than using PDO by itself, you will instead define a class called Song in a file called Song.php. This class will work with PDO behind the scenes to insert the new song. 

Here is some incomplete starter code for add-song-process.php.  Dont forget to [include](http://www.php.net/manual/en/function.include.php) or [require](http://www.php.net/manual/en/function.require.php) Song.php in this file.

```php
$host = 'itp460.usc.edu';
$dbname = 'music';
$user = 'student';
$pass = 'ttrojan';

$pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);

$song = new Song($pdo);
$song->setTitle('Radioactive');
$song->setArtistId(12);
$song->setGenreId(9);
$song->setPrice(1.29);
$response = $song->save();

// should output to TRUE
var_dump($success);

// should return the primary key (id field) of the newly inserted song record. See Tips section
var_dump($song->getId());
```

__I intentionally left off inserting playCount. It will default to 0 in the database.__

Lastly, remove the var_dump() statements and display the following message IF the record was successfully inserted.

> The song _song-title-here_ with an ID of __id-here__ was inserted successfully!

If there was a problem ($response is FALSE), then display the following error message:

> There was an error adding your song.

### Tips

* One thing to note, $response is either TRUE or FALSE. It should be the return value of $statement->execute();
* When a record is inserted using PDO, you can get the primary key of the last inserted record with $pdo->lastInsertId(). Documentation on lastInsertId() can be found [here](http://www.php.net/manual/en/pdo.lastinsertid.php).

### Submission

To submit, push this code up to the __same repository__ as Assignment 1 and email the repository URL to itpwebdev@gmail.com