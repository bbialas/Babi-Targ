define([
    'jquery',
    'underscore',
    'backbone',
    'text!../../templates/register.html'
], function($, _, Backbone, registerPageTemplate) {
    'use strict';
    var RegisterPageView = Backbone.View.extend({
        el: $('#container'),
        events: {
            'submit .register-form' : 'onFormSubmit'
        },
        render: function() {
            var template = _.template(registerPageTemplate);
            this.$el.html(template);
        },
        onFormSubmit: function(e) {
            e.preventDefault();
            $.ajax({
                url: 'http://localhost:3000/register',
                data: $(e.target).serialize(),
                success: function(data/*, textStatus*/) {
                    console.log(data);
                    //console.log(data);
                    //console.log(textStatus);
                }
            });
        }
    });
    return RegisterPageView;
});
