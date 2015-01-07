Where do we put this?
=====================

### Part 1

Revisit your DVD insert page and add data validation using Laravel's Validator class. This validation should be placed on the dvd model. Your controller should merely call the validation method, pass it user input, and get back, a result.

Dvd creation validation rules are as follows:

* label, genre, sound, rating, and format are required and integers
* a dvd must be alpha-numeric and at least 3 characters long

If validation fails, display errors on the dvd create page (flash messages). Also repopulate the form with the old input.

If validation passes, redirect to the dvd create page with a success flash message.

### Part 2

Pick an API of your choice. Create search and results pages that display data from that API on a page in your Laravel application. You can look for APIs at http://programmableweb.com. Do not use the API that we used in class. Your search page should have at least 1 form field to allow for at least 1 aspect of the API to be searched. For example, if I were doing iTunes API, you could create a form where I could type in an artist, I could hit search, and I would be directed towards a page that displays iTunes data based on my search.

Create a class that works with this API. It should be autoloaded using psr-0 in your Laravel app. It should also be namespaced with a vendor name and a package name like:

Vendor-name/package-name/class-name

Your API can return either XML or JSON.



