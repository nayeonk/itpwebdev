Reviews Report Constructor
==========================

The goal of this assignment is to get familiar with the mechanics of constructor functions. You will be building a _ReviewsReport_ constructor function. This constructor will take a name for the report and some data that I provide you and will have methods that can perform calculations on and summarize the data. This assignment will not have any UI components so test out your methods using `console.log()` statements.

This is how your implementation should be used:

```js
var reportA = new ReviewsReport('Restaurant A 2014', reviews.restaurantA);
reportA.getAverageRating(); // 3.8333333333333335
reportA.getAverageCost(); // 2.1666666666666665
reportA.convertCostToDollarSign(2.1666666666666665); // '$$'

reportA.summarize();

// you will see the following logged to the console
{
	name: "Restaurant A 2014",
	averageStarRating: 3.8333333333333335,
	totalReviews: 6,
	averageCost: {
		numeric: 2.1666666666666665,
		symbol: "$$"
	}
}
```

And similarly for Restaurant B data:

```js
var reportB = new ReviewsReport('Restaurant B 2014', reviews.restaurantB);
reportB.getAverageRating(); // 4.142857142857143
reportB.getAverageCost(); // 3.857142857142857
reportB.convertCostToDollarSign(3.857142857142857); // '$$$$'

reportB.summarize();

// you will see the following logged to the console
{
	name: "Restaurant B 2014",
	averageStarRating: 4.142857142857143,
	totalReviews: 7,
	averageCost: {
		numeric: 3.857142857142857,
		symbol: "$$$$"
	}
}
```

### convertCostToDollarSign(cost)

The _convertCostToDollarSign(cost)_ method takes a cost between values 1 and 4, 4 being the most expensive, and returns the equivalent in dollar signs as you have probably seen on Yelp.

* Less than 1.5 = $
* Between 1.5 (inclusive) and 2.5 (not inclusive) = $$
* Between 2.5 (inclusive) and 3.5 (not inclusive) = $$$
* otherwise = $$$$

### The data

```js
var reviews = {};

reviews.restaurantA = [
	{ 
		title: 'whatever title you want', 
		stars: 4, 
		cost: 2,
		description: '' 
	},
	{ 
		title: 'whatever title you want', 
		stars: 3, 
		cost: 1,
		description: '' 
	},
	{ 
		title: 'whatever title you want', 
		stars: 4, 
		cost: 3,
		description: '' 
	},
	{ 
		title: 'whatever title you want', 
		stars: 4, 
		cost: 3,
		description: '' 
	},
	{ 
		title: 'whatever title you want', 
		stars: 5, 
		cost: 2,
		description: '' 
	},
	{ 
		title: 'whatever title you want', 
		stars: 3, 
		cost: 2,
		description: '' 
	}
];

reviews.restaurantB = [
	{ 
		title: 'whatever title you want', 
		stars: 5, 
		cost: 3,
		description: '' 
	},
	{ 
		title: 'whatever title you want', 
		stars: 3, 
		cost: 4,
		description: '' 
	},
	{ 
		title: 'whatever title you want', 
		stars: 4, 
		cost: 4,
		description: '' 
	},
	{ 
		title: 'whatever title you want', 
		stars: 5, 
		cost: 4,
		description: '' 
	},
	{ 
		title: 'whatever title you want', 
		stars: 2, 
		cost: 3,
		description: '' 
	},
	{ 
		title: 'whatever title you want', 
		stars: 5, 
		cost: 4,
		description: '' 
	},
	{ 
		title: 'whatever title you want', 
		stars: 5, 
		cost: 5,
		description: '' 
	}
];
```

### Optional

If you'd like some extra practice with client side templating, take the summarized data for each restaurant and render it on the page using client-side templating.

### Submission

Submit your assignment to the TA and myself (dtang@usc.edu) as a zip file.