Unit Testing Exercises
======================

The following exercises are meant to give you some practice with working with PHPUnit. You can create the classes and tests in a folder by itself. You don't have to install Laravel. You may have to look up certain php functions, or ask if you are unsure.

In your project root, create a folder called _tests_ and folder called _classes_. Feel free to manually require classes into your unit tests.

### 1. Array searching test case

Use the following array data for this test case:

```php
$books = [
  [ 'title' => 'Introduction to HTML and CSS', 'pages' => 432 ],
  [ 'title' => 'Learning JavaScript Design Patterns', 'pages' => 32 ],
  [ 'title' => 'Object Oriented JavaScript', 'pages' => 42 ],
  [ 'title' => 'JavaScript Web Applications', 'pages' => 99 ],
  [ 'title' => 'PHP Object Oriented Solutions', 'pages' => 80 ],
  [ 'title' => 'PHP Design Patterns', 'pages' => 300 ],
  [ 'title' => 'Head First Java', 'pages' => 200 ]
];
```

__Test 1:__

Write a unit test to verify that $results is a subset of $books containing the following titles:

* Learning JavaScript Design Patterns
* Object Oriented JavaScript
* JavaScript Web Applications

```php
$search = new BookSearch($books);
$results = $search->find('javascript');
```

Hence, your unit test will have to search the array for titles containing 'javascript' and be case insensitive.

__Test 2:__

Let's build upon the find() method. It should take a 2nd parameter that denotes if it should search for an exact match, but again, case insensitive.

```php
$search = new BookSearch($books);

// returns [ 'title' => JavaScript Web Applications', 'pages' => 99 ]
$results = $search->find('javascript web applications', true);
```

__Test 3:__

Let's pass the find method a book that doesn't exist. When we call find(), it should return false.

```php
$search = new BookSearch($books);

// returns false
$results = $search->find('The Definitive Guide to Symfony', true);
```

### 2. Input class test case

Let's create an Input class with the same API as that of Laravel's Input class. Write unit tests for the following:

__Test 1:__

```php
$_GET['email'] = 'dtang@usc.edu';
Input::get('email') // 'dtang@usc.edu'
```

__Test 2:__

```php
// notice how i am not setting anything in $_GET here
Input::get('email') // null, see assertNull()
Input::get('plan', 'standard') // assertEquals 'standard', since it did not exist in $_GET. You are basically providing a default value here
```

Hint: see http://www.php.net/manual/en/function.func-num-args.php to determinte how many arguments are passed to a function

For test 1 and 2 for Input class, be sure to clean out the data you set to $_GET in your tearDown method. This way each test is executed with an empty $_GET superglobal array.

### Submission

When you are finished, push this code up to a new repository on Github called phpunit-lab.