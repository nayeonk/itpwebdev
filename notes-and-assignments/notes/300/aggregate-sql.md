SQL Aggregate functions
===========================

#### SQL Aggregate Functions:   
* SQL functions that perform calculations on or to summarize data, such as counting the number of rows (records), adding all the numbers in a particular column, etc.
* Aggregate functions include Count, Sum, Min, Max and Avg
* You generally perform aggregate function on columns, such as Sum (order_total) to get a total sum of all order totals, or Count (orders) to get the total number of orders.
* You HAVE to assign aliases to aggregate functions to use their data. For instance, count(*) as numberofrecords would create a field (variable in that query) called 'numberofrecords' in the query, which you could display in your pages

#### Count:   
* A very important function. In fact, for non-accounting queries, probably the most important aggregate function.
* Can be used with *, such as Count(*) as totalrows, to simply count the number of rows (records)
* Count(column) counts the number of rows (records) that have data in the specified column. The basic use of this is to filter out records that do not have data (that are NULL) in a particular column. So Count (name) as total_names would count the number of rows that have valid data in the name column.

#### Sum:   
* Adds up the values in a specified column,
* So Sum(order_total) AS overalltotal would add together all of the values in the order_total column of the table and assign that value to a form variable (field) called overalltotal
* Sum can perform mathematical calculations internally. So a more efficient version of the calculation about might be Sum (items_ordered*item_price) which would, for each column (record), take the items ordered price multiplied by the item price, and add all of those totals together.

#### Min and Max:   
* Finds the highest or lowest amount in the specified column.
* So Max (ID) as maxid would find the current highest value in the ID column, whereas Min (order_total) as total_minimum would find the lowest value in the order total column.
* Can be used with dates. For example, Max (order_date) AS high_date would find the highest (most recent) date from the order date column.

#### Avg:   
* Calculates the average within a set of column values. I.e. it adds up all of the values and divides by the number of rows. Note: Like all aggregate functions, Avg ignores NULL values. So a null value in a column will not skew the average.
* So Avg(order_total) as avg_total would calculate the average amount for orders (value of the order total column).

#### Group By:   
* Group by organizes records into groups for purposes of aggregate functions. I.e. if I were to have a DVD query that said "SELECT count(*) as recordcount from dvd.titles GROUP BY genreID", then this would create not one count but rather separate counts (totals) for each sub-group of genre. I.e. it would group the resulting records by their genres, and then within each group count the number of rows.
* A better version of this query might be:

	```sql
		SELECT genre, count(dvd_titles.dvd_titles_id) as recordtotal
		FROM dvd_titles, genre
		WHERE dvd_titles.genre_id = genre.genre_id 
		GROUP BY genre
		ORDER BY genre
	```

	So the code:

	```php
		while ($currentrow = mysql_fetch_array($results)) {
			echo $currentrow["genre"] . ": " . $currentrow["recordtotal"];
		}
		Would output something like:
 		:128 Action Adventure: 783 Animation: 516 Children's/Family: 163 Classic: 127 Comedy: 1003 Documentary: 289 Drama: 1085 Foreign: 535 Games: 8 Horror: 504 Karaoke: 99 Music: 880 Musical: 93 Romance: 3 Sci-Fi: 349 Special Interest: 723 Suspense Thriller: 578 Television Programming: 148 Western: 105 
	```


__An EXAMPLE of both non-grouped "count" and group by count is on this page: [php](http://itp300.usc.edu/dent/aggregate_sql/count_examples.php) and [txt](http://itp300.usc.edu/dent/aggregate_sql/count_examples.txt)__

* Note: One important thing to understand is that GROUP BY does NOT actually sort the results according to the group by field. Notice how I included ORDER BY in my query? It was not actually necessary in this particular query, but in many instances where you are using GROUP BY you are also going to want to use ORDER BY on the same fields to explicitly ask the query to sort its results by certain column/s.

* When using GROUP BY, all fields in your SELECT statement must either be in aggregate functions or must be in the GROUP BY clause. What this means is that you cannot have data retrieval fields (like SELECT NAME) that are not part of the GROUP BY. So SELECT NAME, sum(*) with GROUP BY NAME is OK and SELECT NAME, sum(id) with GROUP BY name IS OK but SELECT NAME, sum(id) with GROUP BY ID is not because the field NAME is included in the Select statement, is NOT part of an aggregate function, yet is not part of the GROUP BY clause.

#### General comments on aggregate functions:

* Generally work best as calculation queries. I.e. do not generally combine well with data queries (see last GROUP BY bullet above).  
* Work well in groups. So for instance, one query might include a Count of all orders, a Sum of all order totals, a Max and Min of the highest and least order totals, an Avg of the order amounts, and the Max of the date for the most recent order.  
* Are MUCH more effective (in terms of processing time, server load, etc.) than counting records. I.e. SELECT count(*) from table is MUCH more efficient and quicker than performing a SELECT ID from table and then calculating the recordcount for that query, because the former example only had to retrieve one value from the database, whereas the latter example retrieved an entire recordset (of the IDs of every row) and a total number of records. Similarly, you could perform the mathematical calculations of Max, Min, Avg and Sum through Cold Fusion and loops through queries, but it would take MUCH more processor time and effort to do so.  

