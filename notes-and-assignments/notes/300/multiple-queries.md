Multiple queries in one page
============================

Sometimes you need to have more than one database query in a page. For instance, on a search page with Rating and Genre drop-down menus, where you populate the values of the menu (the options), you would need to have two different database queries -- one for all genres and one for all ratings.

When you have multiple queries, that translates to multiple sql statements (select * from genre, select * from rating) and multipl result sets.

In that situation you can either set up different variables ($sql, $sql2, $results, $results2) or you can re-use the variables multiple times, overwriting the old values.

So in the above scenario you could build two sets of sql and two results sets at once, one containing the genres and one containing the results. Or you could load the genres, output them in a loop, then load the ratings (re-using the original $sql and $results variables) and output those in a loop.