Final Project Requirements
====================

### Important Dates
* Due Date: 12/4 by 11:59pm posted to your class page (syallbus says 6pm but there will be a 6 hour grace period)
* Late Deadline: 12/11 for 92% credit. If you would like the extension, you MUST email the grader and I before the first due date (12/4) letting us know you will take the extension. 
* Project Presentations: 12/14 7pm at KAP160. Everyone is required to attend, but presentation is required only for those that want extra credit.
	* Presentations generally take about 5 - 8 minutes. You explain to the class your project, generally highlighting some of the elements/aspects from your project proposal. Then you tour or demo your Web site for the class.
	* Make sure to sign up for presentation by 11/30

### Requirements

* Create a folder called <em>project</em> to hold all of your html files. This folder will be under <em>public_html/itp104/project</em>.
<!-- * Create a subfolder named <em>images</em> to hold all of your images -->

** HTML Requirements **
* Your main page (home page) should be called <em>index.html</em> under the <em>project</em> folder
* Your site must have at least 4 HTML pages, including your<em> index.html</em> page
* Set the titles (the title tag) on each of your pages. The title for your index page should be the name of your website such as Creative Custom Cakes. For the subpages, the title should include the name of the website as well as the specific navigation item. For example, on the Creative Custom Cake website the title for the Products page could be Creative Custom Cakes - Products.

** CSS Requirements ** 
* Your site must use CSS. You should have one external stylesheet that all of your pages reference for elements that are repeated on all your pages (like a header, sidebar, navigation, and footer). You can use external or internal stylesheets for page-specfic styling.

** Graphic Requirements **
* Use some graphics program (Photoshop, Fireworks, Illustrator) to create a logo for your site
* The header image/logo should be a link to the <em>index.html</em> page on all of the HTML pages.

** Components Requirements ** 
* Navigation Menu
	* Your site must have a least 3 items in the navigation bar. Each navigation item must have a different style/state when the user rolls over/selects that item.
	* Each page must have a navigation bar in order to be able to access all of the pages of your website. The navigation bar should look the same on all pages. For each page that corresponds to a navigation element, the different style/state should be used. For example, if you had an About page, then in your navigation the About navigation element should be highlighted in some way to let the user know which page within the navigation they are on.
* Background Image
	* Your site must contain at least one background image somwhere on the site. The background image could be a repeated gradient for the entire site, a repeated gradient for a div to highlight something on the page, or whatever else you can think of.
* List
	* Your site must contain at least one list that is NOT your navigation.
* Form
	* Your site must contain at least one form. It does NOT need to use all of the form elements. It does NOT need to send anywhere
* Behaviors
	* You must use behaviors in at least **two pages** on your site in meaningful way. Any behaviors on the navigation bar do not count. Example behaviors include:
		* In a form, use radio buttons to alter the contents in a textfield, textarea, or div. Each of the radio button could make a custom message appear inside the textfield, textarea, or div.
		* Use behaviors to display a striped-down browser window. A common use for this is for printing the current page. You will need to create a second page. When you trigger the behavior, display the new browser window specifing the size, and it should not have any of the normal browser attributes such as toolbars.
		* Photo gallery - you have several thumbnails surrounding a center image. Whenever each thumbnail is clicked, a larger version of that image is shown in the center.
		* Create a photo album where you have several images shown in a 3 by 3 square and they are all greyed out. When the user hovers over each photo, it turns the hovered image to a colored version of it.    
* Special Features 
	* Implement <em>at least 2</em> of the following: 
		* load a custom font
		* jQuery plugin
		* social media widget
		* any other embedded object (i.e. Google Maps, Sound Cloud, etc)
		* video (either iframed or using html5 video tag)

** Miscellaneous Requirements **
* Remove the USC notice on your pages.

### Remove USC Notice

Code to put in head of every page

In the HEAD of your document, paste in the following code: 

```html
<script>
/*
<body>
</body>
</html>
*/
</script>
```

On any page that you place the above code within the head the USC Disclaimer should no longer appear. The USC Disclaimer can mess up script blocks, layers and code used to create new, dynamic documents/windows. A good practice is to place those 8 lines right under your open head tag. You can still create additional script blocks for a page's scripting, but I like to segregate that code.
