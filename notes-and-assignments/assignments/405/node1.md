DVD Search App with Node
========================

Create a very simple dvd search application using Node, Express, and Sequelize ORM. You will simply create a page where a user can search by the DVD title and the award. 

### The Search Form

Route: `/`

* Form: GET method
* Text box for the dvd title
* Statically create the award select menu with the following values:
	* Oscar
	* Grammy

### Results

Route: `/dvds`

Display the dvd title and the award for each result. The title should be searched using a LIKE clause.