HTML Forms and USC Form Scripts
===============================
Save the following for this lecture:
* [Stripe Image](/demos/104/W7/stripe.png)

Download Sublime Text 2 
* <a href="http://www.sublimetext.com/" target="_blank">http://www.sublimetext.com/</a>

###Lecture Overview

* HTML Forms
* Laying out forms with div tags/floats
* span tags
* rounded corners
* USC form scripts

### Forms

*	HTML forms allow you to collect information from users for activities such as surveys, contact, and feedback pages.
*	Forms are set to "submit" to a page (or more commonly a web script) that then saves and/or emails the form data. For the purposes of Web publishing we are only going to study the HTML to create forms and form objects, and not how to "process" the form.
*	Form objects are places inside forms to collect different types of data from users. For instance, checkboxes collect yes/no (on or off) binary data, whereas radio buttons set up a series of options from which a user can only pick one.
* Form objects include:
	* standard text boxes	
	* checkboxes
	* radio buttons
	* (large) textarea (multiline) boxes
	* submit and reset buttons


### HTML Form Tags

#### form tag:

The form tag defines the beginning and end of a form. So a sample "start" form tag could be:

```html
<form action="process.php" method="post">
```

* **action attribute:** the "action" defines WHERE the form is submitted
* **method attribute:** the "method" defines which of two methods (get or post) is used to submit the data to the action page/script.

Inside a form, there are four HTML tags that define the different form objects: input, textarea, and select (with option):

#### input

* The HTML input tag creates the majority of our form objects: text boxes, radio buttons, checkboxes and three types of buttons (submit, reset and image).
* type attribute: The type attribute of the input tag defines which "type" of input object is being built such as text boxes, checkboxes, submit buttons, etc. 
* name attribute: The name is used on most form objects to define the "name" of the object. For instance, if one text box collects the user's first name, and another one collect's the user's last name, and they type in craig and chris, how would you know which is their first name and which is their last name? The name attribute gives a "name" to each piece of data you collect.
* inputs have internal closes, like hr tags. So a complete input tag might be:

```html
<!-- input text box -->
<input type="text" name="firstname" />

<!-- a group of radio inputs where a user can select one option -->
<input type="radio" name="color" value="red" />
<input type="radio" name="color" value="blue" />
<input type="radio" name="color" value="green" />

<!-- checkbox input (binary, yes/no, true/false, on/off) -->
<input type="checkbox" name="terms-of-service" />

<!-- submit button input -->
<input type="submit" name="submit" />

<!-- reset button input -->
<input type="reset" name="Reset" />
```

#### defaults

Different input objects have different ways of setting up "default" data. For instance, with text boxes a "value" attribute sets the default text for the box, whereas with checkboxes and radio buttons an attribute of checked='1' sets up that item as "turned on" when the form loads. 

#### textarea

The textarea tag creates a large (multiline) text area for a user to type sentences or paragraphs into. They automatically have scrollbars if needed. Like input tags they should have a name attribute. So a typical textarea block might be:

```html
<textarea name="message"></textarea>
```

#### select and option

* select: the "select" tag defines the beginning and end of a drop-down (or select) menu.
* option: The "option" tag defines a single item in a select menu, similar to how the li tag defines a single item in a list.
* default: To set an option as the default (pre-selected) item you put selected='1' in that option tag.

```html
<select name='favcolor'>
    <option value='red'>Red</option>
    <option value='green' selected='1'>Green</option>
    <option value='yellow'>Yellow</option>
 </select>
 ```


### USC Form Scripts

#### MailForm:

```html
<form method="POST" action="http://www.usc.edu/cgi-bin/mail_form/userid@usc.edu">
```

* Simplest script to use
* Basic tool for sending contents of form to someone through e-mail.

#### FeedbackForm:

```html
<form method="POST" action="http://www.usc.edu/cgi-bin/feedback_form/userid@usc.edu/Subject">
```

* Adds more functionality than MailForm.
* Has three required fields - name, email, and subject. If any of required fields are not filled out (or present as hidden fields) will return error to user.
* Has two arguments (e-mail and subject) in action URL.

#### FormHandler:

```html
<form method="POST" action="http://www.usc.edu/cgi-bin/form_handler">
```

* Most powerful of the three scripts because it has lots of configurable fields (all starting with "FH_")
* Does not have any arguments in the action URL, but you can use "hidden" fields for all of them.
* Supports custom post-form message pages
* FH_Name: Will be inserted into "reply to" field of email message
* FH_Email: Will also be inserted into Reply-to: field
* FH_Subject: Subject line of e-mail
* FH_Topic: Will appear in subject line in parenthesis
* FH_Recipients: Who will receive the email (can put multiple entries)
* FH_OK_URL: Custom page for when the form is submitted, but must be an absolute URL
* FH_ERROR_URL: Custom page for when there is a problem submitting the form
* FH_Required_Fields: List which fields must be filled out with data. Use comma-separated list.
* FH_Display_Order: Order that fields will list in (comma separated). Default is alphabetical listings of fields.
* FH_RequireValidEmail: Checks for xxx@xxx syntax in email field
* FH_RequireUSCEmail: Basically checks for xxx@usc.edu

###Lecture files from today
* [Barebones Form](/demos/104/W7/form.html)
* [Styled Form](/demos/104/W7/contactform.html)
