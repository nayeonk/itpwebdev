Website Fundamentals
=====================

### Web page serving:
* Client (browser) requests a page from a domain
* Request processed by web server
* In most instances, web server sends a page back to client in packets
* With standard html pages, code is sent to client and web browser parses code locally ("client-side")
* But certain file types can be registered with the web server, so that requests for files of that type of passed to ANOTHER server or server-side program
* With server-side scripting languages like php and active server pages, pages are PRE-PROCESSED or executed by a program on the server.
* In the case of php, any tags that begin with cf are parsed by the php server. All other content (text, html tags, javascript, etc.) is left alone. The CF Server takes the page and executes any CF code, and then takes the new pages (with the static elements it left alone and the executed cf code with any result or output) and passes that back to the web server, which sends the executed page to the client.
* So the page the client receives has been stripped of all the cf code (and replaced with any output) before it reaches them
* Languages like CF and ASP use server-side scripting (instructions that are run on the server) as opposed to client-side scripting (such as Javascript rollover routines which are run by your browser and which the server passes along without executing).
* Finally, these second-level programs and server may in turn make calls to other servers, such as to database management systems or media servers. When you go to the site in which the content is derived from a database, a program on the server requested a certain recordset from a database - most likely using SQL or Structured Query Language.

### Dynamic, database-driven Web sites:
* Most typical (html) Web pages are static - they include content and browser instructions that are the same every time the page is retrieved and run.
* Dyamic pages have content that changes according to various factors.
* An example of static vs. dynamic would be Web news stories. If a news story was hand-coded, it would be a static page that was always the same.
* But imagine you stored all of your news articles in a database. And then you had a dynamic article page that was basically a template for laying out stories. It said that the headline goes in one place, and then the byline in another, and the body of the article in another. And then in that page there were place-holders for that content (HEADLINE, DATE, BYLINE, ARTICLE, etc.) Then that one pages could be used to display ANY article on the site. The page would just have server-side instructions telling it to load an article from the database, and to then display the different pieces of data from that database record (HEADLINE, DATE, BYLINE, ARTICLE, etc.) in the defined locations.
* In the above example, what would be sent to the client (after server-side execution) would look like static HTML code. Because after the scripting was run the output in each of the locations would be the actual content from the database, which would replace the "instructions" in the page.
* E-commerce product page example.
* User accounts, preferences and other information

### Truly dynamic pages:
* Serious Web sites use databases to store all sorts of content, but they also use Web programming in their pages for other purposes. These include standard conditional routines, use of variables, etc.
* To use an e-commerce site as an example, the site might need to parse through not just ONE record but hundreds. And so first it would need to display a result set (like in a search), and maybe it only shows 10 records at a time (with Next 10 and Previous 10 buttons). And then it has to be able to retrieve a selected record and show lots of detail (like the body of an article or the details of a product). And programming would be needed to add products to a shopping cart that persists across pages, perhaps to store your username and login information, etc.
* Conditional routines in particular are important to creating not just database queries but dynamic database queries, such as data searches that can have different criteria and arguments
