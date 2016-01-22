Unit Testing
============

For this assignment, we are going to revisit the ReviewsReport constructor assignment and write unit tests for it using the Jasmine 1.3 testing framework. You can either use the HTML page spec runner that Jasmine provides or Karma.

Write tests for the following methods:

* report.getAverageRating()
* report.getAverageCost()
* report.convertCostToDollarSign()
* report.summarize()

For the data, you dont have to use the same data that I provided last time. You can use different fixture data in the tests.

Once you get your tests passing, refactor the _getAverageRating()_ and _getAverageCost()_ methods to use the native _.forEach()_ method on arrays instead of a _for_ loop. The _forEach_ method is a method on Array.prototype implemented in modern browsers.

```
var myArray = [1, 2, 7];

myArray.forEach(function(num) {
	console.log(num);
});

// 1
// 2
// 7
```

Your tests should not require any changes in order to pass. You are simply changing the implementation of _getAverageRating()_ and _getAverageCost()_ but the return values of these methods are still the same.

### findWithLowestRating(number)

Lastly, create a method called _findWithLowestRating(number)_ on the ReviewsReport prototype. When this method is called, it should return a new array of all objects where the rating is greater than or equal to the _number_ parameter.

```js
report.findWithLowestRating(3); // matches all reviews with a rating of 3 or more
```

Here is the solution to the previous assignment if you'd like to start with this instead of your own: https://bitbucket.org/skaterdav85/reviews-report-constructor/src/8c1aaee74f5585c5637bbbfb9f9503a337622a80/ReviewsReport.js?at=master