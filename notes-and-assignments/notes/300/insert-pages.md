Creating INSERT web pages
=========================

### Dynamic INSERT statements:

Ok so a normal INSERT statement builds a list of fields, and then the value for those fields. Such as 

```sql
	INSERT INTO dvd_titles (title, genre_id) 
	VALUES ('Die Hard',1)
```

In a dynamic INSERT statement, just like in a dynamic SELECT statement, you are simply replacing static data with variables (generally form variables). So, for instance, the above statement might become (in php):

```php
$sql = INSERT INTO dvd_titles (title, genre_id) VALUES ('" . $_REQUEST["title"] . "'," . $_REQUEST["genre"] . ");
```

One thing that is tricky to remember is to include all of the syntax punctuation in the statements, such as the parentheses, commas and single quotation marks (around string data).

BEST PRACTICE when building a dynamic INSERT statement, build it in a variable called $sql for example, but BEFORE you ever try to submit it to a database, echo it out to the screen and read through it to make sure you have compiled a valid statement, and especially check that it is not missing any SQL punctuation and does not have any syntax errors