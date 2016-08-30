Introduction to HTML and CSS
============================

### To-do for today's lecture
* Download Filezilla (Clients) [here](https://filezilla-project.org/)

### What is HTML?
* HTML is short for for **HyperText Markup Language**
* HTML creates **structure** of a web page. Think of them as basic building blocks.
* HTML consists of **tags** and text.

### HTML Skeleton
* All HTML files must have this code:

```html
<!doctype html>
<html>  
<head>  
  <title>TITLE OF PAGE (gets displayed at top of web browser)</title>  
</head>  
<body>  
  CONTENT OF PAGE
</body>  
</html>
```

* The `<head>` element contains the "brains" of a web page - we will add more things in this element later
* The `<body>` element contains everything that will be displayed on a web page. We will do all our coding inside this tag

### Tags (HTML Elements or Objects)
* A web page is made up of a bunch of **tags**.
* Think of tags as a pre-defined piece of code that does a certain thing.
* They have greater than and less than brackets around them.
* It is important to **open** and **close** tags. "Opening" a tag tells the computer that this specific tag is starting. "Closing" a tag tells the computer that this specific tag is stopping.
* Some sample tags:

```html
<h1>This is a heading tag. It makes this text bold and big, like a title!</h1> <!-- </h1> is the closing tag! -->
<p>This is a paragraph tag. It is great for long pieces of text. </p> <!-- </p> is the closing tag! -->
``` 

* An HTML **element** = opening tag + content + closing tag
* Some tags are **block** elements.  They are always displayed as if they have a linebreak before and after them.  Some examples are `<h1>`, `<h2>`, and `<p>`
* Other tags are **inline** elements. They appear "in line" within the flow of the text in your page. Some examples are `<strong>`, `<span>`, and `<a>`.

### Lists
* Two types of lists exist - unordered (bulleted) list and ordered (numberd) list
* Constructing a list requires to elements that, when used together, form a list. One element determines what kind of list you are creating while the other one marks up each list item.
* An **unordered** list starts with the `<ul>` tag. Inside this, put each list item in a `<li>` element. End it with the `</ul>` tag. 
* An **ordered** list starts with the `<ol>` tag. Inside this, put each list item in a `<li>` element. End it with the `</ol>` tag. 
* When elements are placed inside other elements, this is called **nesting**

#### Unordered List Example
* Chocolate
* Vanilla
* Mint

```html
<ol>
    <li>Chocolate</li>
    <li>Vanilla</li>
    <li>Mint</li>
</ol>
```

#### Ordered List Example
1.   Chocolate
2.   Vanilla
3.   Mint
  
```html
<ol>
    <li>Chocolate</li>
    <li>Vanilla</li>
    <li>Mint</li>
</ol>
```

#### Nested Lists
You may put lists inside other lists
You may put lists inside other lists.

* Coffee
* Tea
    * Black tea
    * Green tea
* Soda


```html
<ul>
    <li>Coffee</li>
    <li>
        Tea
        <ul>
            <li>Black tea</li>
            <li>Green tea</li>
        </ul>
    </li>
    <li>Soda</li>
</ul>
```

### Links (Anchors)
* Used to create a 'link' from one page to another
* Requires the *href* **attribute**, which specifies where this link should go to 
* Think of **attributes** like settings of a tag. Certain tags require certain attributes. They are denoted with an equal sign and have open and closing quotes. They exist inside an open tag before the closing bracket.
* What is placed between the opening and closing `<a>` tag is the label for the link. The label is what you see on the web page. By default, it's underlined (and usually blue) to indicate you can click on it.
* You can use words or an image as the label for a link.
* You can link to **relative** or **absolute** paths
    * **relative path** is a link that points to other files on your website relative to the web page you are linking from. Sample below:
        * `<a href="folder/anotherpage.html">Click Me</a>`
    * **absolute path** is a link that points and entire URL. Sample below:
        * `<a href="http://www.google.com/anotherpage.html">Click Me</a>`
* Use the *target* attribute to define where to open the linked page. Setting the *target* to "_blank" will open the linked page in a new tab.
* Use the *title* attribute to create a hover effect that displays the title before user clicks on the link

#### Link Examples

Link to an external website (the USC website):

```html
<a href="http://www.usc.edu">USC</a>
```

Link to another HTML file in the same folder as the current HTML file:

```html
<a href="tags.html">Tags</a>
```

Link to another HTML file in the parent folder of the current HTML file (one folder up):

```html
<a href="../some-parent-directory.html">Web Space</a>
```

Use the target attribute to open USC in another browser window/tab:

```html
<a href="http://www.usc.edu" target="_blank">USC</a>
```

### Images
* The `<img>` tag can be used to add images to web pages
* It is an inline element that does not require a closing tag
* Its core attributes are:
    * src: the filename or path + filename for the image (such as src="mypic.gif"). This can be a **relative path** or an **absolute path**.
    * alt: the "alternate" text for the image. This is displayed in some browsers if the image fails to render on the page.
    * width: how wide (in pixels) the image should be displayed 
    * height: how tall (in pixels) the image should be displayed

So a typical image element might be:

```html
<img src="dog.jpg" alt="Picture of a dog" width="75" height="75" />
```

or alternatively, you can specify the width and height as style properties:

```html
<img src="dog.jpg" alt="Picture of a dog" style="width: 75px; height75px;" />
```

### What is CSS?
* Short for **Cascading StyleSheets**
* The language that describes how HTML elements are to be displayed
* CSS can format:
    * text properties such as its color, font face, size, etc., as well as special formatting such as transforming text to ALL CAPS or setting the leading or line spacing
    * margin and spacing properties of blocks 
    * background color and image properties of blocks 
    * other specialized properties such as the bullet styles of lists
* For this lecture, we are only going to explore setting style properties inside an html tag (known as **inline styling**). Later in the semester we will get into stylesheets and setting selectors.

### How to add CSS into HTML?
* CSS can be added to any HTML tags by using the *style* attribute
* The syntax to define CSS is `property: value;`
* Properties are pre-defined. Values vary and can be you have the freedom to set the appropriate value.
* Here is a pretty exhaustive list of CSS properties: [Mozilla CSS Reference](https://developer.mozilla.org/en-US/docs/CSS/CSS_Reference).

Here is a sample of how CSS can be applied inline:

```html
<h2 style="color:blue;">This is a title</h2>
```

If you want to include more than one setting at a time, you separate them with semi-colons. The following would start a block of text that is purple and 24 point in size.

```html
<h2 style="color: purple; font-size: 24pt;">  
```

Some common CSS properties you will use a lot are:
    
* font-size (typically in measurements such as pt or px, i.e. 18pt or 18px) 
* color (text color) 
* background-color (of an object, from the body to a paragraph to a span tag, named colors like green or hex ones like #4499aa) 
* text-decoration (underline or none -- often used to REMOVE lines from hyperlinks/a) 
* line-height (height of a line, plain number like 2 is line spacing, or measurements such as 18pt) 
* text-alignment (right, left, center)
* background-image (format uses a url object, such as background-image:url(mypic.gif))
* margin - the spacing on the outside of of a block
* padding - the spacing on the inside of an element

There are a LOT of style properties you can play with. Some affect text, some only affect images, and some will affect objects we have not gotten to yet.

### span tag
* You can use the `<span>` tag to style a specific piece of content inside an element. For example, this code:

```html
<p> This is a paragraph. But I want this text to be <span style="color:green;">green.</span> <p>
```

Results in this:
<p> This is a paragraph. But I want this text to be <span style="color:green;">green.</span> <p>

### Files from Lecture
Click <a href="#" target="_blank">here </a> for the finished code from today's lecture.

### Lecture Video