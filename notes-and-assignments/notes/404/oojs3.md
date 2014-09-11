* Building your own jQuery, [JSBin](http://jsbin.com/EnEfuna/1/edit)
* Fluent interfaces / method chaining

### jQuery

* jQuery itself is a custom constructor function
* jQuery doesn't force you to invoke it using the new operator. If you don't do it, it will invoke jQuery with the new operator for you behind the scenes.
* jQuery plugins are functions/methods stored on the prototype property of the jQuery constructor function. _fn_ is just an alias for jQuery's prototype property