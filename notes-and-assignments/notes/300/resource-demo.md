Resource - Demo: Create a db
===========
*Video walk-through of creating a Database in Access*

Notes on the demo for Creating a database and tables in Access.

To start the demo, click here (Note: Need the new browser window to be 1024 x 800 to view the demo correctly).
So we start by running the Access application or DBMS (database management system).

It start with a blank screen, a default option or concept of starting a Blank Database. Notice on the right you name the new database file and then hit Create to continue.

Notice it start you right away in Table mode. BUT, it starts in datasheet (data entry) and we want to be in Design mode to start.

Now, it is always better to plan or draw out on paper the database before you start creating it. The normalization of moving fields to look-up tables should be planned out ahead of time.

Ok, so when I switch views to Design mode notice it prompts me to name the table.

Now I am going to take the first field and make it my primary key for this table. So besides naming it I am going to make sure it is set the datatype to AutoNumber and to right-click and set that field as the Primary key. Note the yellow "key" icon that appears on the field.

Ok then I am going to write out the rest of the fields:

Song table:
-------------------------
SongId
SongName -- text
AlbumID              -- number
SongLength -- text (could be other types too)

Ok, now I am going to save that and create my next table, and this time I am going to make sure I am starting in "Table Design" mode.

So first thing i will do is name as set the key field as type AutoNumber and toggle it as the primary key for this new table.

Now before I write out more of the table, I will click the Save button, which will prompt me to name this table.

Ok, so lets look at the rest of this table:

Album Table:
-------------------------
AlbumID
AlbumName
ArtistName
TrackCount
ReleaseDate

Ok, so now I need to create the relationships between the two tables -- to tie the tables together with a key. Again, the "first" or main ID of a table is its primary key or PK. But if a table has an ID/key to ANOTHER table (such as AlbumID in the Songs table), that is called a foreign key or FK. So we generally create out relationships by tying a foreign key from one table to its equivalent primary key in another.

So in the relationship window, we are going to drag foreign to primary key -- dragging TO the primary key.

If you did that in the proper direction, you can just hit Create and Access will automatically create the proper one-to-many relationship between the tables, in the the proper direction.

Now at this point, if we were to continue, we would recognize that the ArtistName field in the Album table should really be split off into ANOTHER table, a look-up table, of JUST artists.