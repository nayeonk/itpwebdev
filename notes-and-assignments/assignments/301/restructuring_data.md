Lab - Re-structuring data: Using reg. expressions, replace and substring
==================

stripping and re-forming phone numbers
Scenario: People enter phone numbers into a form field. But you don't know how they will format them. And you want to have area codes and phone numbers in every instance.
Step 1: Create a form with a text field that is labeled phone number.
Step 2: When the field's content changes, a routine should take the data and strip out common phone formatting characters such as "(" ")" " " and "-" (replacing them with "") using the replace method. (Note: To replace the ( and ) you will have to use an ESCAPE character to let it know that you want to literally print the ( character, and not that you want to open a parenthetical phrase. So instead of /(/ you would have /\(/ as your regular expression -- in other words BACKSLASH and then the character.)
Step 3: Verify that what is left over is EXACTLY 10 characters (area code plus phone number). If not, bring up an error that asks them to input area code and phone number.
Step 4: Update the content of the field with the new string.
Step 5: When the submit button is pressed, an alert box should come up that says "your number is (xxx) yyy-yyyy" by taking the three pieces of the phone number and displaying them between the above punctuations. This will involve using the substring method three times.