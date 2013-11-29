Images
======

The img tag is an inline, self-closing element that displays an image file on a web page. It's core properties/attributes are:

* src: the filename or path + filename for the image (such as src="mypic.gif"). This can be a relative path or an absolute path.
* alt: the "alternate" text for the image. This is displayed in some browsers if the image fails to render on the page
* width: how wide (in pixels) the image should be displayed 
* height: how tall (in pixels) the image should be displayed 

So a typical image element might be:

```html
<img src="dent.jpg" alt="Picture of Mr. Dent" width="75" height="75" />
```

or alternatively, you can specify the width and height as style properties:

```html
<img src="dent.jpg" alt="Picture of Mr. Dent" style="width: 75px; height: 75px;" />
```