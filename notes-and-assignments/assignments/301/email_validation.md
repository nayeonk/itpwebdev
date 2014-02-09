Lab -- email validation
=======
Exercise to perform simple data validation.

Create a form page that asks someone to fill in their e-mail address into a text box. So the page should have a form, an text input box. And also a button that says "Validate email". 

Then you should have a Javascript data validation routine that runs when the button is pressed. The routine should check to make sure the data in the email text field has @ and . characters in it, and the . character should come AFTER the @ sign. 

If not, the page should bring up an alert that says "Please enter a valid e-mail address". If it does, then an alert should come up that says "Thanks, that is a valid e-mail address". 

_Hint1: You will be using the indexOf method to search for the characters._

_Hint2: indexOf returns the POSITION in the string where it found the character, OR it returns -1 if it does NOT find the character in the string._

__Advanced Version:__ To try a more advanced version of this lab, change the input button to a submit button, have the email function return true or false, and have an onsubmit event handler in the form tag that "returns" the function... so that a false return actually stops the form from submitting. 
_Note:_ The advanced version of the lab leverages concepts we have not reviewed in lecture yet, so if meant for students who already have some JS or want to skip ahead to later concepts.