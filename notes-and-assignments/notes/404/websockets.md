HTML5 Web Sockets
=================

### What are Web Sockets?

Web Sockets are a type of push technology that allow for servers to push data (think of updates) to a page AFTER a page has loaded. 

Great uses of web sockets are:

* chat applications
* when data is updated on the server, notify connected clients so they get the most up to date data
* real-time news feed like the facebook wall, twitter, instagram, etc

### Traditional Applications

If you think about a traditional application, once a page has already loaded, it doesnt receive updates unless it is refreshed. In order to render the most up-to-date information, the user has to manually refresh the page.

### Real-time Workarounds

One workaround that developers have come up with is to __poll the server__. That means your application has a timer that periodically makes AJAX requests to fetch new information. The drawback to this approach is that your application has to keep using resources to check if there are any updates. If there are no updates, then your application will still make AJAX requests to check if there is any new information. This can be a poor utilization of resources and can be pretty taxing on the client and server side of the application.

### Welcome to HTML5 Web Sockets

With Web Sockets, rather than __polling the server__, you can create an open, bidirectional connection between your page and the server and let the server PUSH updates to your app. This way, your page never has to keep making unnecessary requests to the server when there might not be any updates. Your app will instead be notified by the server if there are updates and the client-side portion of your application can do something with the data associated with the update. Web Sockets can replace the technique of __long polling (polling the server)__.

In order to work with Web Sockets, you need a Web Socket Server. Now although we could look for one to install, there are several really simple, robust, and scalable API's out there that we can utilize instead, one of them being Pusher. Others include Firebase and Socket.IO with Node.js. 

Visit [Pusher Site](http://pusher.com/) for more documentation and other Pusher features