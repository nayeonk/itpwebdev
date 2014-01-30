Beginning JS tips, reference
========
Basic Javascript tips and notes. Reference table of common objects, methods, properties and events.

#### Some helpful tips and reminders:
*	Methods always are called with parenthesis. I.e. alert('hello') or even alert(') but never just alert
*	Methods sometimes need to be called off their parent objects such as window.close(), but sometimes can be called alone such as alert('test')
*	Anything that is NOT an object, method, property or mathematic number needs to be surrounded in quotes... so document.bgColor = 'green' is ok but document.bgColor = green will throw an error because green is not an object on the page or a method/function.
*	Javascript can go in a script block in the head or body of an object, or inside an event handler in an html tag (the latter is NOT inside a script block).
*	In a script block it is safest to end each statement with a semi-colon. Two statements on the same line without a semi-color will throw an error. So alert('1'); alert('2') is ok but alert('1') alert('2') will throw an error
*	In general, before you can manipulate an object or its properties, you have to "find" it in the page. We generally do that using the ID of the object and the document.getElementById() method.


#### Some fundamental methods, object properties and events:
<table cellpadding="9">
<tbody><tr>
<th><em>Name</em></th>
<th><em>Description</em></th>
<th><em>Example</em></th>
</tr>

<tr>
<td><strong>alert()</strong></td>
<td>Method to bring up a pop-up window with a message. <em>No parent object needed.</em></td>
<td><em>alert('Test message.')</em></td>
</tr>

<tr>
<td><strong>document.bgColor</strong></td>
<td>Document property that sets/changes the background color of an entire page</td>
<td><em>document.bgcolor = 'green'</em></td>
</tr>

<tr>
<td><strong>document.fgColor</strong></td>
<td>Document property that sets/changes the default text color for a page</td>
<td><em>Document.fgColor = 'yellow</em>'</td>
</tr>

<tr>
<td><strong>prompt()</strong></td>
<td>Method that brings up a pop-up message and a dialogue box to solicit user input. <em>No parent object needed.</em></td>
<td>d<em>ocument.bgColor = prompt('set value for backgrund color','teal')</em></td>
</tr>

<tr>
<td><strong>onClick</strong></td>
<td>Event that detects mouse click on object</td>
<td><em>onClick="alert('you clicked me!')"</em></td>
</tr>

<tr>
<td><strong>onMouseOver</strong></td>
<td>Event that detects mouse entering an object</td>
<td><em>onMouseOver="alert('Your mouse touched the object')"</em></td>
</tr>

<tr>
<td><strong>onMouseOut</strong></td>
<td>Event that detects when the mouse leaves an object's area</td>
<td><em>onMouseOut="alert('Hey! Where are you going?')"</em></td>
</tr>

<tr>
<td><strong><nobr>document.getElementById()</nobr></strong></td>
<td>Used to 'find' objects in a page, most commonly to manipulate their properties.</td>
<td><em>alert('The text box Fname contains ' + document.getElementById('Fname').value))</em></td>
</tr>

<tr>
<td><strong><nobr>parseFloat()</nobr></strong></td>
<td>Attempts to Convert a piece of data (usually strings) into a number).</td>
<td><em>variables1 = parseFloat(variable1)</em></td>
</tr>

<tr>
<td><strong>document.write()</strong></td>
<td>Insert text and html into the current page at that location (inline).</td>
<td><em>document.write('Your browser is ' + navigator.appName)</em></td>
</tr>

</tbody></table>