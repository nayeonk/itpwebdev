***Note: For the RV Database you do NOT need to enter any actual data into the tables you create.*** 

This project has two parts to it. The first is to work out the database structure for the vehicle listings at RVSearch.com. You will save the new RV database in your folder on the ITP300 server. The second part of your homework is to write out a series of SQL statements according to the specifications provided. You will write two SQL statements for RVSearch, and the rest will be for the [DVD titles database] (/resources/dvd.zip) you used in last week's project. 

*You will have a number of assignments this semester that are similar to Part 1 of this project. They are intended to simulate the kind of tasks that DB Web developers are faced with in the industry. This assignment is a little easier, as you are being shown pages that are based off of an existing database, which makes it easier to write a database to match them. Next week you will have a similar assignment except you will be basing your Web database off a written document.*

-------


### Part I: RVSearch.com 

You must create a database for the site we discussed in class, RVSearch. Look at the vehicle detailed listings to see what fields exist. Your database must include the following fields: **vehicle number (table ID/key), order number, year, vehicle make, vehicle model, price, mileage, length, vehicle type, fuel type, state the vehicle is in, general description, when the vehicle was listed, and whether the vehicle is equipped for the handicapped, whether it has a slide-out, whether it can be a tow vehicle, whether it is non-smoking, and whether it is sold.**

You will need to determine the data types of the above field (text, numbers/monetary, date/time, yes/no, etc.) and which need to be look-up IDs to look-up tables. *( __Hint1:__ yes/no fields only have two possible states, so they should be easy to pick out from the list of data columns above. __Hint2:__ You can immediately determine SOME of the look-up fields by going noticng some of the text drop-down fields from the sample search screen below -- however, not every one is (Price is not a look-up values, i.e. rv listings have finite price data.)* 

You will build an Access database for the above, and create the relationships between the main table and its look-up tables. 

Part 1A: The first part of the assignment is your completed relationship screen. I.e. that you have create the tables and fields, and properly hooked them together. **This is part 1A of your assignment.**

Part 1B: When you created your fields, you should have set each one to the proper DATA TYPE (text, date, numeric, true/false). For Part 1B you will be graded on the field structure (fields and data types) of your "main" data table. **This is part 1B of your assignment.**

Then, write a view for RVSearch that combines the data fields from your main table with the look-up values from the look-up tables that only contains data fields and NOT key values. You can either save this as a "query" in your access database or paste the SELECT code for it in a document. **This is part 1C of your assignment.**

Finally, you will write a SELECT statement for your database that will search for the criteria from the screenshot below. One requirement is you must use a wildcard and the LIKE operator for the model field. *( __Hint:__ Use the view from 1C instead of the actual tables. That way your select can be simpler with only a complicated WHERE clause.) You can save this SELECT statement as a query in your database, or just paste the SELECT code into a document.* **This is part 1D of your assignment.**

![rvsearch_search_criteria](/images/rvsearch_search_criteria.gif)

------

### Part II: DVD titles 

![rvsearch_search_criteria](/images/dvd_relationships.gif)


*For the second part of this project you will be writing INSERT, UPDATE and DELETE statements for the DVDTitles database from last week. Testing insert, update and delete statements does not work too well directly in Access, so you will probably not worry about testing the queries. You are welcome to try testing your statements in the actual Access database, just know that they may alter (mess up) the data in the db, and may not always work. __For this half of the assignment (the next four items) you will be turning in your statements in text form in a document.__ Although the db schema is provided above, you will need to have a copy of the database to look up values (the underlying IDs to look-up values).*

**2A:** Add a new data row (record) to the database for "Traffic, released on 6/1/2001, rated R, Drama, by USA Films (Note: USA Films is not currently an entry in the label table. So go ahead and open up your Access DVD db, open up the label table, and enter in a new record for "USA Films". That new record should have an ID of 166, which you can use for label\_id), Fullscreen, Widescreen, Dolby Digital 5.1, Academy award for best picture in 2000". *( __Hint:__ You will need to open the database to find out (numeric) look-up values)*

**2B:** Change the information for the film "Zero Effect" so that the publisher (label) is Columbia Pictures, its genre is Drama, and it is Fullscreen only.

**2C:** Delete the title "Major League 2". 
