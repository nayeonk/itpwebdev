Calculator
==========

For this assignment, you will need to create graphics, as well as write the JavaScript to create a basic four-function web-based graphic calculator.

Save the [startpage](http://itpwebdev.herokuapp.com/starters/301/calculator_start.html) to your computer. Notice that this file ALREADY has some functions and variables defined in it. These should help to give some structure and hints to help you start. 

Basic workflow of this page is that a person enters in a number using the calculator buttons, then presses a math function, then types in a second number, then presses the equal sign, and the result appears. 

### Requirements

*	Pick a "color scheme" for the app. Adjust the table and cell colors of the app accordingly.
*	Create button "graphics" for the numbers 0 - 9, +, -, /, *, = and C.
*	As the user presses the "number" buttons, a number is "built" in the main input.
*	When the user presses a "math" button (add, subtract, multiply, divide) the first number is stored, the "mathmatical operation" is stored, and the input screen in cleared.
*	When the user presses the "equals" button, the 2nd number is stored, the app checks to make sure the user previously entered a first number and a math operation, and then performs the appropriate calculation, outputs the "result" to the text box.
*	If at any time the user presses the "Clear" button, the variables are all cleared and the input box is cleared.

See the class example of a simple add calculation using text fields. 

### Hints

*	The startfile already has code for the "1", "2" and "+" buttons completed.
*	Take a look at the "math operations" that are suggested/planned out in the start page. While you do NOT have to use those exact names or functions, they give you some idea as to the different ones you will need to write.
*	Plan out the "workflow" of the app. Then make sure you have the function or functions needed to support each step along the way.
*	You will need to use conditional logic to "check" the status of variables at certain points.
*	Make sure you are "clearing" your variables at the appropriate times.
*	Remember that data from a textbox is ALWAYS considered "string" data, and therefore you will need to "convert" it to numberic data with the parseFloat() function.

*************

#### Suggested Calculator Workflow:

1.	User writes/builds first number in the input box
	1.	Enable each number button to add to "readout". So for instance, you could put into the "3" button:
	
	```js
	document.getElementById('content').value =  document.getElementById('content').value + '3';
	```

1.	User presses +, -, * or /
	1.	SAVE the content number to a variable (firstnumber).
	2.	We need to save into a variable (themathfunction) one of the following four phrases: "add", "subtract", "multiply" or "divide" based on which button they pressed ... so that LATER (Step 4) we know what math function to use at the end.
	3.	Clear out the content readout so they can build the second number.
2.	User builds second number
	1.	Same functionality already done in Step 1.
3.	User presses "=" and expects to see the solution in the content readout.
	1.	Save the current (second) number to a variable (secondnumber).
	2.	Convert both saved numbers to numbers (parseFloat).
	3.	The solution is either n1+n2, n1-n2, n1*n2 or n1/n2. Use if statements to compare/evaluate the SAVED mathfunction (from Step 2)... if it is "add"... then the solution is n1+n2. If it is subtract...
	4.	Output the solution to the content readout.

__Note: You do not have to use my exact workflow, or use my supplied variables and functions (that are already in the calculator srart page). If you feel it is easier to write your own code from scratch feel free to do so.__

******************

### Advanced Version

NOTE: This is NOT for Extra Credit. It is an OPTIONAL advanced version that adds another feature: 

Either stop the user from continuing to add more numbers or make the calculator infinitely extend out (can add then subtract them multiple then...).  