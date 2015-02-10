Two-page DVD search with Laravel  
================================

Build a two-page search module using the dvd database. You will be building search and results pages. 

### Search

URL: `/dvds/search`

This route should display a form with a text field, 2 drop-down menus, and a submit button. The drop-down menus need to be populated by database queries (i.e. list of Genres and Ratings directly from the database):

* Text box for the dvd title
* Select menu for genre populated from the genres table
* Select menu for rating populated from the ratings table
* Submit button

This form should submit to `/dvds` using GET.

Create an "All" option in the genre and rating select menus. If All is selected, that field is basically ignored.

### Results

URL: `/dvds`

This route is responsible for taking the data from the search form, querying for dvds based on the user's search criteria, and displaying the results. This should use Laravel's query builder. The results should be listed out in formatted columns (using divs or tables), with display columns for:

* Title
* Rating
* Genre
* Label
* Sound
* Format
* Release Date (formatted) -- See http://www.w3schools.com/sql/func_date_format.asp

Use some conditional logic to build up a query using the query builder that only applies the genre and rating conditions if the field is __NOT__ "All".

Also, display the user's search criteria at the top of the page.

### Models and Controllers

* Create a model called _Dvd_ to handle all code for accessing the database using the query builder. This is the only place that should access the query builder.
* Create a Dvd controller for your 2 routes with the following methods:
	* `/dvds/search` should map to a method called `search` on the controller
	* `/dvds` should map to a method called `results` on the controller
* If a user navigates directly to `/dvds` without going through the form (no query string data), it should show all dvds.


### Styling

Lastly, style your pages a little bit so that they are organized and somewhat presentable. Feel free to use something like [Bootstrap](http://getbootstrap.com/).


### Submission

To submit, push this code up to a repository named __itp405-spring2015-mvc__. For all Laravel assignments going forward, you will be pushing to this repository so you don't have to install the framework each time.