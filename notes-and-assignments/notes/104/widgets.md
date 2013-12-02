Social Media Widgets
====================

### Media Embeds

Many social media sites allow you to embed widgets on your own site for a specific peice of functionality. For example, if you want to embed a YouTube video on your site, you can easily copy out a piece of HTML embed code (typically via an iFrame element) that they offer. 

An iFrame in short is a tag that allows you to embed another webpage onto your site. Head over to Youtube, select a video, and on the video view page, click on Share -> Embed, and you will be given some iFrame HTML code that allows you to display that video on your own page. Vimeo also has similar functionality.

```html
<iframe width="560" height="315" src="//www.youtube.com/embed/ZsupViGHy_0" frameborder="0" allowfullscreen></iframe>
```

One thing to note, this will NOT work if you are viewing your page from the file system (file://). If you want this to work, change the src attribute and add in http://.

Other media embeds you might want to explore include:

* Google Maps
* Soundcloud

### Twitter Widgets

You can put an embeddable Twitter widget on your site by visiting the [https://twitter.com/settings/widgets](https://twitter.com/settings/widgets). The steps to build a Twitter widget are pretty intutitive. Also note that you must have a Twitter account in order to set up a widget.

Twitter will give you some HTML and Javascript to add to your page, like the following:

```html
<a class="twitter-timeline" href="https://twitter.com/uscitp" data-widget-id="407342245495336961">Tweets by @uscitp</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
```
