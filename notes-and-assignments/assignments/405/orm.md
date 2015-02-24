DVD Pages with Eloquent
=======================

### DVD Insert page

Create the route `/dvds/create`. This should display a form that posts to `/dvds` to insert a new dvd into the database. Create dynamic drop downs for label, sound, genre, rating, and format using the Eloquent ORM. When the form is submitted, a new dvd record should be created using Eloquent and the user should be redirected back to `/dvds/create`. Display a flash message on the page saying that the record was inserted successfully with a green background color.

### DVD Listing by Genre

Revisit the DVD Search page `/dvds/search` and display a list of all genres on this page using Eloquent in a sidebar. Make each genre link to `/genres/{genre name}/dvds`. When the link is clicked, you will display a page that shows that genre at the top and a list containing all DVDs in that genre. The query that fetches the dvds for this page should eagerly load the rating, genre, and label. Also, this query should have a constraint on `genres.genre_name`.

Display the following data in a view using Blade templating.

* Title
* Rating
* Genre
* Label

### Submission

To submit, push this code up to the same repository as last week named __itp405-spring2015-mvc__.

