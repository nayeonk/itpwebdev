Re-structuring data
===================

Using regular expressions, replace, and substring to validate and transform data

On your personal site, let's create a simple questionnaire page / contact form section to get visitor's info.
The page/form should ask for following info:

*	First & Last name
*	E-mail Address
*	Phone number
*	A button to send off the visitor's info.

People enter phone numbers into a form field. However, you don't know how they will format them and you want to have area codes and phone numbers in every instance.

*	When the field's content changes, a function should take the data and strip out common phone formatting characters such as "(" ")" " " and "-" (replacing them with "") using the replace method. (Note: To replace the ( and ) you will have to use an ESCAPE character to let it know that you want to literally print the ( character, and not that you want to open a parenthetical phrase. So instead of /(/ you would have /\(/ as your regular expression -- in other words BACKSLASH and then the character.)
*	Verify that what is left over is EXACTLY 10 characters (area code plus phone number). If not, bring up an error that asks them to input area code and phone number.
*	Update the content of the field with the new string.
*	When the user leaves the phone number input (onblur event handler), reformat the phone number in the input to "(xxx) yyy-yyyy".

__Hint__: Use the replace and substring to reformat the phone number.


