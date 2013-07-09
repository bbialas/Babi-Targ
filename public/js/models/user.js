define([
	'underscore',
	'backbone'
], function(_, Backbone) {
	var UserModel = Backbone.Model.extend({
		url : 'http://localhost:3000/users'
	});
	return UserModel;
});