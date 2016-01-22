Edit Forms and Update Pages
===========================

For this assignment you CAN create your edit pages EXPECTING an ID to be passed into the page. But that does mean you will have to manually type in the record ID into the url as a query string variable (url variable) for the record you want to edit.

Note: If you want, you can start with a drill-down workflow where you have a list of records with Edit links. When you click on an Edit link it will take you to the edit page with the correct record ID in the URL.

### Edit page

* Write a trap to stop if the record's ID is not present (was not passed) into the page. This can either be a redirection to another page (like the starting page) or a die statement with some message
* Write SQL to pull a dvd record for the ID that was passed through the URL
* Create a form that:
	* loads the title and award information into text boxes
	* the dvd_titles_ID field into a hidden box
	* has drop-downs select menus for the genre, format, sound, label and rating fields including having the current value "selected".
* The edit page form will POST to an update page where the actual update query takes place.
  
### Update page

* Write a trap to stop if the dvd_titles_ID was not passed into the update page.
* Write the sql to create the update statement out of the form data from the edit page that was passed in.
* Write/commit the data to the database.
* Display a message to the user that their film was updated.

When you are all done, you should be able to go to the edit page, edit a dvd title record, hit submit and verify that the data changes were committed/made.

 