Two-page DVD search with Laravel  
================================

Build a two-page search module using the dvd database. You will be building search and results pages. 

### Search

Route: /dvds/search

This route should display a form with a text field, 2 drop-down menus, and a submit button. The drop-down menus need to be populated by database queries (i.e. list of Genres and Ratings directly from the database):

* Every SELECT menu should be populated by queries
* Text box for "title"
* Select menu for genre
* Select menu for rating
* Submit button

This form should make a GET request to the results page.

Create an "All" entry in the genre and rating drop-down menus. 

### Results

Route: /dvds

* Dynamic query builds a list of dvd results based on the three form fields from the search page. This should use [Laravel's Query builder](http://laravel.com/docs/queries)
* Results are listed out in formatted columns (using divs or tables), with display columns for:

* Title
* Rating
* Genre
* Label
* Sound
* Format
* Release Date (formatted) -- See http://www.w3schools.com/sql/func_date_format.asp

Use some conditional logic that only applies the genre and rating form data if the field is NOT "All".

### Models and Controllers

* Create a model called _Dvd_ to handle all your database code
* Create a Dvd controller for your 2 routes.