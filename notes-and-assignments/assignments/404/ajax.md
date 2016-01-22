AJAX with PHP and JSON
======================

1. Pick any API endpoint of your choice that delivers JSON. (You might want to pick one that you will use for your project)
2. Create a file that fetches the JSON data from that endpoint using PHP. This PHP script should be dynamic such that it uses query string data (url variables) in the API call. For example, if I had a script called _instagrams.php_, then one way to make it dynamic would be to pass an instagram hash in the URL, like _instagrams.php?hash=catsofinstagram_ and the API call to instagram would use that 'hash' query string variable
3. Create an HTML page with a search box and a button. When the button is clicked, it will take that search box value, pass it along in an AJAX request to your PHP script. Your PHP script will deliver JSON when the AJAX request finishes.
4. Client-side render the data on the page using Handlebars.

Each time I make a new search, the contents of the previous search should be wiped out.

To submit, upload your files to your USC aludra space. USC does support file_get_contents() calls so it _should_ work. If your PHP is more complicated then it might not work on the USC server. 

Whether it works or not on the aludra server, do ONE of the following:

1. Post a link to a zip of all your files for this assignment so that I can download them
2. Push up your code to Github or Bitbucket and link to it from your classpage.


