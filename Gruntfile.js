module.exports = function(grunt) {

  'use strict';

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['src/ng-bs-daterangepicker.js', 'test/**/*.js']
    },

    karma: {
      unit: {
        options: {
          basePath: './',
          frameworks: ['jasmine'],
          browsers: ['PhantomJS'],
          autoWatch: true,
          singleRun: true,
          files: [
            'client/bower_components/jquery/dist/jquery.js',
            'client/bower_components/angular/angular.js',
            'client/bower_components/angular-mocks/angular-mocks.js',
            'client/bower_components/moment/min/moment.min.js',
            'client/bower_components/bootstrap/dist/js/bootstrap.js',
            'client/bower_components/bootstrap-daterangepicker/daterangepicker.js',
            'src/ng-bs-daterangepicker.js',
            'test/**/*.js'
          ]
        }
      }
    },

    uglify: {
      options: {
        preserveComments: 'some',
        sourceMap: 'dist/ng-bs-daterangepicker.min.js.map',
        sourceMappingURL: 'ng-bs-daterangepicker.min.js.map',
        report: 'min'
      },
      dist: {
        files: {
          'dist/ng-bs-daterangepicker.min.js': ['src/ng-bs-daterangepicker.js']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint', 'karma']);

};