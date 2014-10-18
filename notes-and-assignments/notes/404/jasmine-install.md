Jasmine Framework Installation
==============================

There are a couple ways we can start working with the Jasmine unit testing framework for JS.

### 1. HTML Page Spec Runner

This allows you to run tests through a web page, like what you did on the Rebuilding jQuery assignment. The installation for this is a little confusing online so if you like this approach, start with this:

https://bitbucket.org/skaterdav85/building-jquery/src

### 2. Karma

We can also run our tests through the command line. This has the advantages of:

1. being able to rerun tests automatically whenever source or test files change
2. being integrated with a continuous integration (CI) server

Karma, formerly known as Testacular, is a test runner built on Node.js by the Angular.js team. Although it was created for Angular, you dont have to be using Angular to use it.

First, install Node.js: http://nodejs.org/

I have set up some starter files here: https://github.com/ITP-Webdev/karma-starter