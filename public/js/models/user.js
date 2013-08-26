define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    'use strict';
    var UserModel = Backbone.Model.extend({
        url : 'http://localhost:3000/users',
        idAttribute: '_id',
        login: null,
        userPassword: null
    });
    return UserModel;
});