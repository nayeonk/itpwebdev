Basic HTML
==========

### Lecture Overview

*   What is a web page made of? HTML, HTML Tags/Elements/objects
*   Text Editors (Notepad, Komodo Edit)
*   Block elements: h1, h2 ... h6, p
*   Inline elements: em, strong, anchors;
*   Dont forget to close your tags!
*   Creating links with anchor tags
  *   HTML attributes (href, title, target attributes), 
  *   Absolute paths and relative paths for anchor href
*   Unordered and Ordered Lists
*   Properly nesting HTML elements
*   HTML document structure
*   Self closing tags: break tag, horizontal rule
*   style="background-color: YOUR COLOR HERE";
*   FTP, USC Server Space
*   Lab: First Web Page

### Basic HTML

*   HTML and CSS are the languages we use to create web pages. Today we will cover HTML and next class we will start CSS.
*   Web servers store and serve web pages.  Browsers retrieve pages and render
      their content based on the HTML and CSS.
*   HTML is an abbreviation for **HyperText Markup Language** and is used to
      structure your web page.
*   CSS is an abbreviation for **Cascading Style Sheets** and is used to control
      the presentation of your HTML or in other words, the style characteristics of elements such as color, font, size, borders, etc.
*   Using HTML, we mark up content with tags to provide structure.  We call
      matching tags, and their enclosed content, **elements**.
*   An element is composed of three parts: an opening tag, content and a closing
      tag.  There are a few elements, like &lt;img&gt;, that are an exception to this rule.
*   **Opening tags** can have attributes. Attributes give you a way to provide
      additional information about an element.
*   **Closing tags** have a "/" after the left angle bracket, in front of the tag name
      to distinguish them as closing tags.
*   Your pages should always have an &lt;html&gt; element along with a &lt;head&gt;
      element and a &lt;body&gt; element.
*   Information about the web page goes into the &lt;head&gt; element.
*   What you put into the &lt;body&gt; element is what you see in the browser.
*   Most whitespace (tabs, returns, spaces) are ignored by the browser, but you
      can use these to make your HTML more readable (to you).

#### Skeleton for all HTML files

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

#### Tags (HTML Elements/Objects)

* To tell the browser about the structure of your page, use pairs of tags around your content.
* Element = Opening Tag + Content + Closing Tag
* An element can have one or more attributes. **Attributes** are always written the same way: first comes the attribute name, followed by an equals sign, and then the attribute value surrounded in double quotes.
*   Some tags are **block** elements.  They are always displayed as if they have a linebreak before and after them.  Some examples are &lt;h1&gt; ... &lt;h6&gt;,
      &lt;p&gt;, and &lt;blockquote&gt;.
*   Other tags are **inline** elements.  They appear "in line" within
      the flow of the text in your page.  Some examples are &lt;b&gt;, &lt;span&gt;, and
      &lt;a&gt;.
*   Elements that don't have any HTML content by design are called **empty elements**.
      When you need to use an empty element, you only use an opening tag (no closing tag).
      Some examples are &lt;br&gt;, &lt;img&gt;, and &lt;hr&gt;.  To be XHTML compliant,
      close the tag within itself.  Within the tag, put a space after the tag name, then
      a forward slash (/), and finally close the tag.  Two examples are &lt;br /&gt; and
      &lt;hr /&gt;.

#### Links (Anchors)

*   Anchors are inline elements
*   When you want to link from one page to another, use the **&lt;a&gt;** element.
*   The _href_ attribute of the anchor element specifies the destination of the link.
*   What is placed between the opening and closing **&lt;a&gt;** tag is the label for the link.
      The label is what you see on the web page.  By default, it's underlined (and usually
      blue) to indicate you can click on it.
*   You can use words or an image as the label for a link.
*   When you click on a link, the browser loads the web page that is specified
      in the _href_ attribute.
*   You can link to files in the same folder, or files in other folders.
*   A **relative path** is a link that points to other files on your website relative
      to the web page you are linking from.
*   Use ".." to link to a file that is one folder above (or parent folder)
      the file you are linking from.
*   You can use relative paths or URLs in your anchor element's _href_ attribute to link to other web pages.  For other pages in your site,
      it's best to use relative paths, and use URLs for external links.
*   **Absolute paths** are those that include the entire pathname (URL).
*   Use the _id_ attribute to create a destination anchor in a page. Use
      # followed by a destination anchor id to link to that location in a page.
*   To help accessibility, use the _title_ attribute to provide a description
      of the link in anchor elements. This will create a hover effect that displays the title.
*   Use the _target_ attribute to define where to open a linked document.
      Set the _target_ attribute to "_blank" for a new browser window.
*   When your path to an image is incorrect, you will see a broken image on your
      web page.
*   __Do not use spaces in names when you are choosing names for files and folders
      for your website.__

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

#### Lists

#### Ordered and Unordered Lists

*   Constructing an ordered or unordered list requires two elements that, when used together,
      form a list. One element determines what kind of list you are creating while the
      other one marks up each list item.
*   To create a list you put each item in an &lt;li&gt; element.
*   An **ordered lists** starts with the &lt;ol&gt; tag.
      Inside this, put each list item in a &lt;li&gt; element.  End it with the
      &lt;ol&gt; tag.
*   An **unordered list** starts with the &lt;ul&gt; tag.
      Inside this, put each list item in a &lt;li&gt; element.  End it with the
      &lt;ul&gt; tag.
*   Inside a list item you can put paragraphs, line breaks, images, links, and other lists.

#### Unordered List Example

*   Chocolate
*   Vanilla
*   Mint
  
```html
<ul>
	<li>Chocolate</li>
	<li>Vanilla</li>
	<li>Mint</li>
</ul>
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
