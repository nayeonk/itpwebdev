Function Lab
============

Save the [starter file](http://itpwebdev.herokuapp.com/starters/301/functions-lab.html) to your computer, as well as the [main image](http://itpwebdev.herokuapp.com/starters/301/familyguy6.jpg).

Look at the code. The page already contains two functions. One will change the height, width, and border properties of the image using the data from the text boxes. The other will bring up an alert box that tells the user the current height, width and border of the iamge.

You need to flesh out the functions to perform their purposes, and put event handlers into the HTML tags to call the functions. Note that in calling the scaleImage() function you ALSO need to include the values from the three text boxes as the arguments in your function call.

Also note that inside the code there are a lot of comments about what the intended purposes of the functions, what you should be doing, etc.

Of course, if you like, you can use a different image than the cartoon dog for the lab.

__NOTE: You must use ONLY Javascript for this lab.. you CANNOT use any jQuery!__

Lastly, to refresh your memory on image borders, there are 2 ways you can apply them:

__HTML border attribute__

```html
<img src="some-image.jpg" border="5" />
```

__Border property in the style attribute__

```html
<img src="some-image.jpg" style="border: 5px solid black;" />
```

Manipulating the border attribute is probably a little easier, but either approach is correct. For more practice / a little challenge, try manipulating the border style property.