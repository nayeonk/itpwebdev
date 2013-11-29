jQuery .data()
==============

[jQuery's .data() method documentation](http://api.jquery.com/data/)

This method allows us to bind data to HTML elements. The .data() method is NOT restricted to primitive data types (strings, numbers, booleans). You can store complex types (objects) as well.

The great thing about the .data() method is that application data is not being stored in the DOM. Behind the scenes, jQuery is keeping a reference of your data and associating it with the element you are binding it to in memory.

__Example:__

```js

// store an object to this element
$('#some-list-item').data('song', { title: 'Break Stuff', artist: 'Limp Bizkit' });

// retrieve the object from that element
var song = $('#some-list-item').data('song');

```