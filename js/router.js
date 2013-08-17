define([ "jquery", "backbone"], function( $, Backbone ) {

    var AppRouter = Backbone.Router.extend({
    	
		initialize: function() {
			console.log("Router initialized");
			Backbone.history.start();
		},
		
		routes: {
			"master": "master",
			"details": "details"
		},
		
		master: function() {
			console.log("master page will show up");
			$.mobile.changePage('#master', {reverse: false, changeHash: false});
		},
		
		details: function() {
			console.log("details page will show up");
			$.mobile.changePage('#details', {reverse: false, changeHash: false});
		}
		
    });

    return AppRouter;

});