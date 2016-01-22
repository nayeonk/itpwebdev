DVD Reviews Page with Laravel
=============================

This assignment will be building off the last one where you created search and results pages for the dvds database. In this assignment, you will be implementing a feature that allows dvds to be reviewed.

For each dvd result, place a link that says "Review" next to it. This link should take you to a dvd details page where the URL should be `/dvds/:id` where `:id` is replaced by the dvd's id field. 

### DVD Details Page with Review Form

This page should display all information about the DVD in an organized way. Please style this a little bit so that it is easy for me to use.

Next, somewhere on this page, present a form that allows the user to add a review for this dvd. This form should have the following fields:

* rating, select menu, numeric value from 1-10
* title, text input
* description, textarea

### Validation

When the form is submitted, validate the data using Laravel's Validator class using the following rules:

* rating, numeric value from 1-10
* title, required with at least 5 characters
* description, required with at least 20 characters
* dvd_id, required integer

If the validation passes, create an entry in the `reviews` table and display a success flash message. If the user input is invalid, redirect to the same page, display the validation error messages in red, and repopulate the form with all the old input.

### Display all reviews

Lastly, display all reviews for the dvd on the page. Be sure to show the rating, title, and description.

### Styling

This page does have a lot of content on it so be sure to style it a little to make it presentable and easy to use.

### Optional

Migrate your views to use Blade Templating. Even better, take advantage of the layout feature in Blade so that all of your pages use the same HTML skeleton layout file.

### Submission

To submit, push this code up to the same repository as last week named __itp405-spring2015-mvc__.