PHP Data Objects
================

Create search and results pages using the dvd database and PDO. Name your search page __search.php__ and your results page __results.php__.

### Search page

* Your search page should have a search field for the dvd_title field using an HTML input of type 'text'.
* This page should submit to __results.php__ using the GET method

### Results page

Your results page should display what the user searched, like this:

"You searched for 'em':"

Display the following fields on the results page in divs or an HTML table

* title
* rating
* genre
* format

When joining tables in your query, use the INNER JOIN syntax. You should have 3 joins.

Also, when searching for a DVD title, be sure to use the LIKE operator so that if I type in "Die" in the search form, all movies that contain "Die" in the title will show up (like Die Hard).

If no results are returned from the query, display a message to the user saying Nothing was found with a link back to the search page.

### Database Connection

```php
$host = 'itp460.usc.edu';
$dbname = 'dvd';
$user = 'student';
$pass = 'ttrojan';
```

### Styling

Lastly, style your pages a little bit so that they are organized and somewhat presentable.

### To submit

Create a repository on Github called 'pdo-dvd' and push your code up to it. Email the repository URL to itpwebdev@gmail.com for submission.

If you forget the instructions to push your code to Github, remember that if you create a new repository on Github, they will give you the commands to enter in.
