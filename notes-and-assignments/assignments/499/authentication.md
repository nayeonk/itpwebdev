Authentication
==============

You will be creating an authentication system where users can create accounts and login to a dashboard. See the __users__ table in the music db. There is one user account already set up:

u: student
pw: laravel (encrypted)

The password is encrypted using the MySQL SHA1() function. This is how I created it:

```sql
INSERT INTO users (username, password)
VALUES ('student', SHA1('laravel'))
```

### login.php

Create a form with username and password inputs. It will submit to login-process.php.

### login-process.php

```php
	$authentication = new ITP\Authentication\MySqlAuth($pdo);

	if ($authentication->attempt($user, $pw))
		Redirect::to('dashboard.php');
	else
		Redirect::to('login.php');
```

* If a user navigates directly to this file without going through the form, it should redirect back to login.php.
* $authentication->attempt() should use pdo to check if the user exists and return TRUE or FALSE. If the attempt is successful, it should set the following data to the session:

* $_SESSION['user'] // user
* $_SESSION['lastLoggedIn'] // date

Also, it should update the users.last_login column to the current datetime.

### dashboard.php

The dashboard is a page that only authenticated users can access. If I navigate directly to this page and I am not logged in, I should be redirected to login.php. Create a class called Auth with a static check() method that checks if a user logs in.

```php
	Auth::check() // if a user is logged in, returns TRUE. Otherwise, false
```

Place some dummy HTML content on this page so that I can easily identify it as a dashboard.

### register.php

Revisit the login.php page and create a link to register.php. This page will contain a form where users can create an entry in music.users. This form should have the following input fields:

* username - type text
* password - type password
* confirm_password - type password

This form will submit to register-process.php

### register-process.php

This page will take the form submitted data and create a new user.

* password and confirm_password must equal, otherwise the account should not be created
* The user's password should be encrypted using MySQL's SHA1() function
* After the account is created, display a message stating that the user was created successfully with a link to the login page.
* If the username already exists, display a message stating that the username already exists and a link back to register.php.

```php
	// check if form data exists, otherwise redirect to register.php

	
```

### Other Requirements

* Remember, there should only be 1 database connection per request. Create a file called db.php like in previous assignment and use that same connection across pages
* Classes should be in their own file and their namespace should map to the directory structure.

### Submission

To submit, push this code up to the __same repository__ with a folder called PHP-Auth-A3 and email the repository URL to itpwebdev@gmail.com

