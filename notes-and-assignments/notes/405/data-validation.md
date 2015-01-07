Data Validation 
===============

### Laravel's Validator class

Laravel provides a great Validator class that makes data validation extremely simple and readable. It is as simple as defining a bunch of validation rules, passing all of your user input to the Validator class, and it will tell you if it passes validation with automaticly generated error messages. Can't get any easier than that!

```php
$validation = Validator::make(Input::all(), [
  'title' => 'required|min:4',
  'price' => 'required|numeric'
]);
```

The first argument is the data you want to validate. You can pass in an associative array or you can call Input::all() which will turn all user input into an associative array where the form element names correspond to the associative array keys.

```php
$validation = Validator::make([
	'title' => Input::get('title'),
	'price' => Input::get('price')
], [
  'title' => 'required|min:4',
  'price' => 'required|numeric'
]);
```

### Where to put validation logic?

A great place to put data validation logic is in your models. This way you can reuse your validation logic in several places such as a form or your own API. One approach is to create a static validate method:

```php
class Song extends Eloquent {

	public static function validate($input)
	{
		return Validator::make($input, [
		  'title' => 'required|min:4',
		  'price' => 'required|numeric'
		]);
	}

}

```

Then in your controller you can do:

```php
public function createSong()
{
	$validation = Song::validate(Input::all());

	if ($validation->passes()) {
		// do X Y Z
	}
}
```

Remember, your models should never access user input from the request directly. That is the responsibility of the controller.

### Redirecting with error messages

```php
return Redirect::to('songs/create')->with('errors', $validation->messages());
```

OR

```php
return Redirect::to('songs/create')->withErrors($validation);
```

These error messages are __flash messages__. We can access them on our view:

```php
<?php if ($errors->has('title')) : ?>
	<p>
		<?php echo $errors->first('title') ?>
	</p>
<?php endif ?>

<?php if ($errors->has('price')) : ?>
	<p>
		<?php echo $errors->first('price') ?>
	</p>
<?php endif ?>
```

Notice how we didn't have to bind $errors in our GET route to songs/create? Shouldn't it be undefined if we make a GET request to this route? As stated in the Laravel documentation:

> However, notice that we do not have to explicitly bind the error messages to the view in our GET route. This is because Laravel will always check for errors in the session data, and automatically bind them to the view if they are available. So, it is important to note that an $errors variable will always be available in all of your views, on every request, allowing you to conveniently assume the $errors variable is always defined and can be safely used. The $errors variable will be an instance of MessageBag.

### Redirecting with old input

You likely want to repopulate your forms with the bad data so that users don't have to retype in everything again. We can flash user input when we redirect.

```php
Input::flash();
return Redirect::to('songs/create')->withErrors($validation);
```

OR

```php
return Redirect::to('songs/create')
	->withInput()
  ->withErrors($validation);
```

Then, in our HTML form controls, we can set the value to the old input data (flash data):

```html
Title: <input type="text" name="title" value="<?php echo Input::old('title') ?>">
```

[Visit the Laravel Documentation for more on the Validator class](http://laravel.com/docs/validation)

