Calendar
========

Using divs, create a web page that is a graphic calendar of your birth month. The calendar must include:

* The overall calendar should have a set width, and there should be a unique background color for the whole calendar
* Across the top of the calendar you should have a graphic in the background, with the name of the month and the year __on top of it__. This can be done through a background image in css and text in the cell. The text can be on "top" of the graphic, or to the side. Alternatively, if you prefer, you can create a graphic that has the month+year on top of an image. __Note: We will be starting graphic creation next week. So a self-created image is optional__.
* If the "month" graphic does not stretch across the entire top (the full width), then that top region should have a unique background color. 
* In the body of the calendar, which should have seven columns (for each day of the week). There should be one "header" row that lists the days of the month (at the top of each column).
* Each 'day' of the calendar should have the number representing that day.
* You need to select THREE special event or holiday days in your calendar. Your birthday should be one, plus two others. Each of these days MUST:
	* list the name/title of that day ("Patrick's birthday", "Thanksgiving", etc.)
	* feature a unique background color
	* have a small graphic in the cell for that day
* All of the days of the month should uniform sizes and should be relatively square.
* Styles: The CSS properties of main calendar box can be coded inline (directly its div tag), BUT the standard properties for the "day" boxes must be defined by creating a "class" named ".daystyle" and setting all the small box divs to that class. I.e. for the small "day" boxes their width, height, text-align, and other properties should all be set through a "class" entry in a stylesheet "style" block in the head of the page. 

### Some past examples:

* [Sample 1](http://itpwebdev.heroku.com/images/calendar_sample_1.gif)
* [Sample 2](http://itpwebdev.heroku.com/images/calendar_sample_2.gif)