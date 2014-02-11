Random photo page
=================

Create a new Photo gallery or use the one you created for previous assignment. (Do not delet the previous Photo Gallery assignment, instead make a copy and rename it for this assignment)

Expand your number of photos to at least 10.


Then write an array for which each position of the array is the filename of one of the photos. 

You will also need to create a random number to pick through the array positions using code such as:

	```js
	var image1 = Math.floor(Math.random() * n)
	```
	
Then, write two ADDITIONAL arrays that specify the height and width of each image. And edit your image tag so that it uses dynamic data from the array to specific the src, height and width of the image. 

Finally, add a fourth array that contains text "captions" specific to each of the photos. And use innerHTML to set the caption accordingly to each picture selected.

When your page is complete, it should:
*	Have general page content separate from the items below.
*	Randomly display a photo from an array of at least 10.
*	Randomly display a photo from an array of at least 10.
*	Adjust the height and width of that image object to match the photo.
*	Display a custom photo caption in a container below the picture.