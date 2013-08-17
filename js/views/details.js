define(["jquery", "backbone", "underscore", "mustache"], function($, Backbone, _, Mustache) {
	
	var DetailsView = Backbone.View.extend({
		
		initialize: function() {
			this.template = $("#detailsTmpl").html();
			console.log("Detail view ready");
		},
		
		render: function() {
			var data = {
				name: "Andrea Rota"
			};
			
			// Prepare the new HTML
			var html = Mustache.to_html(this.template, data)
			
			// Inject it!
			this.$el.find(".target").html(html);
		}
			
	});
	
	return DetailsView;
});