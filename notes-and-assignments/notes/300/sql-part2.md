### SQL Review:

```sql
	SELECT
	FROM
	WHERE, =, OR, AND, LIKE and % (* in Access)
	ORDER BY
```

### Creating databases for sites:

* www.rvsearch.com vehicle listings site
* Looking at a detailed vehicle listing:
* What fields are needed?
* What look-up tables are needed?
* What kind of SQL query would drive the search page?

### SQL INSERT:

* Basic tag to enter a row of data into a database
* Three components:
* Define what table to insert data into
* Define the columns (fields) into which data will be placed
* Define the data to be inserted

#### Example:

```sql
	INSERT INTO Contacts
	(fname, lname, relationship, phone, comments)
	VALUES ('patrick','dent','instructor','2138211400',NULL)
```

#### Common INSERT mistakes:

* Different number of columns than data -- i.e. you listed a column that you did not list data for, or you listed data for a column you forgot to name
* Close all your quotes
* Always include commas between values and column names
* Never put a comma after the last item in a list
* Commas are located between quotes, so to speak, when you are insert string (text) data
* Whether you use quotes does not depend on if the data you are inserting is numeric or text, but according to the datatype of the column (field) you are inserting into (string/text, numeric, time/date, etc.)
* Use NULL if there is no data to insert. Do not insert empty data (') as that will often result in SQL errors

While you do not have to insert data into every column in a table with an INSERT statement, you will return an error if you omit a column that requires data. I.e. in order to not put data into a column, that column must either allow for NULL values or have a default value (which will then be used)

There is an INSERT variation called INSERT SELECT that allows you to take rows of data from one table and insert them (duplicate them) as rows of data in another. This is useful, for instance, in archiving records. That is one instance where you might use a WHERE clause in an INSERT statement

### SQL UPDATE

* Similar to the INSERT tag, except it alters the data of existing row/s. This means you will almost always need a WHERE clause (so that you don't overwrite data to every row in the db)
* Like INSERT, you will define the columns and data, but with UPDATE you list them together in pairs.

#### Example:

```sql
	UPDATE Contacts
	SET Fname='Patrick', Lname='Dent', Relationship='Instructor', Phone='2138211400', Comments='Teaches ITP499 in Spring 2001'
	WHERE id=8
```

#### Notes:

DO NOT forget the WHERE clause. Forgetting to put a WHERE clause into an UPDATE statement is a quick way to (inadvertently) wipe all the data out of a table

### SQL DELETE

DELETE statements are the simplest in SQL, and the most dangerous

If you thought including the WHERE clause was important in UPDATE statements, imagine what the consequences of leaving it out in a DELETE statement

#### Example:

```sql
	DELETE FROM Contacts
	WHERE id = 8
```

A good tip from the book is that before you execute a DELETE statement (and in some cases an UPDATE), test to make sure you have the correct row (record) by running a SELECT statement first. For example, in the above sample I could have first run 'SELECT * FROM Contacts WHERE id=8' and viewed the results of that query, to make sure I was deleting the correct row of data.

If the db you are working on has 'enforce referential integrity' active (which is a good idea), then you will not be able to delete rows of data if other data is related to it. For instance, in the hockey db if you had games scheduled, which used a look-up table to match the value of 'Bay Harbor', and then you tried to DELETE the 'Bay Harbor' entry in the look-up table, you would return a SQL error because the rows of data in the main schedule table are dependent on that row (as a look-up).

### SQL Views:

Although Access treats them the same, views are basically queries that you can treat like tables. For instance, imagine you created a query that matched all your look-up fields, and only selected the look-up data (and not the ID) so that the resulting information was intelligible' data

Once you defined that as a view, you could then request information from it as if it were a table.

#### Example1: The following defined as view 'DVDinfo':

SELECT titles, status, award, label, sound, genre, rating, format
FROM dvd_titles, format, genre, label, rating, sound
WHERE
	label_id=label.id AND
	format_id=format.id AND
	genre_id=genre.id AND
	rating.id=rating_id AND
	sound.id=sound_id

#### Example2: Query to view DVDInfo

```sql
	SELECT * from DVDinfo
	WHERE title LIKE '%Casablanca%'
```

Notice how much more convenient the above is? That you define your 'consumer information' in a view. And then when you want to retrieve data your queries only need to worry about the particular row/s you want (SELECT * and a WHERE clause), and not pulling different columns from different tables or matching keys from different tables.

In this class, we will generally not 'create views through SQL (i.e. use CREATE VIEW statements), but will define views in the database (in SQL) and then run queries against those (in SQL).

### Calculated Fields (reformatting data):

When selecting data, you can do more than just retrieve and display data by columns  you can also combine data into new columns in the resulting query output. You can create calculated fields  with text/string data types concatenating fields, and with numeric data types adding, subtracting, multiplying and dividing values

You add string columns by putting a + in between them. You can also insert original string data by adding a string in quotes. Such as 'SELECT fname + ' has a telephone number of ' + phone'. But that offers a problem, as what is the name of the resulting output column? It is neither fname nor phone.

Aliases: When selecting straight columns of data or calculating fields, you can change the name of a column of data in the query output by adding AS NAME after the column. For instance, 'SELECT fname AS Firstname' or 'SELECT fname + ' ' + lname AS FullName'

You can also manipulate text fields, such as trimming off extra spaces or transforming capitalization

Some SQL text-manipulation functions:
* LENGTH OR LEN*
* TRIM*, LTRIM* and RTRIM*
* UPPER and LOWER
* SUBSTRING, LEFT and RIGHT

#### Example:

```sql
	SELECT titles + ' has a ' + rating + ' rating.' AS ratingcomment, 
		LEN(titles) AS titlelength,
		TRIM(titles) as trimmedtitle
```

While the basic SQL statements are supported by all major dbms, functions have different levels of support among different ones, including using different names for functions or not supporting them outright.

