Redirects, URL helpers, and Flash messages in Laravel
======

### Redirects

You can redirect from a controller or route to another route with:

```php
return Redirect::to('songs/create');
```

### url() Helper Function

Sometimes URL paths dont come out to what you want when using relative paths. It is often simpler to use an absolute path, say for the action attribute of the form. Laravel has a [helper function for generating absolute urls](http://laravel.com/docs/helpers#urls). The url() function takes the route path as the argument.  

```html
echo url('songs/create');
```

This will generate something like: localhost:8000/songs/create.


### Flash Messages

We can easily redirect to routes with flash messages in Laravel.

```php
return Redirect::to('songs/create')->with('error', 'There was an error creating the song.');
```

You can display a flash message on your view using something like:

```php
<?php if (Session::has('error')) : ?>
	<p>
		<?php echo Session::get('error') ?>
	</p>
<?php endif ?>
```