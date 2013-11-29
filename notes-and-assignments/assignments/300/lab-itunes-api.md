iTunes Search API
=================

Display a list of songs for a particular artist using the iTunes Search API. You should have a php script that fetches the contents, decodes the JSON string into php data structures, and use a foreach loop to iterate over all of the songs in the result set.

Here is a sample endpoint that returns JSON for Jack Johnson. Feel free to change the artist.

[https://itunes.apple.com/search?term=jack+johnson](https://itunes.apple.com/search?term=jack+johnson)

For each song, create a div and display the trackName, trackPrice, and album cover photo (stored under artworkUrl60).

[Full API Documentation](http://www.apple.com/itunes/affiliates/resources/documentation/itunes-store-web-service-search-api.html)