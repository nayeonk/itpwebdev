HTML5 Video
==============

Download demo video here: https://pdlvimeocdn-a.akamaihd.net/18557/499/350882759.mp4?token2=1430183251_1217fcbeb27043490fc936ff6c17628f&aksessionid=0eb1f131ed1897743bd033d3e0fb558382ade6951430168851

HTML5 has brought the web world abilities to do many things that were otherwise very difficult to do. One of them is video. Videos have been notoriously hard to add into a website. Thanks to iFrames, we were at least able to add videos into the website. However, they were still very difficult to manipulate to look to our liking. Thanks to HTML5's new tag, video, now it is very easy to add video and style it. The catch is that this feature is limited to modern browsers, but over the years it is becoming more and more supported by more browsers.


###The &lt;video&gt;  tag

Similar to the &lt;img&gt; tag, there is a &lt;video&gt; tag that is used to display videos. The code looks something like this:

	<video width="320" height="240" controls>
		<source src="movie.webm" type='video/webm;codecs="vp8, vorbis"'/>
		<source src="movie.mp4" type="video/mp4">
		<source src="movie.ogg" type="video/ogg">
		Your browser does not support the video tag.
	</video>

You see three different &lt;source&gt; tags because not all browsers support all video formats. In this case, the browser will first try to lad the .webm file. If the browser doesn't support it, it will move on to the second files, move.mp4. If that doesn't work, goes to the next source tag and so forth. 

####Attributes
There are a number of attributes you can use to manipulate what you see:

<img src="images/html5videoattributes.png" width="800" />

Source: w3schools.com

