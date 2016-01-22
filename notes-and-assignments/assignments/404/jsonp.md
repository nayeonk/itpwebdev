iTunes Search Application
=========================

For this assignment, you will create a page that allows a user to search for songs for an artist available on iTunes.

1. Create a form with a text box where the user can type in an artist name and a submit button. When the form is __submitted__ (not clicked), you will fire off a JSONP request to the iTunes Search API and render the results somewhere in the middle of the page.
2. Each search should only return 30 songs.
3. Your requests should only return songs, not music videos, podcasts, etc. (See the entity query string parameter in the API documentation.)
4. When new requests are made, the previous results should be replaced.
5. At minimum, you should display the following data:
	* track name
	* a picture of the album artwork for each song
	* track price
	* if it is explicit, show the explicit content icon. otherwise, dont show it. see the property _contentAdvisoryRating_
	* genre
7. If a bogus artist is typed into the search box, then I should see a message displayed in the middle of the page in red "No artist found".
8. For HTML rendering, use the Handlebars templating library.
9. If an artist contains 2 words in the name (like The Offspring), the spaces should be replaced with a + symbol, so that the artist string that is passed to the iTunes API is "The+Offspring". See the string replace function.
10. Style your final page with a little CSS


The API endpoint will return an object containing an array of data under the results key:

```js
{
	"resultCount": 30,
	"results": [
		"wrapperType": "track",
		"trackName": "Break Stuff",
		....
	]
}
```

You will need to iterate over the results array, creating an HTML fragment from the template for each song using Handlebars. You should have a template in your HTML that will represent a single song. Something like:

```html
<script type="template">
	<!-- HTML template for an indvidual song -->
</script>
```

Then you can append it to the main div. Remember to use selector caching.

* [iTunes API Documentation](http://www.apple.com/itunes/affiliates/resources/documentation/itunes-store-web-service-search-api.html)


