Advanced Photo Gallery
======================

Build a dynamic page that loads images from arrays. It will look like [this](http://webdev.usc.edu/itp301/dogs/dogs_page.jpg). Feel free to add more style to it ;)

*	Pick a topic of interest to you for a photo gallery. Find at least 15 pictures related to your topic
* Store all core photo names (cat1.jpg, cat2.jpg, cat3.jpg, etc) in an array.
*	The top photo on the page (portrait) has a hyperlink that links to the first image in the array. This should be inserted into the DOM from JavaScript, NOT by simplying creating an HTML img tag in your markup.
*	The 3 photos below it are generated randomly (differently) each time in the medium size, from the array. Also, each of those three photos have hyperlinks around them that link to their full version. 
*	Below the line is a listing of ALL the photos. This last part must be done through a loop that works with the array. Each of these thumbnails should also have a link to the larger version of the picture.
* Lastly, define the following CSS. Feel free to change the color.

```css
.highlight {
	border: 1px solid yellow;
}
```

Give this highlight class to all the thumbnails that match the 3 random selected photos.

ALL of your img tags MUST be inserted into the page with .innerHTML, not document.write(). Hence, you will need to place your script tag at the bottom of the page so that the rest of the page has loaded and can be accessed.

__Hint 1__: Collect images that are all large (roughly 300 x 300). When you render them on the page, you can resize them using CSS. This way when you display the images in any of the 3 smaller formats, it will look fine. 

__Hint 2__: To create the random photos, you will need to generate a random number based on how many images are in the array, where n will need to represent the length of your array.

```js
var randomNumber1 = Math.floor(Math.random() * n);
``` 
__Hint 3__: Don't try to do all this at once. First build your core array for images. Then perhaps build the for-loop that loops through all the items in the array. Then maybe work on generating all the images. Then go back and add the hyperlinks around the images, etc

### Extra (not for extra credit)

Use functions that return values for repeated tasks in this assignment like generating a random number or creating a string of HTML containing an image wrapped in an anchor for a specified image. For example, you could have functions like the following:

```js
// should return some random number between 0 and n
var randomNumber = generateRandomNumber(n);

/**
 * should return a string containing an image tag 
 * wrapped in an anchor tag for a given input like my-image.jpg.
 */
var galleryImageString = generateImageWithHyperlink('my-image.jpg'); 
```



