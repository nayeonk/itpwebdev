Cloud Data Stores
=================

* Simple data store exposed as a web service
* Think of Parse as a "Backend-as-a-Service"
* Store off your JS objects under particular keys / "tables" and you can query the stored data from Javascript
* Similar to NoSQL databases like Redis, MongoDB, and CouchDB but leaving the administration and management of the server to Parse
	* NoSQL is a generic term that is used to refer to the family of data stores that don't follow the typical Relational Database model
	* The data is not relational
	* SQL is not used to query the database
	* No schema -- you dont have to plan out too far ahead to define the structure of your database.
	* potentially faster development time since you don't have to write complex SQL queries
	* it is very fast
	* scalable for large loads of traffic
* Simple approach to persist data in your web applications without having to spin up a database and worry about a backend
* Most (if not all) serve responses as JSON
* Some are 100% pure Javascript so you don't have to worry about using a particular server-side technology. You just use their JavaScript library to request and receive your data.

### APIs

* [Parse](https://parse.com/)
* [Open Key Val](http://openkeyval.org/)
* [Stack Mob](https://www.stackmob.com/)

### Parse Overview

1. Sign up for an account
2. Visit the [Dashboard](https://parse.com/apps) to create a new App
3. Create a demo page (see below) and include the Parse JavaScript library on your page. See [Javascript SDK starter guide](https://parse.com/apps/quickstart#js/existing).
4. View your data being saved in teh Data Browser


### Saving data with Parse

__1. Create a constructor function using Parse.Object.extend()__

```js
var Student = Parse.Object.extend("Student");
```

__2. Create instances using that Parse constructor__

```js
var herman = new Student();

herman.save({ first: 'Herman', last: 'Tran' }, {
	success: function(object) {
  		console.log(object);
	}
});
```

### Querying your data store using Parse.Query

```js
var query = new Parse.Query(Student);
query.equalTo('last', 'Tran');
query.find({
	success: function(results) {
		console.log(results);

		for (var i = 0; i < results.length; i++) {
			var student = results[i];
			console.log(student.get('first') + ' ' + student.get('last'));
		}

	}
})
```

__Query Constraints__

* equalTo()
* notEqualTo()
* limit()
* greaterThan()
* lessThan()
* ascending()
* descending()
* and plenty more ....

__and a more complicated example using method chaining like jQuery__

You'll also notice that Parse supports the use of promises to attach multiple callbacks to our asynchronous requests.

```js
var Song = Parse.Object.extend("Song");
var query = new Parse.Query(Song);

query
	.equalTo('artist', 'eminem')
	.lessThanOrEqualTo('playCount', 2)
	.descending('playCount')
	.find()
	.then(function(results) {
		console.log(results);

		for (var i = 0; i < results.length; i++) {
			var song = results[i];
			console.log(song.get('title') + ' ' + song.get('playCount'));
		}
	});
```

[See JavaScript docs on more Parse methods](https://parse.com/docs/js_guide#queries)