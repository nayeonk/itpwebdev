DVD Crud with Eloquent
======================

### DVD Search

Take your previous DVD Search page assignment, and modify the query to use Laravel's ORM instead of the Query Builder. Be sure to:

* define relationships for related models / lookups (rating, sound, genre, label, format)
* only display 30 records on the page

To keep things simple, you can display _dvds.release_date_ as the raw mysql datetime format.

### DVD Insert page

Create the route __GET /dvds/create__. This should display a form to insert a new dvd into the database. Create dynamic drop downs for label, sound, genre, rating, and format. Use Eloquent to populate these select menus.

Sometimes URL paths dont come out to what you want when using relative paths. It is often simpler to use an absolute path, say for the action attribute of the form. Laravel has a [helper function for generating absolute urls](http://laravel.com/docs/helpers#urls). The url() function takes the route path as the argument.  

```html
<form action="<?php echo url('dvds') ?>" method="post">
```

This will generate something like : localhost:8000/dvds.

Next, create the route __POST /dvds__. This should add a new record in the dvds table and redirect the user back to __GET /dvds/create__. You can redirect from a controller or route to another route with:

```php
return Redirect::to('dvds/create');
```

Add a flash message and display on the page saying that the record was inserted successfully.

### Optional: DVD Listing by Genre

Make each record's genre a link to __GET /genres/{id}/dvds__ where {id} corresponds to the genre ID. When the link is clicked, you will display a page that states that genre at the top and a list containing all DVDs of that genre.

1. First find the Genre model based on the ID.
2. Next, define a hasMany() relationship to display the many DVDs that a genre model has.

If you miss a point elsewhere in the assignment but do this optional part (and it works), I will give 1 point back.


### Submission

When you are finished, push up this code to Github and email a link to itpwebdev@gmail.com. You can push to the same repository on Github for all Laravel assignments.

If you are using the same framework installation for class demos and assignments, you might have to deal with managing 2 database connections. I'd probably recommend you keep 2 copies or Laravel installed, one for hw and one for class demos.

