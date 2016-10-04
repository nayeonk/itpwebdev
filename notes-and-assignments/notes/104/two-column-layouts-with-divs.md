Two-Column Layouts with divs
============================

### To-do for today's lecture
* Refer to this article for today's lecture: <a href="http://www.nytimes.com/2016/09/08/technology/iphone-7-apple-headphone-jack.html" target="_blank">http://www.nytimes.com/2016/09/08/technology/iphone-7-apple-headphone-jack.html</a>
* Download these images:
    1. <a href="/images/iphone_article_img01.png" target="_blank">Article Image01</a>
    2. <a href="/images/iphone_article_img02.jpg" target="_blank">Article Image02</a>
    3. <a href="/images/iphone_article_img03.jpg" target="_blank">Article Image03</a>

### Layouts in web pages
So far we have built very simple web pages. Now it's time to look at how other, more complicated websites are building their web pages. How do other websites structure and display their content? Remember that websites, in their simplest form, are just another way to display information about something. So it is very important that a website is structured or laid out in a way that is easy for users to find important information quickly. If you look closely at popular websites, you may start to notice that most websites follow a certain pattern in how they organize content. There are certain tried-and-true ways to lay out content. **two-column** layout is one of them.

The **two-column layout** is most commonly seen in typical news article pages. Take a look at a New York Times article, for example:

<img src="images/lectures/twocolumn.jpg" width="60%" />


We can break down this article into sections like below. Note the article and sidebar section. They are two sections that are side by side, making two columns. The article section is a little wider than the sidebar section. This is typical of a **two-column layout.** There is usually one wider section which contains the more important information (like the news article itself) and one skinnier section which contains extra information (like related ads and articles).

<img src="images/lectures/twocolumn-sectioned.jpg" width="60%" />

### Setting up columns with `<div>`

Ok - now that we get the concept of **two-column layouts** how do we build them using HTML and CSS?

The answer is `<div>`!

Last weeek we talked about the `<div>` tag. It is a HTML tag that is used to create sections or "boxes." It is a the building block of web pages. 

Remember that divs naturally:
1. have a width of 100% - goes across the entire browser
2. is as tall as whatever content inside it is

#### 3 Steps to create a two-column layout:
1. Start with a `<div>` that will act as a container for the entire web page. Let's give it an ID of outercontainer just to keep organized.
2. Within the outercontainer `<div>`, add a `<div>` per section you want. So if we want to re-create the New York Times article as above, it would look like the following: 

```html
...
<div id="outercontainer">
    <div id="header">
        Header content would go in here (e.g. "New York Times")
    </div>

    <div id="headline">
        Headline content would go in here (e.g. "Apple Moves Toward a Wireless Future, One Tweak at a Time")
    </div>

    <div id="article">
        Article content would go in here
    </div>

    <div id="sidebar">
        Sidebar content such as the ad and related articles would go in here
    </div>

</div>
...
```
3. Set floats and widths for divs that need to go side-by-side. Note that divs naturally like to stack veritcally on top of each other. They do not like to go side-by-side with other divs. 

```css
...
    <style>
        #outercontainer {
            /* This is the container that contains the article and sidebar divs */
            width: 800px; /* Picked a random number for the container width*/
        }
        /* Make sure the article and sidebar widths equal the outercontainer width */
        #article {
            float: left; /* Float forces this div to go to the left as possible */
            width: 600px;
        }
        #sidebar {
            float: left; /* Float forces this div to go to the left as possible */
            width: 200px;
        }
    </style>
...
```


### Margin and Padding
You may want to start adding some whitespace around your content. There are two ways to achieve this using CSS - **margin** and **padding**.

#### Margin
* Use when you want whitespace **outside** an element
* Example - the purple div is way too close to the text on the right : 

<img src="images/lectures/twocolumn-margin1.png" style="width: 50%;"/>

* Use margin to create space outside the purple div.
* You can specify margin-left, margin-right, margin-top, and/or margin-bottom

```css
.purple-div {
    margin-right: 20px;
}
```
<img src="images/lectures/twocolumn-margin2.png" style="width: 50%;"/>



#### Padding 
* Use when you want whitespace **inside** an element - useful for divs
* Example - the text inside the white div is way too close to the edge

<img src="images/lectures/twocolumn-padding1.png" style="width: 50%;"/>

* Use padding to create space inside the white div.
* You can specify padding-left, padding-right, padding-top, and/or padding-bottom

```css
.white-div {
    padding-right: 20px;
    padding-left: 20px;
}
```

<img src="images/lectures/twocolumn-padding2.png" style="width: 50%;"/>


### Calculating widths with margin and padding
* Note that padding and margin gets added to the the overall width of your div
* For example, if a div has a width of 300 pixels and a margin left and right of 10 pixels, the width of this div now becomes 300 + 10 + 10 = 320 pixels. Any padding also increases this final width. 
* So if we added some padding and margin to the article and sidebar divs from the above example, we would have to adjust article and sidebar divs to ensure everything fit within the container div. Sample below:

```css
...
    
        #outercontainer {
            width: 800px; /* Say we still want everything to be kept at 800px width */
        }
        /* Make sure the article and sidebar widths equal the outercontainer width */
        #article {
            float: left;
            width: 580px; /* Width changed from 600px to 580px to account for the extra 20px from padding. */
            padding-left: 10px;
            padding-right: 10px;
        }
        #sidebar {
            float: left; 
            width: 170px; /* Width changed from 200px to 170px to account for the extra 30px from padding. */
            margin-right: 15px;
            margin-left: 15px;
        }

        /* Total width of article and sidebar divs is 580 + 10 + 10 + 170 + 15 +15 = 800 */
    
...
```

### Centering text and sections
Centering can get tricky. Here are the two ways you should be vertically centering:

1. **text-align**
    * Use when you want to align contents **inside** of an element to the center
    * Example:

    <img src="images/lectures/twocolumn-center-text.png" style="width:60%;">

2. **margin-left: auto; margin-right: auto**
    * Use when you want to align an entire element to the center of the browser
    * Make sure you also give this element an width
    * Example:

    <img src="images/lectures/twocolumn-center-margin.png" style="width:60%;">


### Files from Lecture
Click <a href="http://codepen.io/nayeon/pen/vXLrLp" target="_blank">here </a> to see the finished code from today's lecture.

### Lecture Video
<iframe width="560" height="315" src="https://www.youtube.com/embed/ju0786uFdXE" frameborder="0" allowfullscreen></iframe>