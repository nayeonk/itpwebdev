Song Insert Page
=========================

In this assignment, you will be creating a form that allows you to insert new songs into the __music__ database.

### The Classes

The classes you will be creating in this assignment are:

* ArtistQuery
	* getAll() - Returns all artists from the artists table ordered by the artist name
* GenreQuery
	* getAll() - Returns all genres from the genres table ordered by genre name
* Song
	* setTitle($title) - sets a title instance property
	* setArtistId($id) - sets an artist_id instance property
	* setGenreId($genre_id) - sets a genre_id instance property
	* setPrice($prie) - sets a price
	* save() - performs the insert
	* getTitle() - returns the song title
	* getId() - returns the id column of this song in the database (more on this below)

`ArtistQuery`, `GenreQuery`, and `Song` should all inherit from the `Database` class created in class and reuse that same database connection. That is, on any given page, only 1 database connection should ever be created.


### Database driven HTML form and processing

Create an HTML page __add-song.php__ with the following form fields:

* Title - a text box
* Artists - A dynamically created select menu containing all artists in the database ordered by the artist name. Each `<option>` tag should have the id field as the value i.e. `<option value="9">Lorde</option>` which will correspond to the foreign key artist_id in the songs table.
* Genre - A dynamically created select menu like the artists menu
* Price - text box

This form should submit to itself. When the form is submitted, take the user input, create a `Song` object using the class you created, and insert the song into the database by calling the `save()` method.

Lastly, use the following snippet to display the inserted song's title and id.

```
<p>The song <?php echo $song->getTitle() ?>
   with an ID of <?php echo $song->getId() ?>
   was inserted successfully!</p>
```

When you insert a record into the _songs_ table, it will create the primary key automatically (the id field will be autoincremented). When a record is inserted using PDO, you can get the primary key of the last inserted record with $pdo->lastInsertId(). Documentation on lastInsertId() can be found [here](http://www.php.net/manual/en/pdo.lastinsertid.php).

### Submission

To submit, push this code up to a repository named __itp405-spring2015-song-insert-page__.