define([
	'jquery',
	'underscore',
	'backbone',
	'text!../../templates/register.html'
], function($, _, Backbone, registerPageTemplate) {
	var RegisterPageView = Backbone.View.extend({
		el : $('#container'),
		render : function() {
			var template = _.template(registerPageTemplate);
			this.$el.html(template);
		}
	});
	return RegisterPageView
});
