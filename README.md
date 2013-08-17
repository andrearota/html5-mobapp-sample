A simple HTML5 mobile application
=================================

A very simple HTML5 application integrating Backbone.js as MVC, jQuery Mobile as UI layer, Mustache.js as template engine and Require.js as AMD loader. 

Actually, I didn't use the model part of Backbone.js, as I prefer handle the model by myself, case by case.

The application doesn't do anything special, but showing two pages: a master and a detail. The detail page is backed up by a Backbone.View, that uses Mustache to render the page contents.

A Backbone.Router handles the navigation between views and interacts with jQuery Mobile to trigger the page changes.

The pieces of the application are held together by Require.js. For libraries that doesn't support AMD loading, I used the Require Shim mode.

I use this setup as foundation for my HTML5 mobile applications, feel free to use it for yours.
