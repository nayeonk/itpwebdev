

### Songs display

__Route:__ GET /songs

* Display all songs ordered first by play_count in descending order and then ordered by artist name
* Display songs in an HTML table or divs with the following data:
	* song title
	* artist name
	* genre
	* price
	* play count

### Song creation form

__Route:__ GET /songs/create

* Display an HTML form to enter songs into the song table
* artist and genre fields in the form should be select menus populated by the artist and genre tables in the database

### Song creation process

__Route:__ POST /songs

* Insert song into the songs table
* Redirect user to /songs route


### Models and Controllers

Make sure you create models and controllers instead of putting all of your logic directly in Route callback functions. You should have:

* SongsController
* Song model
* 