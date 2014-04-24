Project Requirements
====================

* Due Date: 4/28 by 11:59pm posted to your class page
* Late due date: 5/5 by 11:59pm posted to your class page
* <span style="text-decoration:line-through;">Project presentations: 5/12 at 4:30pm</span> Screencast YouTube link posted to your classpage

### Late Deadline 

If you are going to take advantage of the late deadline you MUST send an e-mail to the instructor and grader by the due date letting us know. Otherwise your project (whatever its status) will be graded as-is on the due date.

### Screencast Requirement

Students will create a short (less than 5 minute) screencast walking through their project. This gives you a chance to demonstrate all aspects of your site that I might miss when grading. In particular, specify where you used behaviors and where you implemented 2 of the site extras (jQuery plugin, image map, media embeds, facebook like button, etc).

Here are a few free screencast options:

* http://www.screenr.com/ (in the browser)
* quicktime on mac
* Jing - http://www.techsmith.com/jing.html

### Requirements

* Create a folder called <em>project</em> to hold all of your html files. This folder will be under <em>public_html/itp104/project</em>.
* Use some graphics program (Photoshop, Fireworks, Illustrator) to create a logo for your site
* Create a subfolder named <em>images</em> to hold all of your images
* Your main page (home page) should be called <em>index.html</em> under the <em>project</em> folder
* Your site must have at least 3 more HTML pages other than your<em> index.html</em> page
* Your site must use CSS. You should have one external stylesheet that all of your pages reference for elements that are repeated on all your pages (like a header, sidebar, navigation, and footer). You can use external or internal stylesheets for page-specfic styling.
* Set the titles (the title tag) on each of your pages. The title for your index page should be the name of your website such as Creative Custom Cakes. For the subpages, the title should include the name of the website as well as the specific navigation item. For example, on the Creative Custom Cake website the title for the Products page could be Creative Custom Cakes - Products.
* The header image/logo should be a link to the <em>index.html</em> page on all of the HTML pages.
* Your site must have a least 3 items in the navigation bar. Each navigation item must have a different style/state when the user rolls over/selects that item.
* Each page must have a navigation bar in order to be able to access all of the pages of your website. The navigation bar should look the same on all pages. For each page that corresponds to a navigation element, the different style/state should be used. For example, if you had an About page, then in your navigation the About navigation element should be highlighted in some way to let the user know which page within the navigation they are on.
* Your site must contain at least one background image. The background image could be a repeated gradient for the entire site, a repeated gradient for a div to highlight something on the page, or whatever else you can think of.
* Your site must contain at least one list that is NOT your navigation.
* Your site must contain at least one form. It does NOT need to use all of the form elements. Use the USC mail scripts like you did inyour previous assignment. Have the form send the email to your USC email address.
* You must use behaviors in at least two pages on your site in meaningful way. Any behaviors on the navigation bar do not count. Example behaviors include:
  * Create an AP Div (layer) that is hidden initially and then "revealed" by behaviors in a meaningful way such as for a tooltip.
  * In a form, use radio buttons to alter the contents in a textfield, textarea, or div. Each of the radio button could make a custom message appear inside the textfield, textarea, or div.
  * Use behaviors to display a striped-down browser window. A common use for this is for printing the current page. You will need to create a second page. When you trigger the behavior, display the new browser window specifing the size, and it should not have any of the normal browser attributes such as toolbars.
  * Photo gallery - you have several thumbnails surrounding a center image. Whenever each thumbnail is clicked, a larger version of that image is shown in the center.
  * Create a photo album where you have several images shown in a 3 by 3 square and they are all greyed out. When the user hovers over each photo, it turns the hovered image to a colored version of it.    
* Remove the USC notice on your pages.
* Implement <em>at least 2</em> of the following: 
	* an image map
	* jQuery plugin
	* Media embeds like YouTube, Vimeo, Soundcloud, Twitter, etc
	* Facebook “Like” button

### Remove USC Notice

Code to put in head of every page

In the HEAD of your document, paste in the following code: 

```html
<script>
<!--
/*
<body>
</body>
</html>
*/
-->
</script>
```

On any page that you place the above code within the head the USC Disclaimer should no longer appear. The USC Disclaimer can mess up script blocks, layers and code used to create new, dynamic documents/windows. A good practice is to place those 8 lines right under your open head tag. You can still create additional script blocks for a page's scripting, but I like to segregate that code.
