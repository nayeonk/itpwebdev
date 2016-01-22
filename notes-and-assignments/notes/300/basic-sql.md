### Hockey Database
http://itpwebdev.usc.edu/resources/dvd.zip  or http://willrain.net/dvd.zip


How did you design your tables? What did you set up as you primary or core data table, as opposed to your look up tables?

When building out a database and trying to determine the core/data table it is often useful to ask what is the "unique" data for each record? Data/text that repeats is usually a candidate to split off into look-up tables, but the core/changing data -- and anything closely tied to it -- will tend to be in the main table.

![Hockey Schema](http://itpwebdev.usc.edu/images/hockey_schema_ss.gif)

### General Database Tips

* When you first open a database in Access, check the Relationships screen to see how tables interrelate
* When you "create" your own relationships, if you check the box "Enforce Referential Integrity" then when you enter data into foreign keys it WILL NOT LET YOU enter in IDs that do not exist in the corresponding Primary Key (in the look-up tables).
* When you open up a new db (in Access) see if there are any "Queries" in the db. If so they will often give you different perspectives on the data in the db, and usually consist of full data (no IDs) across all of the tables (data from all tables brought into one place). How would you do that for your dbs (bring data from different tables into one place)? With SELECT statements, which will be the core of SQL Part 1

### Lecture exercise:

Create a database for a "DVD movie database":

Look at the sample of a movie/dvd enter screen to the right:

What fields are needed?
 
What look-up tables are needed?
 
What datatypes for each field?
 
So what might a schema look like? [Schema](http://itpwebdev.usc.edu/images/dvd_relationships.gif)


![DVD Titles](http://itpwebdev.usc.edu/images/dvd_titles_form.gif)

### SQL
* Structured Query Language
* Known by all major DBMS
* Can be used directly inside a DBMS, as well as to communicate between an application and an external DBMS
* Can read data, insert data, create new data rows, and delete data rows with SQL
* You can even create new tables with SQL, but we are more interested in the core SELECT, INSERT, UPDATE and DELETE functions of SQL
* SQL is case-INSENSITIVE, although most SQL programmers find it easiest to use UPPER CASE for all SQL statements and arguments, and lower case for names (columns, tables, etc.)

### SQL SELECT statement examples: 
(simple)

```sql
SELECT fname, lname, email 
FROM people 
```

(complex -- titles starting with A and lookup data) 
      
```sql
SELECT title, genre, rating 
FROM tiles, genres, ratings 
WHERE genres.genre_id = titles.genre_id AND ratings.rating_id = titles.rating_ID AND titles LIKE 'A*' 
ORDER BY titles
```

### SELECT

* The SELECT statement asks the DBMS to return information.
* SELECT is followed by the column/s from which you want data -- multiple columns are separated by commas (but not ended by them)
* The asterisks character (*) represents ALL -- so if you say "SELECT *" you are asking for data in ALL columns.
* All columns in the whole database? No, just from the tables you specified (see FROM below).

### FROM:

* You must not only tell the DBMS which columns of data you want to return (using SELECT), but also from which tables
* FROM command specifies the table/s you want to extra columns of information from -- like with columns, if you want to retrieve information from multiple tables you separate the tables with commas

### Column name conflicts in SELECT statements:

* OK, but what if the same column name exists in two tables, and you used FROM to specify both tables? How does it know which one?
* If you had two columns with the same names, such as 'ID', and your SELECT statement asked for ID (and both tables were specified in the FROM clause), then you would get a SQL error.
* You can SCOPE OUT column names to their tables. For instance, while you can say "SELECT ID, name FROM people" you can also specify a column by its table, such as "SELECT people.ID, name FROM people". In other words, when we only list a column name (without its table preceding it), since you will specify the table in the FROM clause the prefix is not needed. But in cases where there may be confusion as to which column you are referencing, you can scope out the full table.column name.

### WHERE:

* OK, but SELECT statements so far are returning all rows of data (in the specified columns). How do we restrict the query to certain parameters?
* The WHERE statement restricts the returned information to data that matches criteria. You follow a WHERE statement with a condition, such as person = 'Patrick'. Notice that 'Patrick' is in quotes.
* To compare strings (text datatypes, for instance), you must specify the criteria in quotes. You do not need quotes to compare numeric data.
* Operators: Besides =, you can also check for greater than (>), less than (<), not equal (<>) and combinations (<= for less than or equal and >= for greater than or equal). You can also check if a column is empty of data (IS NULL) and you can check for values that fall between two numbers ( BETWEEN ).
* Multiple clauses: You can string together multiple arguments for WHERE using the AND or OR operators to search for multiple criteria (exclusively or in either/or fashion).
* So "WHERE name = 'Patrick' AND age = 31" would require both conditions to be met, whereas "WHERE name = 'Patrick' OR age = 31" would return recordsets in which either condition was met.
* Parentheses: If you string together four sections of your WHERE clause, mixing OR and AND operator, in what order will it evaluate them? Well, technically all AND clauses are evaluated first, and then OR ones. But we don't have to worry about that because we are always going to use parentheses to group WHERE conditions -- just like in mathematical equations.
* So "WHERE (age = 31 AND name = 'Patrick') OR (age > 32)" would return rows from the database in which the age is greater than 32 or the age is equal to 31 and the name is equal to Patrick.
* Enforcing Table Relationships: Make sure that you restrict/ENFORCE relationships in tables with the where clause. In most cases, if you select more than one table (in the FROM clause of a SELECT statement), you need to tell SQL how to relate the tables (a more intermediate technique is of course to use JOINS). So for instance, if I pulled data from three tables (lets say one primary data table and two look-ups), I need to have two WHERE clauses that match the foreign keys in the data table to the primary keys in the look-up tables. An easy device for remembering this (which will work in most instances) is if you take the number of tables in your FROM clause, subtract one, and that is how many foreign-primary key clauses you need in the WHERE clause. So if there is one table, one minus one is 0 -- none needed. Two tables, one needed. Eight tables, seven needed.
* NOTE on dates in Access: In the Access dbms it is best to surround the date with pound signs. So for instance, to match data in which the thedate column is set to Jan. 1, 2000 you would use "WHERE thedate = #1/1/2000#"

### ORDER:

* So now we are beginning to create a decently useful recordset from the information in a database. But that data is not in any particular order.
* The ORDER clause organizes the returned rows of information by a value from a column. So "ORDER BY name" would organize the returned rows of data by their name values.
* By default, data is sorted in ascending order. But you can specify the opposite organization by adding DESC to a ORDER clause. So, for instance, "ORDER BY age DESC" would sort the returned rows of information by their age value from highest number to lowest.
* Like with SELECT and FROM, you can have multiple conditions by separating them with commas. For instance, "ORDER BY age, name" would organize the rows of data by their values in the age column, and in cases where multiple rows had the same age value, those rows would be sub-sorted by their name values.

### LIKE operator and wildcards:
* Besides the = operator, you can also use the LIKE operator to set criteria that includes wildcards like %.
* Wildcards are characters that match anything. For instance, 'Pat%' would match Patrick and Pat and Pattern.
* So WHERE name LIKE 'Pat%' would set up a condition that would match the above examples.
* LIKE is very useful for text searches. Sometimes it is used to catch misspellings (so Win* would match Winnebago and Winebago and Winnabago). It can also be used to find a word in the middle of a phrase. So '*Pat*' would match any text value that included the character string 'Pat', including Pat, Patrick and spat. To filter for a whole word, you would use '* pat *', where spaces are included before the wildcard characters.
* NOTE: Different DBMS can use a different SQL character for a wildcard. Some will use *, some will use % (Microsoft's Access DBMS uses the asterisks (*)). Just keep straight the use of the * as a wildcard in two different contexts -- in SELECT statements to represent 'all' fields/columnsand its use in WHERE clauses with LIKE to represent missing/universal character sets or patterns.

### Testing SELECT statments:

To test a SELECT statement in an existing Access database open the db and then go to Create > Query Design (right hand side of the top button options in Access2007 / or Query tab, Create query in Design View in older Access). Close the Show Table window. Then click on the SQL button in the upper left hand corner of the tool bar. That should leave you with a text window with SELECT; in it. 

Simply type/paste your SELECT statement in there, then press the "!" Run button. 

If there are any problems with your SQL Access will tell you. If you list a table that does not exist, it will give you an error to that effect. if you list a field/column that does not exist, you will get a prompt of "Enter Parameter Value". If you SELECT statement is valid it will actually display the data (the "output") of your SELECT query. If you end up in a different view (not the SQL view) you can click on View > SQL to get it back. 
