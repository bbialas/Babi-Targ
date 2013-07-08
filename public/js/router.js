define([
	'jquery',
	'underscore',
	'backbone',
	'views/login',
	'views/register'
], function($, _, Backbone, LoginPageView, RegisterPageView) {
	var AppRouter = Backbone.Router.extend({
		routes: {
			'login' : 'showLoginPage',
			'register' : 'showRegisterPage'
		}
	});
	var initialize = function() {
		var appRouter = new AppRouter;
		appRouter.on('route:showLoginPage', function() {
			var loginPageView = new LoginPageView();
			loginPageView.render();
		});
		appRouter.on('route:showRegisterPage', function() {
			var registerPageView = new RegisterPageView();
			registerPageView.render();
		});
		Backbone.history.start();
	}
	return {
		initialize : initialize
	}
});
