Web APIs
========

* API = Application Programming Interface
* A __user interface__ is the means by which a human/user interacts with a computer program. 
* For example, web pages on the Amazon site are one way how us users interfact with Amazon's business / data / functionality from a __user's__ point of view. An interface that is easy for the user to use.
* An API is how a programmer interfaces with data / functionality of another business

### How REST APIs work

* In order to get access to iTune's data, we use their API. 
* They have specific endpoints (urls) for the different types of data. 
* One API endpoint will return songs for a particular artist. Another endpoint will return all albums for an artist.
* From PHP we can capture the data returned from some endpoint, and then do something with it (like render it on our web page).

### Data Formats

* Data returned from APIs has to be structured in some way.
* Data is typically structured in JSON (JavaScript Object Notation) or XML.
* These formats are very easy to work with programatically.


### Objects

* Objects are data structures that contain more than one variable. This collection of variables are typically related. We can create objects in PHP using the stdClass.
* Classes are blueprints of objects.
* Learning about classes and objects is an in-depth topic but for working with APIs that return JSON, just having an understanding of stdClass objects is sufficient