Web Sockets
===========

### What are Web Sockets?

Web Sockets are a type of push technology that allow for servers to push data (think of updates) to a page AFTER a page has loaded. 

### Traditional Applications

If you think about a traditional application, once a page has already loaded, it doesnt receive updates unless it is refreshed. In order to render the most up-to-date information, the user has to manually refresh the page.

### Real-time Workarounds

One workaround that developers have come up with is to __poll the server__. That means your application has a timer that periodically makes AJAX requests to fetch new information. The drawback to this approach is that your application has to keep using resources to check if there are any updates. If there are no updates, then your application will still make AJAX requests to check if there is any new information. This can be a poor utilization of resources and can be pretty taxing on the client and server side of the application.

### Welcome to Web Sockets

With Web Sockets, rather than __polling the server__, you can create an open, bidirectional connection between your page and the server and let the server PUSH updates to your app. This way, your page never has to keep making unnecessary requests to the server when there might not be any updates. Your app will instead be notified by the server if there are updates and the client-side portion of your application can do something with the data associated with the update. Web Sockets can replace the technique of __long polling (polling the server)__.

In order to work with Web Sockets, you need a Web Socket Server. A great library that exists for this is [Ratchet](http://socketo.me/). However, this requires you having to manage a web socket server yourself. Another great service that takes care of managing a web socket server for you along with web socket libraries for both the server and the client is [Pusher](https://pusher.com/).

![Pusher](https://pusher.com/images/docs/hero_howitworks.png)