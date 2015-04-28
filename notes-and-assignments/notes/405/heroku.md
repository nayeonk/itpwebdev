Deploying to Heroku
===

### Laravel

* Create a [Heroku account](http://heroku.com)
* Download the [Heroku Toolbelt](https://devcenter.heroku.com/articles/getting-started-with-php#set-up)
* Create a file called `Procfile` in your project root with the following contents:

```
web: vendor/bin/heroku-php-apache2 public
```

* remove `.env` from `.gitignore`
* Head to the [Heroku dashboard](https://dashboard.heroku.com) and create an app

Run the following:

```
heroku config:add BUILDPACK_URL=https://github.com/heroku/heroku-buildpack-php
```

* Follow the directions under "Create a new Git repository" and "Deploy your application"

### Node

* Create a [Heroku account](http://heroku.com)
* Download the [Heroku Toolbelt](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
* Create a file called `Procfile` in your project root with the following contents:

```
web: node main.js
```

Substitute `main.js` with whatever file kicks off your node app.

* Head to the [Heroku dashboard](https://dashboard.heroku.com) and create an app

* Follow the directions under "Create a new Git repository" and "Deploy your application"