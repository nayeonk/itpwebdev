Resource - practice form quiz
==============
Practice exercise reviewing functions, conditional logic, indexof, and general scripting up to this point.

Practice Exercises:

1. Write a function called "emailvalidate" that validates the email box. The function should receive one parameter, which is the NAME of the ID of the box. The function should retrieve the data from the box using its ID, then validate the content of that box. If it is a valid email it should do noting. If it is invalid it should bring up an alert with a message about invalid email. Create a button that runs that function that has a label of "Validate Email".

2. Write a functiion called "requireddata" that checks to see if a textbox has data in it. The function should be defined to receive a textbox OBJECT as a parameter. If the box is empty an alert should come up that tells the user they need to enter data and THEN tells them the NAME of the box. Then put an event handler in EACH of the three boxes that runs that function everytime someone LEAVES the box.

3. Write a function called agecheck that reads the data in the age box. This function does NOT have to have any parameters. Start by parsefloating the data in the box. If the parsefloat results in NaN run an alert asking the person to enter a valid age. Then check to see if the person is 18 years old and able to vote in the state of California. If they ARE 18 or over return an alert telling them they can vote in California. If they are NOT 18 bring up an alert that tells them in how many years they can vote in CA. Create a button labeled "Can I vote in California?": and hook that button up to the function.

4. Write a function that parses out the DOMAIN of a user's email address. This function does not need to have any parameters and can have the ID of the emailbox hard-coded in its scripting. The function should return an alert that tells the user what domain their email is on... AND if they are on usc.edu ALSO says "Fight On!". Create a button labeled "Check Email Domain" that runs the function. code.

[Solution page](http://webdev.usc.edu/itp204/lecture_examples/form_exercise_solution_plus.html) with the above routines and more.