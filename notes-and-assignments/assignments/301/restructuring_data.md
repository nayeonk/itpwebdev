Lab - Re-structuring data: Using reg. expressions, replace and substring
==================

On your personal site, let's create a simple Questionnaire page or a form section to get visitor's info.
The page/form should ask for following info:
*	First & Last name
*	E-mail Address
*	Phone number.
*	A button to "save" the visitor's info. (Use JS variables to save the info for now)


Next, we want to re-structure the phone numbers he/she entered.
Scenario: People enter phone numbers into a form field. But you don't know how they will format them. And you want to have area codes and phone numbers in every instance.
*	When the field's content changes, a routine should take the data and strip out common phone formatting characters such as "(" ")" " " and "-" (replacing them with "") using the replace method. (Note: To replace the ( and ) you will have to use an ESCAPE character to let it know that you want to literally print the ( character, and not that you want to open a parenthetical phrase. So instead of /(/ you would have /\(/ as your regular expression -- in other words BACKSLASH and then the character.)
*	Verify that what is left over is EXACTLY 10 characters (area code plus phone number). If not, bring up an error that asks them to input area code and phone number.
*	Update the content of the field with the new string.
*	When mouse leave the phone number input, we will reformat the phone number in the input to "(xxx) yyy-yyyy".

__Hit__: Use the replace and substring to reformat the phone number.