define([
    'jquery',
    'underscore',
    'backbone',
    'text!../../templates/login.html'
], function($, _, Backbone, loginPageTemplate) {
    'use strict';
    var LoginPageView = Backbone.View.extend({
        el : $('#container'),
        events: {
            'submit .login-form' : 'onFormSubmit'
        },
        render : function() {
            var template = _.template(loginPageTemplate);
            this.$el.html(template);
        },
        onFormSubmit : function(e) {
            e.preventDefault();
            $.ajax({
                url: 'http://localhost:3000/login',
                data: $(e.target).serialize(),
                success: function(data/*, textStatus*/) {
                    alert(data);
                    //console.log(data);
                    //console.log(textStatus);
                }
            });
        }
    });
    return LoginPageView;
});