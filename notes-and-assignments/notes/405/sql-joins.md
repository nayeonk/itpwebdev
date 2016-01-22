SQL Joins
=========

### Inner Joins

In the examples below, we have a core table called _songs_ with 2 lookup tables called genres and artists. This represents something like a database for our iTunes library.

An __inner join__ is commonly used to join tables in a query. In the following example, I am looking up the genre and artist for each record in the core songs table. If a genre or artist exists in the lookup table, there was a match, and that record from the songs table will be returned in the result set. 

```sql
SELECT songs.id AS id, title, artist_name, genre, price, play_count
FROM songs, genres, artists
WHERE songs.genre_id = genres.id
AND songs.artist_id = artists.id
```

You can also create an inner join using the INNER JOIN keyword. 

```sql
SELECT songs.id AS id, title, artist_name, genre, price, play_count
FROM songs
INNER JOIN genres ON songs.genre_id = genres.id
INNER JOIN artists ON songs.artist_id = artists.id
```

### Left Joins

What happens if you want to return records where there might not be a match in a lookup table? For example, maybe you didn't fill out the genre for one of your songs so the genre is NULL. You want to show all the songs in your songs table with the joined columns but using an inner join will only return records that have a match in a lookup table for the joined column. The solution here is to use a __LEFT JOIN__.

The LEFT JOIN keyword returns all rows from the left table (song table), with the matching rows in the right table (genres or artists tables). If there is no value in the lookup table, the right table will return NULL (as opposed to not returning the record at all).

```sql
SELECT songs.id AS id, title, artist_name, genre, price, play_count
FROM songs
LEFT JOIN genres ON songs.genre_id = genres.id
INNER JOIN artists ON songs.artist_id = artists.id
```

You can join as many tables as you like and you can use both left joins and inner joins on different tables depending on your query requirements.

### Resources

* [A Visual Explanation of SQL Joins](http://blog.codinghorror.com/a-visual-explanation-of-sql-joins/)