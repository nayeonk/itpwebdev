Database Basics
===============

### Database Overview
* Lets start with a standard definition of "what is a database". Wikipedia says "A database is a collection of information that is organized so that it can easily be accessed, managed, and updated."
* You can store data in a database. One can also store and structure data in:
  * Spreadsheets
  * XML files (from complex data to rss)
  * Programming arrays/structures in a file
* All of the above forms can be used to generate dynamic web pages. But a web site needing a particular format (such as xml for an rss feed or a downloadble excel file) does not mean the data has to be natively stored (and maintained) in that format.
* Tables: Databases collect data into "tables", with each table having fields or "columns" of data, and each record of data being a "row". Confusing? The graphic to the right shows a "table" named "CDs" that contains three "records/rows", and the table has the following four fields/columns: artist, album_title, tracks, release_year. Most databases have many tables in them. For instance, a db on music might have separate tables for artists, albums, and music genres.
* Relationships: Tables that have relationships to each other (such as a table that lists artists and another table that lists albums) need to be "related". This can be done at the dbms-level (through hard-coded relationships, or it can be enforced through queries whenever the information is read from the database.
* SQL: All queries or requests to a database are written in a particular language, regardless of the dbms -- Structured Query Language or SQL. All requests to read, write or delete data (and even to create new tables) are "written" in SQL. Of course, in a visual database environment users can create queries through GUIs and the program writes the SQL "beind-the-scenes".
* Visual database environments: Most people use use visual interfaces for many database tasks. While you can use SQL to create a table, such as with "CREATE TABLE albums(album_id INT IDENTITY(1,1) NOT NULL, artist CHAR (50) NULL, album_name CHAR (100)) ;", most people would rather use a GUI to "build" a table and edit its fields. For more complicated tasks such as create queries and reports, even veteran database administrators will typically use visual db tools.

### Database Terminology
* Database management system: A program such as Access, SQL Server or Oracle that runs, administers, edits and displays databases and their information
* Database: Structured collection of data
* Table: A collection of data in a database
* Rows: individual records in a database table
* Columns: information fields that define the data in a table
* Data types: different KINDS of data such as character, numeric, date, monetary and yes/no (1 or 0, true or false, yes or no)
* Relational Database: Uses many tables that have relationships to each other
* Normalization: Process of using multiple tables to avoid repetition of data. Makes your database more efficient (less repetition AND unnecessary columns)
* Primary key: A unique identifier that allows a row (or record) to be unique and to be manipulated -- a key can be a unique field, a combination of fields, or (most often) a unique field in the table whose only purpose is to be the unique identifier. Most databases have a way to create primary keys that automatically increment a (unique) number -- in Access it is done by setting the datatype to Autonumber (whereas really it is a datatype of INT with an auto increment).
* Foreign Key: When a table has a reference to the unique identifier or "key" from another table, that is often called a "foreign key". The most popular database practice is to use the same name for primary and foreign keys (that if the primary key of the artist table is "artist_id" then naming the corresponding foreign key in the album table also "artist_id".
* Relationships: one-to-one, one-to-many, and many-to-many.
* Shared-File versus Client/Server databases: When you work on a file database, you are actually opening up the file on your local computer and manipulating it. In a client/server database your computer (the client) sends a request to the server (to add data, to read data, etc.) which in turns processes your requests and returns the results to your local computer.
* MySQL vs. Access vs. SQL Server vs. Oracle

### Access
* We will begin the course using Access as our database platform because it is a visual environment that is generally easier for people to start with than mySql. An Access database is stored in a file that you can copy and move around.
* To build database tables in Access we will generally use the visual interface for creating tables and their relationships.
* When creating tables, you will name fields and define their data types and any restrictions (such as length). You will also designate a primary key for each table. For now we will have Access automatically generate the keys. This means the keys will not consist of actual primary data (such as a social security number).
* You can use the RELATIONSHIPS screen to drag fields between tables, automatically creating their relationships. Just make sure it creates the relationship you want. These will usually be one-to-many, but make sure they are going in the intended direction.
* When first creating databases, many students find it easiest to start by drawing tables by hand (on paper or whatnot). Then to duplicate the structure (tables, fields, and relationships between them) in Access.

Sample: Tshirt database from lecture
http://itp300.usc.edu/dent/tshirts.zip