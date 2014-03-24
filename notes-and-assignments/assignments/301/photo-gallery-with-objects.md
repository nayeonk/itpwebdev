Photo Gallery with Objects
==========================

Build an array called 'myPhotos'. The array should contain at least 7 objects where each object corresponds to a photo in your gallery. You should have the following properties:

```
{
	source: "image1.gif",
	caption: "caption about image 1 here",
	tags: "beach, ocean, outdoors"
}
```

1. Write a loop that goes through the myPhotos array and displays each image on the page.
2. Create a search box at the top of the page. 
3. When a user types into the search box, run a function called 'search' that searches through myPhotos (the array of objects) and checks if the searched value is contained within the caption OR the tags for each photo object. This should be _case insensitive_. If a photo's caption or tags contain the search term, add a green border with rounded corners (border-radius) using jQuery's .css() method using objects. If the search box is empty, none of the images should have the green border or rounded corners.

### Tips

For each image on the page, give it a unique ID like "image0", "image1", etc. The "0" from "image0" would be the index from the loop, as you are looping over the myPhotos array and rendering them on the page. This way during the search, when there is a successful match of a photo to the caption or tags properties, you can grab that element from the page by that id using the loop index, and apply the style properties.

Something like this:

```js
for (var i = 0; i < myPhotos.length; i++) {
	if (/* expression that yields a photo match */) {
		$('#image' + i).css({
			/* apply style properties here */
		});
	}
}
```

### Optional (not for EC)

1. Create an object called 'gallery'. Next, create a method on the gallery object called 'initialize'. Put step 1 code inside of this initialize method. Then, execute this initialize method.
2. Try making the 'search' function a method on the gallery object.