Animate(), jQuery UI
===========================================
Using jQuery to animate css changes. jQuery UI.
 
******************************************************************
Please download the following zip file and extract it to a folder: 
starter files http://itpwebdev.herokuapp.com/starters/301/animate_jquery_ui.zip
******************************************************************

### Custom animation with jQuery and animate(). jQuery UI library.

Animate works similar mechanically to the css() method, although with syntax differences. With animate you are not only setting css properties but animating the change (from the old property).

But before we start let's set up a simple page with two boxes:

```js
	<script src="http://webdev.usc.edu/jqm.js"></script>
	<script>
	$(document).ready(function(){

	});
	</script>

	<style>
	.box{
		background-color: yellow;
		width:100px;
		height:100px;
		font-size: 12pt;
		color:teal;	
	}
	</style>
	<div id="box1" class="box">
	Box1
	</div>

	<div id="box2" class="box">
	Box2
	</div>
```

Now in the past we implement a css change (through jQuery) in syntax such as:
```js
$("#box").css("background-color", "green");
```
And if we had multiple css changes, we would chain them into separate statements such as:
```js
$("#box1").css("background-color", "green").css("font-size", "24pt")
         .css("color": "red").css("width": "200px").css("height": "200px");
```
But there is another syntax option for setting multiple values through jQuery (which we will also use with animate). You can set up a "map". This involves creating a sub-block (with the squiggly brackets) and using a syntax of "property": "value", such as:
```js
$("#box1").css( {
	"background-color": "green",
	"font-size": "24pt",
	"color": "red",
	"width": "200px",
	"height": "200px"
});
```
So whereas a traditional css() statment has the property and value in quotes, separated by a comma, in a map a series of settings have the propetty and value (still) in quotes, with a colon in between them, and each subsequent prop-value pair separated by a comma.

The above is functionally the same as a chain of individual css() commands but is arguably a bit simpler for setting multiple things at once.

To use the __animate()__ method we similarly set up "maps" of css "property": "value" pairs.

Before we get into animate, we will take the above css map and layer it into a "click" bind:
```js
$("#box1").bind("click",function(){
  $("#box1").css({
      "background-color": "green",
      "font-size": "24pt",
      "color": "red",
      "width": "200px",
      "height": "200px"
  });
});
So now when you click on the first box jQuery changes those sets of attributes. Next we will animate the change.

	  
#### [animate()](http://api.jquery.com/animate/)

Most animate commands are going to have two parameters: the map of property:values to be set and the duration over which their changes should be animated.

So for instance we could animate expanding the height and width of the second box:
```js
$("#box2").animate({	
    "width": "200px",
    "height": "500px"
}, 2000);
```

_Notice there is no trailing comma (on the last property: pair) and that AFTER the "map" of values is closed that the second parameter of animate is the duration (in milliseconds). There are technically four parameters to animate(property, duration, easing, callback). Easing affects how the animation is rendered (the pacing of the animation) and callback let's you set up a routine to be run when the animation completes._

Ok so back to the new animation. Notice that when the the page loads that second square begins to animate to its new dimensions. Now we will add a bit more complexity to the animation. First we will add some CSS instructions in the page's style block to change box2 to an AP element and give it a position:
```js
#box2 {
	position:absolute;
    left: 0px;
    top: 150<x;
}
```

And then we will move the original animate() into a "click" bind and add changes to its left position and font-size:

```js
$("#box2").bind("click",function(){
		$("#box2").animate({	
			"width": "200px",
			"height": "500px",
			"left": "300px",
            "font-size": "36pt"
		}, 2000);
});
```

Now see that it moves (animated its left coordinate) as well. OK, finally we will add in some color changes:
```js
$("#box2").bind("click",function(){
		$("#box2").animate({	
			"width": "200px",
			"height": "200px",
			"left": "300px",
            "font-size": "36pt",
			"background-color": "green",
			"color": "red"
		}, 2000);
});
```
Wait. The other animations are working but not the color changes? The color changes happened immediately with no transitions/animations!?! Why?

We will back up a step and think about how the animations are implemented. If you wanted to animate the width of a box from say 100 to 500 pixels, how would you do that by hand? You would make the changes in steps, with slight pauses or delays in between each step. So starting from 100 you would change it to 110, 120, 130, 140... all the way up to 500. So what animate() does it calculate the difference (from 100 to 500) and the length/duration of the animation (such as over 2000ms) andfigure out how many in-between steps with what pauses are needed (such as +10 pixels every 1/10 of a second) to render the animation.

So basically ALL of the changes that are "animated" are changes in numbers/units, from dimensions and locations (left/top) to sizes (of fonts and borders). But a color shift is more complicated than just increasing or decreasing numbers. How can it calculate an "animation" between two color values (such as from red to yellow)?


#### jQuery UI

A very popular jQuery plug-in is jQuery UI. As a jQuery plug-in it requires jQuery to be loaded in addition to the jQuery UI code. jQuery UI adds some very popular form object functionality (such as pop-up calendars, sliuder objects and auto-complete), making divs draggable, and accordian objects (like the Spry widget). But what we are interested is jQuery UI's ability to extend animate() to crate color animations. We will double-back to some of the other elements of jQuery UI. You can also read about them at [jQueryUI.com](http://jqueryui.com)

So if we simply load a copy of the jQuery UI library into the page, then the previous jQuery animate() (without any changes) will start animating the color shifts. We just need to add the following right BELOW the script tag that loads jQuery:
```js <script src="http://webdev.usc.edu/jqui.min.js"></script>```

Now re-run the page and click on the second box... and voila the color of the background and text animates from the original color values to the new ones.

#### Chaining animate()

And then what if after it animates big you wanted to then animate it back to its original state? To do that you would chain a second animate at the end of the first that sets all the values back to their start. The code is a bit awkward to read but take a look at:
```js
	$("#box2").animate({	
		  "width": "200px",
		  "height": "200px",
		  "left": "300px",
		  "font-size": "36pt",
		  "background-color": "green",
		  "color": "red"
	  }, 2000).animate({	
		  "width": "100px",
		  "height": "100px",
		  "left": "0px",
		  "font-size": "12pt",
		  "background-color": "yellow",
		  "color": "green"
	  }, 2000);
```

If you implement that notice that there is no pause. So how about we add a delay in between the two? The final code with the surrounding bind is:
```js
  $("#box2").bind("click",function(){
		  $("#box2").animate({	
			  "width": "200px",
			  "height": "200px",
			  "left": "300px",
			  "font-size": "36pt",
			  "background-color": "green",
			  "color": "red"
		  }, 2000).delay(2000).animate({	
			  "width": "100px",
			  "height": "100px",
			  "left": "0px",
			  "font-size": "12pt",
			  "background-color": "yellow",
			  "color": "green"
		  }, 2000);
  });
```

If you don't like chaining the statements you can also just list them on separate lines. jQuery will execute animations and delays on the same object in the order given. So the above code could have also been:
```js
	$("#box2").bind("click",function(){
		  $("#box2").animate({	
			  "width": "200px",
			  "height": "200px",
			  "left": "300px",
			  "font-size": "36pt",
			  "background-color": "green",
			  "color": "red"
		  }, 2000);
		 $("#box2").delay(2000);	
		 $("#box2").animate({	
			  "width": "100px",
			  "height": "100px",
			  "left": "0px",
			  "font-size": "12pt",
			  "background-color": "yellow",
			  "color": "green"
		  }, 2000);
	});
```

That is a bit cleaned to read (and edit). Again, as long as a series of animate() and delay() commands are all targeting the same object, jQuery will automatically sequence them in order. Reminder: delay() will NOT sequence with other commands such as css(), html(), etc.

To see the sample page with all of the above interactions in place you can look at [anim1.html](http://webdev.usc.edu/itp302/lecture_examples/anim1.html).

We can also set up much more complex sequences/animations by using the "callback" parameter of animate(). The call back can be a function (to run at the end of the animation) or a direct set of code.

In the example below a direct function block (not a stored/named function) runs at the end of the animation -- alering the html/content of the div AFTER the first animation is complete:

```js
$("#box2").bind("click", function(){
		$("#box2").animate(  {
			"width": "200px",
			"height" : "500px",
			"left" : "300px",
			"font-size" : "36pt",
			"background-color" : "purple"
		}, 3000, function(){
			$("#box2").html("change");	
		});	
		$("#box2").delay(2000);
		$("#box2").animate({
			"left" : "0px",
			"background-color" : "teal"
		}, 3000 );
	});
});
```

To see an example of this version of the page go to [anim2.html](http://webdev.usc.edu/itp302/lecture_examples/anim2.html) and click on Box2b.


Designing sequenced animations to tell a story

So knowing how we can "time" elements together, how about we set up a sequenced animation like a presentation? We have a series of elements that we want to animate in. Some will fade in, some will come in from offscreen, etc. And we will be animating now only images but also text..

We will start with a page that has the "final" page -- think of it as the last frame or the presentation at the end. Load up [jquery_presentation_start.html](http://webdev.usc.edu/itp301/lecture_examples/presentation/jquery_presentation_start.html)

So notice the page has a series of photos, all with AP positions. Also notice that all of those AP layers are inside of a relative positioned div so that the overall presentation can be centered on the screen but the individual elements are AP in relation to that centered container (and not left/top to the browser edge). Also notice there is a green bar/div at the very bottom of the presentation. That is going to be our visual "progress" bar (the presentation length).

First we will bind mouseovers to #itp300, #itp301, #itp302 and #itp404 some jQ that fades down all logos not related to each class. And undoes the effect on mouseout. So for instance ITP301 involves HTML5 and CSS3 (d2), jQuery (d4) and CMS/Drupal (d3). So we want to fade out d1, d5 and d6:
```js
	$("#itp302").bind("mouseover", function(){
		$("#d1, #d5, #d6").animate({"opacity":"0.1"}, 1000);
	});
	$("#itp302").bind("mouseout", function(){
		$("#d1, #d5, #d6").animate({"opacity":"1.0"}, 1000);
	});
```

Great. Now we will go ahead and do the same for the other classes: ITP300 does NOT related to d1, d2, d3, d4, d6; ITP301 does not related to d1, d2, d3, d5; and ITP404 does not relate to d2, d3, d4, d5:
```js
	$("#itp302").bind("mouseover", function(){
		$("#d1, #d5, #d6").animate({"opacity":"0.1"}, 1000);
	});
	$("#itp302").bind("mouseout", function(){
		$("#d1, #d5, #d6").animate({"opacity":"1.0"}, 1000);
	});

	$("#itp300").bind("mouseover", function(){
		$("#d1, #d2, #d3, #d4, #d6").animate({"opacity":"0.1"}, 1000);
	});
	$("#itp300").bind("mouseout", function(){
		$("#d1, #d2, #d3, #d4, #d6").animate({"opacity":"1.0"}, 1000);
	});

	$("#itp301").bind("mouseover", function(){
		$("#d1, #d2, #d3, #d5").animate({"opacity":"0.1"}, 1000);
	});
	$("#itp301").bind("mouseout", function(){
		$("#d1, #d2, #d3, #d5").animate({"opacity":"1.0"}, 1000);
	});

	$("#itp404").bind("mouseover", function(){
		$("#d2, #d3, #d4, #d5").animate({"opacity":"0.1"}, 1000);
	});
	$("#itp404").bind("mouseout", function(){
		$("#d2, #d3, #d4, #d5").animate({"opacity":"1.0"}, 1000);
	});
```

To see this version you can go to [jquery_presentation1.html](http://webdev.usc.edu/itp301/lecture_examples/presentation/jquery_presentation1.html).

But of course the core idea of this demo is to create a presentation. So first we need to plan out the sequence of events. We have four classes to describe. So if each class had a 10 second animation. Then we could break it down as:
*	At 0 (start)...
*	At the animation start move #d1, #d2, #d3, #d4, #d5 and #d6 to left: -300px (just use css -- not an animation)
*	Hide #title. Change the content of #title to "ITP302: Advanced Web Publishing". Fade in title.
*	Hide #message. Write information about ITP302 into message box. Animate() in message.
*	Animate back to their original locations #d2, #d3 and #d4 a staggered times (with delays() in front of each). All actions should be completed/stopped by 10000 (10 seconds).

So this first step would be:
```js
	$("#message").bind("click", function(){
		$("#d1, #d2, #d3, #d4, #d5, #d6").css("left","-300px");
		//  Hide #message. Hide title. Change the content of #title to "ITP302: Advanced Web Publishing". Fade in title.
        // hide #message. Write information about ITP302 into message box. Animate() in message.
        // Animate back to their original locations #d2, #d3 and #d4 a staggered times (with delays() in front of each).
        // All actions should be completed/stopped by 10000 (10 seconds).
		$("#title").hide().html("ITP302: Advanced Web Publishing").fadeIn("1000");
		$("#message").hide().html("ITP302 is a follow up to ITP104. It teaches many areas of publishing without requiring learning programming or scripting.


Students learn HTML5 and CSS. They also work with jQuery on a non-technical level to add interactivityt to pagesStudents also learn Responsive Web Design (RWD) for pages that adapt to different screens. 

And they also learn how to develop sites specifically for mobile devices.

Plus CMS like Drupal, podcasting, Search Engines, and more...").fadeIn(1000)
		$("#d2").animate({"left":"6"},1000)
		$("#d3").animate({"left":"459"},1000)
		$("#d4").animate({"left":"229"},1000)
	});
	
```


Ah but all of the animations happen at once. If I wanted to delay some of them I would need to put in some delay() commands. So editing just the last three instructions:
```js
		$("#d2").animate({"left":"6"},1000)
		$("#d3").delay(3000).animate({"left":"459"},1000)
		$("#d4").delay(5000).animate({"left":"229"},1000)
```

Now it is pretty nicely sequenced.

Or you can go to [jquery_presentation2a.html](http://webdev.usc.edu/itp301/lecture_examples/presentation/jquery_presentation2a.html).

Ok so how about if at the end of that section we start setting up the second entry: ITP300? For that we will:

*	At 10000...
*	Move all of the logos back to -300px
*	Hide #title. Change it to ITP300: Database Web Development. Fade in the title.
*	Hide message. Enter new message copy. Fade in message.
*	Animate in #d5. Use a longer animation since it is the only logo for that class.
So...
```js
		// at 10000 -- ITP300
		$("#d1, #d2, #d3, #d4, #d5, #d6").css("left","-300px");
		$("#title").hide().html("ITP300: Database Web Development").fadeIn("1000");
		$("#message").hide().html("ITP300 ......").fadeIn(1000)
		$("#d5").animate({"left":"624"},6000)
```
Run it. Wait. The ITP300 info came in right away, and the #d5 logo started in right away too. So we need to delay the starts...

```js
		$("#d1, #d2, #d3, #d4, #d5, #d6").delay(1000).css("left","-300px");
		$("#title").delay(9000).hide().html("ITP300: Database Web Development").fadeIn("1000");
		$("#message").delay(9000).hide().html("ITP300 ......").fadeIn(1000)
		$("#d5").delay(10000).animate({"left":"624"},6000)
```

But wait. Certain things are still not sequencing properly. But that is because delay() only really works well with animate and on the same objects. So finally let's retro-fit both routines to ONLY use animate for everything:

```js
		$("#d1, #d2, #d3, #d4, #d5, #d6").animate({"left":"-300"}, 0);
		//  At 0 -- ITP302 -- Hide #message. Hide title. 
        // Change the content of #title to "ITP302: Advanced Web Publishing". Fade in title. 
        // hide #message. Write information about ITP302 into message box. Animate() in message. 
        // Animate back to their original locations #d2, #d3 and #d4 a staggered times (with delays() in front of each).
        //  All actions should be completed/stopped by 10000 (10 seconds).
		$("#title").animate({"opacity":"0.0"}, 0).html("ITP302: Advanced Web Publishing").animate({"opacity":"1"}, 1000);
		$("#message").animate({"opacity":"0.0"}, 0).html("ITP302 is a follow up to ITP104. It teaches many areas of publishing without requiring learning programming or scripting.

 Students learn HTML5 and CSS. They also work with jQuery on a non-technical level to add interactivityt to pagesStudents also learn Responsive Web Design (RWD) for pages that adapt to different screens. And they also learn how to develop sites specifically for mobile devices.

Plus CMS like Drupal, podcasting, Search Engines, and more...").animate({"opacity":"1"}, 1000);
		$("#d2").animate({"left":"6"},1000)
		$("#d3").delay(3000).animate({"left":"459"},1000)
		$("#d4").delay(5000).animate({"left":"229"},1000)
		
		// at 10000 -- ITP300
		$("#d1, #d2, #d3, #d4, #d5, #d6").delay(1000).animate({"left":"-300"}, 0);
		$("#title").delay(9000).animate({"opacity":"0"},0).html("ITP300: Database Web Development").animate({"opacity":"1"}, 1000);
		$("#message").delay(9000).animate({"opacity":"0"},0).html("ITP300 ......").animate({"opacity":"1"}, 1000);
		$("#d5").delay(10000).animate({"left":"624"},6000)
	});
```

Or you can go to [jquery_presentation2b.html](http://webdev.usc.edu/itp301/lecture_examples/presentation/jquery_presentation2b.html).

But wait. The second text (ITP300) is kicking in right away and not waiting until the second animation. That is because html() does not sequence (wait) for delays like animate. So to really build this out we would probably need to create separate divs for each title and descriptions (all in the same location and using animate to fade their opacity up and down).

In the end having one sequence of timed animations is pretty easy to do. And can create a nice effect. But trying to get a number of sequences all timed up can be problematic... at least unless you use timers and can stop sequences/timers.

To see a simpler (and more frivolous) animations example look at the cartoon pitting Bugs Bunny against Sonic the Hedgehog in [race_end.html](http://webdev.usc.edu/itp302/lecture_examples/race_end.html).