Local Storage
====================================
Using HTML 5 Local Storage to keep data on clients browser

******************************************************************
Please download the following zip file and extract it to a folder:

Yuanbo's class: http://itpwebdev.herokuapp.com/starters/301/local_storage.zip

******************************************************************

David's LocalStorage [screencast](https://www.youtube.com/watch?v=W8SFylZ8Jh4)

What I will refer to as ¡°HTML5 Storage¡± is a specification named Web Storage, which was at one time part of the HTML5 specification proper, but was split out into its own specification for uninteresting political reasons. Certain browser vendors also refer to it as ¡°Local Storage¡± or ¡°DOM Storage.¡± The naming situation is made even more complicated by some related, similarly-named, emerging standards that I¡¯ll discuss later in this chapter.

#### Which browsers:
*	IE	8.0+
*	Firefox	3.5+
*	Safari	4.0+
*	Chrome	4.0+
*	Opera	10.5+
*	iPhone	2.0+
*	Android	2.0+

#### The localStorage Object
The localStorage object stores the data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year. it provides you 5mb of data stroage space compares to 4KB for cookie.

Similar to cookie, to save a piece of information, we need to first give a name as a reference, then the value. We can use the ".setItem()" method to achieve that. 

```js
//name->"age", value->25
localStorage.setItem("age", "25");
```

To retrieve the info from local storage, use the method ".getItem()", The information you got back is a datatype __String__, use "parseFloat()" to convert it to __number__ if you needed.
```js
//Should save 25 into var my age
var myage = localStorage.getItem("age");
```

You can save as many information as you want
```js
localStoage.setItem("firstname"."Yuanbo");
localStoage.setItem("lastname"."Wang");
localStoage.setItem("gender"."male");
```

You can remove one info from storage by using ".removeItem()" method
```js
//The firstname info should be erased from the storage.
localStoage.removeItem("firstname");
```

To clear all information from stroage, use ".clear()" method
```js
//This will clear all the information in the stroage.
localStroage.clear();
```

Up above, we listed the browser requirement for using Local Storage. But it's always nice to check before you run the local storage code. To do so, use "window.localStorage":
```js
//This will clear all the information in the stroage.
if (window.localStroage){
	//do something if window object has the localstorage object.
}
else{
	//notify users thier browser doesn't support local storage.
}
```

Further Readings & References:
*	http://diveintohtml5.info/storage.html
*	http://www.w3schools.com/html/html5_webstorage.asp
*	http://www.smashingmagazine.com/2010/10/11/local-storage-and-how-to-use-it/




