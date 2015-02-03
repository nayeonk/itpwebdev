Song Insert Part 2
===

For this assignment, refactor the previous Song Insert assignment to take advantage of namespacing, flash messages, and autoloading.

To start, copy all the files from the last assignment into a new folder and create a new repository for this assignment.

### Namespaces

Refactor the following classes to use the namespace `\Itp\Music`:

* ArtistQuery
* GenreQuery
* Song

Refactor `Database` to use the namespace `\Itp\Base`.

### Flash Messages

When the form is submitted and the song is inserted, redirect back to add-song.php so that the user cannot refresh the page to trigger a duplicate song insertion into the database. Previously, you displayed this snippet:

```php
<p>The song <?php echo $song->getTitle() ?>
   with an ID of <?php echo $song->getId() ?>
   was inserted successfully!</p>
```

Instead of showing this message on the page that the form submitted to, store this message in a flash message using the [Symfony HttpFoundation Session Component](http://symfony.com/doc/current/components/http_foundation/sessions.html). You will need to download this package through Composer. Show the flash message once to the user. The workflow should be this:

1. Visit add-song.php, fill out the form, and submit.
2. I am redirected back to add-song.php with a flash message.
3. If I refresh the page, I should not be presented with a "Confirm Form Resubmission" dialog and the flash message should dissappear.

### Autoloading

Lastly, remove the require/include statements for the following classes and have them autoloaded using psr-4 autoloading.

* ArtistQuery
* GenreQuery
* Song
* Database

### Submission

To submit, push this code up to a repository named __itp405-spring2015-song-insert-page-part2__.