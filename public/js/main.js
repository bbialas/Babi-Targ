require.config({
	paths: {
		jquery : 'libs/jquery-1.10.2.min',
		underscore : 'libs/underscore-min',
		backbone : 'libs/backbone-min',
		text : 'libs/text'
	},
	shim: {
		'underscore' : {
			exports : '_'
		},
		'backbone' : {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		}
	}
});

require([
	'app'
], function(App) {
	App.initialize();
});
