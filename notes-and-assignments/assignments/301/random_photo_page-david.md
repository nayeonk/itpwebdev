Random photo page
=================

You will be creating another photo gallery where you have __at least 10 images__. The image filenames, width, and height will be stored in JavaScript arrays and your page will select an image at random and display it on the page with the correct dimensions. You can use the images from the previous photo gallery assignment if you wish.

Write an array containing the photo filenames, for which each position of the array is the filename of one of the photos. 

You will also need to create a random number to pick through the array positions using code such as:

```js
var randomNumber = Math.floor(Math.random() * 10);
```
	
Then, write 2 ADDITIONAL arrays that specify the height and width of each image. Edit your image tag so that it uses dynamic data from the array to specific the src, height, and width of the image. 

When you build your image string, it should set the width and height using the style attribute, NOT the width and height attribute like we did in class. So if you build your images correctly, it should look something like:

```html
<img src="my-image.jpg" style="width: 50px; height: 100px;" />
```

Finally, add a 4th array that contains text "captions" specific to each of the photos. Use innerHTML to set the caption accordingly to each picture selected.

When your page is complete, it should:

*	Have general page content separate from the items below.
*	Randomly display a photo from an array of at least 10.
*	Adjust the height and width of that image object to match the photo.
*	Display a custom photo caption in a container below the picture.