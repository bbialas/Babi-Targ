define([
    'underscore',
    'backbone',
    '../models/user'
], function(_, Backbone, UserModel) {
    'use strict';
    var UsersCollection = Backbone.Collection.extend({
        model : UserModel,
        url : 'http://localhost:3000/users'
    });
    return UsersCollection;
});