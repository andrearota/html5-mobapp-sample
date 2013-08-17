define([ "jquery", "backbone", "views/details"], function( $, Backbone, DetailsView ) {

    var AppRouter = Backbone.Router.extend({
    	
		initialize: function() {
			this.detailsView = new DetailsView({el: $("#details")});
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
			this.detailsView.render();
			$.mobile.changePage('#details', {reverse: false, changeHash: false});
		}
		
    });

    return AppRouter;

});