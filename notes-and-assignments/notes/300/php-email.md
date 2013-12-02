PHP Email
=========

For Yuanbo's class, download these files before you start:
http://itp300.usc.edu/yuanbo/zune/week13.zip 

Sending email with php is very simple. In reality, plugging in form variables or whatever other sources you want for the content of the email.

The php [mail](http://php.net/manual/en/function.mail.php) function generates emails and takes four parameters:

```php
	mail(TO, SUBJECT, MESSAGE, HEADERS)
```

#### Mail function

TO: string/text data for whom email should go to
SUBJECT: string/text for subject line of email
MESSAGE: body of the email
HEADERS: other information such as the FROM of the email, CC and BCC, etc.

Sample (in the below example substitute your email for YOUREMAIL@usc.edu and run in a php block):

```php
	mail("recipient@usc.edu", "test email", "This is a test email.", "From: YOUREMAIL@usc.edu")
```

A slightly more complicated version where variables are plugged into the tag:

```php
	// mail tag with variables plugged into mail command
	$to = "recipient@usc.edu";
	$subject = "Testing an mail";
	$message = "Hello! Did this message go through?";
	$from = "class@usc.edu";
	$headers = "From: $from";

	// If you set a variable EQUAL to the mail function then that variable "stores" the response from the php server
	// Returns TRUE if the mail was successfully accepted for delivery, FALSE otherwise.
	$test = mail($to, $subject, $message, $headers);

	echo $test; // this echoes out the "response" code from php... with "1" being "success"
	echo "Mail Sent?";
```

___Simple feedback form page:___

So a typical _feedback_ form might let the user enter their name, email, a subject for the feedback, and the content of the feedback. We could then use php code to generate an email that plugs in those fields for the from, subject and body/message of an email to the site's webmaster.

Simple form:

```html
	<p>Please fill out the form below to send an  email to our webmaster.</p>
	<form action=""  method="get">
		Name: <input type="text" name="username" />
		<br />
		Email: <input type="text" name="useremail" />
		<br />
		Subject: <input type="text" name="usersubject" />
		<br />
		Feedback: <textarea name="userfeedback"></textarea>
		<br />
		<input type="submit" name="submit" value="Send Email" />
	</form>
```

And then ABOVE the form in the page code:

```php
// first we need to determine  whether or not the page is loading for the first time

if (!empty($_REQUEST["submit"])) {
    // there is a form field named "userfeedback" with valid data  in it
    $to = "webmaster@usc.edu"; 
    	// this would be the permanent address  you want all feedback to go to
    $subject = $_REQUEST["usersubject"] ; // from form
    $message = $_REQUEST["userfeedback"]; // from form
    $from = $_REQUEST["useremail"]; // from form
    $headers = "From: $from"; // create a header entry for FROM
    $test = mail($to, $subject, $message, $headers);
    echo "Thank  You. Your email was sent."
}
```

Or another type of form+email would be a "Send this page to a friend"... where there is a form where the visitor enters a friend's email (and maybe their own name et al) and then the script emails a web page's URL to someone.

Take a look at the following code. Of course, the URL would probably be automatically populated instead of typed in...

```php
	<?php
		if (!empty($_REQUEST["email"])) {	
			// mail tag with variables plugged into mail command
			$to = $_REQUEST["email"];
			$subject = "You might like this web page...";
			$message = "Hello. A friend suggested you might like " . $_REQUEST["url"];
			$from = "class@usc.edu";
			$headers = "From: $from";
			$test = mail($to, $subject, $message, $headers); 
		
			if ($test) {
				echo "Mail sent to " . $_REQUEST["email"] . " with the url ". $_REQUEST["url"];
				exit();
			}
		}
	?>
```

Send a page to a friend!

```html
<form action="" method="post">
	Email: <input type="text" name="email" /><br />
	URL: <input type="text" name="url" /><br />
	<input type="submit" value='Send Email' />
</form>
```

You could even set up the above as an "include" so that on any page you add it (like in a box) it automatically flows the URL of the current page into the form (does not have to be typed in by the user)... and again maybe have the user put in their name and email so that the form looks like it came from their friend.
