define([
    'jquery',
    'underscore',
    'backbone',
    'views/login',
    'views/register',
    'views/users'
], function($, _, Backbone, LoginPageView, RegisterPageView, UsersPageView) {
    'use strict';
    var AppRouter = Backbone.Router.extend({
        routes: {
            'login' : 'showLoginPage',
            'register' : 'showRegisterPage',
            'users' : 'showUsersPage'
        }
    });
    var initialize = function() {
        var appRouter = new AppRouter();
        appRouter.on('route:showLoginPage', function() {
            var loginPageView = new LoginPageView();
            loginPageView.render();
        });
        appRouter.on('route:showRegisterPage', function() {
            var registerPageView = new RegisterPageView();
            registerPageView.render();
        });
        appRouter.on('route:showUsersPage', function() {
            var usersPageView = new UsersPageView();
            usersPageView.render();
        });
        Backbone.history.start();
    };
    return {
        initialize : initialize
    };
});
