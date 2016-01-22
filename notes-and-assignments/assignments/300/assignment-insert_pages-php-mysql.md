DVD Insert Pages
================

Create an insert page in which a user can add a new DVD film. You do NOT have to give them award and release_date fields. You DO need to give them a text box for title and drop-down menus for genre, rating, label, format and sound. 

Your first page will be a form with the above fields for them to fill out. That page should submit to a second page that creates a dynamic sql insert statement, using the fields from the form, and then submits that sql to the database. The page should then link the user back to one of your dvd search pages so that they can search for and verify the new title. 

### Some notes/tips:

* Make sure your drop-down menus use the IDs as the value of the options, NOT the text values. I.e. . That way your INSERT statement on Page 2 can properly focus on just the dvd_titles table (where it inserts data into titles, genre_id, format_id, sound_id, label_id and rating_id)
* Your five drop-down menus DO need to be outputs of database queries (not just copied html of hand-coded select menus)
* In your INSERT statement, make sure you get the fields in the second clause (the values) in the same order as in the first clause (the field list).
* In your INSERT statement, make sure you put single quotes around the titles. The other data, because they are numeric IDs, of course do not need quotes.
* When you build the INSERT statement inside a variable (such as $thesql) it is HIGHLY recommended that you first echo the variable out to the screen to verify the syntax et al before you ever try to submit that sql to the mysql database.
 