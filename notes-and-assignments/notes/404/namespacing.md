Objects for Application Namespacing
========

* Object literals are great for namespacing your application. 
* You can organize units of code using nested object literals, similar to a directory structure, or packages in other languages.
* you can also create self-contained units that represent different widgets on the page or _modules_.
* this is just one approach to organizing your code

```js
var APP = {
  Utils: {}
};

APP.Utils.log = function() { /* implementation */ };
APP.Utils.isNumber = function() { /* implementation */ };

APP.Twitter = {
  lastFetched: '2013-09-25 08:15:32',
  fetchTweets: function() {},
  sortTweets: function(tweets) {
    /* implementation */
    return sortedTweets;
  };
};

APP.Player = {
  playlist: [ /* list of songs here */ ],
  play: function(song) { /* implementation */ },
  pause: function(song) { /* implementation */ },
  stop: function(song) { /* implementation */ }
};
```