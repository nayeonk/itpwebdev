Services
========

So you're building your application and you need to do things like fetch data from an API.Maybe you are tasked with invoicing and billing. Where do you put this stuff? Should you jam this functionality into Models and Controllers? No. You should create separate classes for this. Typically these extra components are called services. Think of a service as some type of component that your application needs but it doesn't necessarily fit within a Model, View, or Controller. 

Your classes should follow the Single Responsiblity principle. According to Wikipedia, the Single Responsiblity priciple is as follows:

> the single responsibility principle states that every class should have a single responsibility, and that responsibility should be entirely encapsulated by the class. All its services should be narrowly aligned with that responsibility.

Models are for working with your database layer. Controllers are responsible for intercepting HTTP requests, intermediating between models and views, and sending HTTP responses back to the user. Functionality like API calls or invoicing should not be part of controllers. They should be in their own classes dedicated to working with that API or invoicing. This way we have classes that are narrowly focussed allowing for modularity, reusability, and testability.

Because Laravel uses Composer, we can define our own set of classes anywhere we want! We don't have to jam all of our application's funcationality in a Model or Controller where it might not make the most sense or allow for reusability.

For example, say I want to create the following class:

```php
namespace Itp\ItunesApi;

class ItunesSearch {
	
}
```

A common place to put your own custom classes is within the app folder under a root namespace. One common root namespace is the name of your company or application.

```js
{
	"autoload": {
		"psr-0": {
			"Itp": "./app/"
		}
	}
}
```

Once you've done this, run composer dumpautoload to regenerate the autoload file. Now you can use this class in your application.