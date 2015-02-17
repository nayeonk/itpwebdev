Working with Forms
==================

### Forms

If you are working with forms in Laravel 5 and the POST verb, you will need to include the following hidden field. Laravel requires this to prevent CSRF attacks.

```php
<input type="hidden" name="_token" value="{{ csrf_token() }}" />
```

### Data Validation

http://laravel.com/docs/5.0/validation

```php
$validation = Validator::make($input, [
	'title' => 'required',
	'artist_id' => 'required|integer',
	'genre_id' => 'required|integer',
	'price' => 'required|numeric'
]);

$validation->passes(); // true or false
$validation->fails(); // true or false
```

### Redirecting with Old Data

http://laravel.com/docs/5.0/requests

From your controller:

```php
return redirect('/songs/new')->withInput();
```

In your view:

```php
<input name="title" class="form-control" value="{{ Request::old('title') }}">
```

### Redirecting with validation error messages

In your controller:

```php
return redirect('/songs/new')->withErrors($validator);
```

In your view:

```blade
@foreach ($errors->all() as $error)
	<p>{{ $error }}</p>
@endforeach
```

