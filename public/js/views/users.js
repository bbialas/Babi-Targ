define([
    'jquery',
    'underscore',
    'backbone',
    '../collections/users',
    'text!../../templates/users.html'
], function($, _, Backbone, UsersCollection, usersPageTemplate) {
    'use strict';
    var UsersPageView = Backbone.View.extend({
        el : $('#container'),
        render : function() {
            this.getUsers();
        },
        getUsers : function() {
            var users = new UsersCollection(),
                $this = this;
            users.fetch({
                success: function(users) {
                    var template = _.template(
                        usersPageTemplate, {users: users.models, _:_}
                    );
                    $this.$el.html(template);
                }
            });
        }
    });
    return UsersPageView;
});