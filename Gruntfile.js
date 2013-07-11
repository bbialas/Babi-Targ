module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: [
                'Gruntfile.js',
                'public/js/*.js',
                'public/js/collections/**/*.js',
                'public/js/models/**/*.js',
                'public/js/views/**/*.js'
            ],
            options: {
                'strict' : true,
                'camelcase' : true,
                'curly' : true,
                'eqeqeq' : true,
                'indent' : 4,
                'latedef' : true,
                'noempty' : true,
                'quotmark' : 'single',
                'undef' : true,
                'unused' : true,
                'trailing' : true,
                'maxlen' : 80,
                'globals' : {
                    'define' : false,
                    'require' : false,
                    'module': false,
                    'alert': true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
};