define([
	'jquery',
	'underscore',
	'backbone',
	'text!../../templates/login.html'
], function($, _, Backbone, loginPageTemplate) {
	var LoginPageView = Backbone.View.extend({
		el : $('#container'),
		render : function() {
			var template = _.template(loginPageTemplate);
			this.$el.html(template);
		}
	});
	return LoginPageView
});
