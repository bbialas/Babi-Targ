module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            files: [
                '*.js',
                '**/*.js'
            ]
        },
        less: {
            compile: {
                options: {
                    paths: ['assets/styles']
                },
                files: {
                    'public/css/main.css': ['assets/styles/header.less']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
};