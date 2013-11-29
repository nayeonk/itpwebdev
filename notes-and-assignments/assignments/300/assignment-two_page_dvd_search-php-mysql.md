Two-page DVD search (PHP-MySQL)  
=========

Using the PHP MySQL commands, build a two-page search module. You will be building search and results pages. 

### Search

Should contain a form with a text field, 2 drop-down menus, and a submit button. The drop-down menus need to be populated by database queries (i.e. list of Genres and Ratings directly from the db):

* Every SELECT menu should be populated by queries
* Text box for "title"
* Select menu for genre
* Select menu for rating
* Submit button


### Results

* Dynamic query builds a list of movie "results" based on the three form fields from the search page
* Results are listed out in formatted columns (using divs or tables), with data/display columns for:

* Title
* Rating
* Genre
* Label
* Sound
* Format
* Release Date (formatted)


#### Advanced Version

If the above is easy and you want to get a head-start on next week's material, try creating an "All" entry in the drop-down menus from the Search page, and then in your SQL on the results page write some conditional "if" statements that only apply the genre and rating form data if the field is NOT "All".  