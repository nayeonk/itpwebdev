Backbone Part 2
===

* Take the reviews data listed below and render out all the reviews using Backbone collections, models, and views


```js
var reviewsData = [
	{
		title: 'well written and understandable',
		stars: 5,
		review: "Not only does the author know what he's talking about, he knows how to communicate it. As a long time Java programmer, many of the aspects of JavaScript were mysterious and obtuse, or at least the way they were explained made them seem that way. Scope and Closure are two of those aspects and now they seem simple obvious artifacts of the functional nature of the JavaScript language. Now all the patterns that the other books demonstrate but don't bother to explain seem much more clear. I can look at the language with new eyes and new understanding. Highly recommended for anyone that needs an under-the-hood understanding of JavaScript and anyone that wants to side-swipe smug job interviewers that want to trip you up with manufactured mis-understandable code."
	},
	{
		title: 'Great book for sorting the finer parts of JS',
		stars: 5,
		review: "Let me first start off by saying that I think this book is great! It is written very well and it seems as though Kyle is right beside you talking you through the book. The book is a short read and really attempts to focus on just a few parts of Javascript and explains them from multiple angles using code samples and just plain old explanation. What is great is that Kyle does not just rewrite what he read in another Javascript book/resource/documentation, trust me I read alot of books on programming including javascript and authors do paraphase(copy) other peoples explanations on topics and place it in their book. However Kyle, really put thought into explaining these topics from his own perspective that he thought would give his points the furthest reach."
	},
	{
		title: 'An intermediate-level book covering two essential topics that are not always well-understood by developers',
		stars: 4,
		review: "The book covers scope and closures, topics that are not always understood by JavaScript developers with working experience or developers coming from other languages. It's good that the book starts at an intermediate level and assumes you have basic JavaScript knowledge, so it does not have to cover syntax, loops, conditionals, objects, etc. If you are a beginner, stay away."
	}
];
```