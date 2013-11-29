SQL Statements 1
================

You need to create a series of SQL statements to retreive certain data results from two databases: The hockey schedule db you created in last week's project, and in a database of DVD Titles. You will be writing SELECT statements to create the datasets for this project, and will be using WHERE and ORDER BY clauses to restrict and order the information. In particular, you will need to use WHERE statements to not only restrict the results, but to match the keys in the look-up tables to their values. 

To test your SQL statements, you can go into the Access database and create a new query in "Design Mode". Click CLOSE from the Show Table window. Then select SQL View under the View menu. Now you can type in SQL (or paste it in if you've already written it) and then click on the red exclamation point symbol to create a query from that SQL statement. 

You will NOT be posting your SQL to your class Web page, but rather will be turning them in as text in a doc or text file. Just copy all your SQL statements into a Word file, label them (like Hockey Query 1) and save that Word file to your MyDocuments folder on the itp300 server. 

### NOTE that there are EIGHT queries total in this assignment.

Note: Your hockey database probably has slightly different field and table names versus the one in my schema above. You can use your fields and tables (and therefore be able to test it) or you can use the tables and fields from my schema. 

Hockey Query 1:
Write a SQL statement that will list all of the games, with the following information: DATE, TIME, RINK, TEAM, and OPPONENT. This query will only include data columns and NOT any of the key columns. Hint: You will need to use a WHERE clause with multiple components to match up the keys of the look-up tables with those in the main (schedule) table. Note that you can use the ID fields in the WHERE clause without using them in SELECT (you can use them as criteria without having to include them in the resulting data sets). 

Hockey Query 2: 
Write a SQL statement that will list all of the games for the "Zambonis" team, ordered by the date of the games, with the following information: DATE, TIME, RINK, and OPPONENT. This query will only include data columns and NOT any of the key columns. Hint: You will need to use an ORDER BY clause. 

Hockey Query 3: 
Write a SQL statement that will list all of the games on January 21st, with the following information: TIME, RINK, TEAM and OPPONENT. This query will only include data columns and NOT any of the key columns. Hint: When you evaluate dates in Access you surround the date with pound signs (#) like #01/01/2009# (note: that assumes the date was from 2009). 

Hockey Query 4: 
Write a SQL statement that will list all of the games for the River Rats and Oilers teams that take place after January 21st, ordered by date, with the following information: DATE, TIME, RINK, TEAM and OPPONENT. This query will only include data columns and NOT any of the key columns. 

_Note: Before you start creating the DVD Titles queries you might want to take a little time to familiarize yourself with how the database is structured. Below is a schema of the tables and their relationships. Technically, you could write your SQL with just the schema as a guide (without actually having a copy of the database). To test your SQL statments for the DVD Titles, you will probably want to [download the dvd database](http://itpwebdev.usc.edu/resources/dvd.zip) (a 1.6MB file)._

 ![DVD Schema](http://itpwebdev.usc.edu/images/dvd_relationships.gif)

DVD titles Query 1: 
Write a SQL statement that will list all of the DVD titles in the Comedy genre, ordered by their release date in DESCENDING order, with the following data columns: TITLES, RELEASE_DATE, AWARD, LABEL, SOUND, GENRE, RATING, FORMAT. This query will only include data columns and NOT any of the key columns. Hint: You will need to add an ORDER BY clause and use the keyword DESC after the fieldname. I.e. ORDER BY fieldname DESC..

DVD titles Query 2: 
Write a SQL statement that will list all of the drama movies that have won awards, ordered by the award field, with the following data columns: TITLES, RELEASE_DATE, AWARD, LABEL, SOUND, GENRE, RATING, FORMAT. This query will only include data columns and NOT any of the key columns. Hint: For this go ahead and use award <> ' (two single quotes) to match records where award is NOT blank. 

DVD titles Query 3: 
Write a SQL statement that will list all of the DVD titles that have DTS sound and are by Universal, with the following data columns: TITLES, RELEASE_DATE, AWARD, GENRE, RATING, FORMAT. This query will only include data columns and NOT any of the key columns. 

DVD titles Query 4: 
Write a SQL statement that will list all of the R-rated Sci-Fi films that have status dates after Jan. 1, 2000, ordered from newest to oldest, with the following data columns: TITLES, RELEASE_DATe, AWARD, GENRE, SOUND, RATING, FORMAT. Hint: When you evaluate dates in Access you surround the date with pound signs (#) like #01/01/2009#. 

You will post/copy the text/doc file with the following 8 SQL statements to your space on the itp300 server and link to it from your classpage.php page. 