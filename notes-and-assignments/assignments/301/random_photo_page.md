Assignment - Random photo page
=========
Use arrays to generate a random photo

Create a simple content-driven page that you would want to have one of 10 random images come up on. So first, pick a topic, gather some basic text (3 paragraphs maybe), and find 10 related photos. 

Then write an array for which each position of the array is the filename of one of the photos. 

You must then use a document.write command to "create" the image tag with the array call in place of the filename of the image. 

You will also need to create a random number to pick through the array positions using code such as:

	```js
	var image1 = Math.floor(Math.random() * n)
	```
	
Then, write two ADDITIONAL arrays that specify the height and width of each image. And edit your image tag so that it uses dynamic data from the array to specific the src, height and width of the image. 

Finally, add a fourth array that contains text "captions" specific to each of the photos. Create a text field (input textbox or div) beneath the photo on the page, and have a script populate that text with the caption that goes along with the random photo. 

When your page is complete, it should:
*	Have general page content separate from the items below.
*	Randomly display a photo from an array of at least 10.
*	Randomly display a photo from an array of at least 10.
*	Adjust the height and width of that image object to match the photo.
*	Display a custom photo caption in a textbox or div under the photo.