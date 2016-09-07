Stylesheets & Divs
=================

### To-do for today's lecture
* Open up the web page we created together last week on textedit. For those that just added the class, you can grab a copy from here: http://codepen.io/nayeon/pen/NRKYjG
* Download these images:
    1. <a href="/images/greenpattern.jpg" target="_blank">Green Pattern</a>
    2. <a href="/images/raichu.jpg" target="_blank">Raichu</a>
    3. <a href="/images/pikachu-ketchup.jpg" target="_blank">Pikachu with ketchup</a>

### Stylesheets?
So far, we have used the style attribute to add CSS into our HTML. This has worked for us fine for now, but this can later get very messy.

We've been something like this: 

```html
<h1 style="color: blue;">This is a blue heading</h1>
```

One important practice in coding is **keeping things clean and organized**. As bigger a piece of software gets, it becomes more prone to errors and things going wrong. 

<img src="/images/softwarequality.jpg"/>

Therefore it is very important to keep code as clean and organized as possible. In the case of web pages, there is a way to organize HTML and CSS. The way to organize HTML and CSS is by separating CSS with **stylesheets**.

### How to implement stylesheets?
Stylesheets are started by adding the `<style>` tag inside the `<head>` element. Note the overall structure below. The styles are separated from HTML.

```html
<!doctype HTML>
<html>
    <head>
        <title></title>
        <style>
            /* CSS code will go here */
        </style>
    </head>
    <body>
        <!-- HTML code will go here -->
    </body>
</html>
```


Now that you have the stylesheet set up, you can start adding CSS! Think of a stylesheet as a list of instructions that tell elements (tags) in your HTML what to do. Below is sample CSS code that instructs all `<h1>` tags to have the color blue. Note the syntax. Brackets are used to indicate the beginning and end of a style instruction.

```html
...
<head>
    <style>
        h1 {
            color: blue;
        }
    </style>
</head>
<body>
    <h1>This is a heading</h1>
</body>
...
```

The above code would result in: 
<h1 style="color:blue;">This is a heading</h1>

You can add more than one CSS property per element. As a matter of fact, you can add as much as you want! Here is a sample:

```html
...
<head>
    <style>
        h1 {
            color: blue;
            font-style: italic;
            background-color: yellow;
        }
    </style>
</head>
<body>
    <h1>This is a heading</h1>
</body>
...
```

The above code would result in: 
<h1 style="color:blue; font-style:italic; background-color:yellow;">This is a heading</h1>

However, the above CSS rule means that **all** `<h1>` tags will have those CSS properties. For example, the following code:

```html
...
<head>
    <style>
        h1 {
            color: blue;
            font-style: italic;
            background-color: yellow;
        }
    </style>
</head>
<body>
    <h1>This is a heading</h1>
    <h1>This is another heading</h1>
</body>
...
```

will result in:
<h1 style="color:blue; font-style:italic; background-color:yellow;">This is a heading</h1>
<h1 style="color:blue; font-style:italic; background-color:yellow;">This is another heading</h1>

There are ways to choose just one or few elements to apply the CSS styles. One way is using a **class**. Below is a sample of declaring a CSS rule with a **class**.

```html
...
<head>
    <style>
        .title { /* Note that the only difference is adding a period before the name */
            color: blue;
            font-style: italic;
            background-color: yellow;
        }
    </style>
</head>
<body>
    <h1 class="title">This is a heading</h1>
    <h1>This is another heading</h1>
</body>
...
```

Result below. Note that now only the first heading has those styles but not the second `<h1>` tag because you specified.
<h1 style="color:blue; font-style:italic; background-color:yellow;">This is a heading</h1>
<h1>This is another heading</h1>

There are other ways to specify which elements will apply your CSS styles. We will talk more about this in future lectures.

###The `<div>` tag
Speaking of organizing code, the `<div>` tag is a new tag we will be using today that helps organize the structure of a web page. All a `<div>` tag does is it creates a container, aka a box. 

Here is a `<div>` in its simplest form:

```html
<div style="background-color:green;">Hi, I'm a div!</div>
```

Results in:
<div style="background-color:green;">Hi, I'm a div!</div>


Some default `<div>` properties:
* Takes up the entire width of the browser
* Always appears on the next new line
* The height grows automatically depending on how much content is inside. 

A good rule of thumb is to use `<div>` to organize a few common elements together. There is no set rule on how you should do this. This depends on what kind of web page you are creating and how you best believe it should be organized. 

We will continue to learn more about `<div>` and its uses for more complicated layouts.

<!-- ### Floats
Floats are a neccesary evil in web development. -->

### Files from Lecture
<!-- Coming soon. -->
Click <a href="http://codepen.io/nayeon/pen/kkWYZx" target="_blank">here </a> to see the finished code from today's lecture.

### Lecture Video
Coming soon.
<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/2WgSzgZju90" frameborder="0" allowfullscreen></iframe> -->