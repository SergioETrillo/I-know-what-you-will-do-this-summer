module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-protractor-webdriver');
  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.initConfig({
    'meta': {
      'jsFilesForTesting': [
        'bower_components/jquery/jquery.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-sanitize/angular-sanitize.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'test/**/*Spec.js'
      ]
    },

    'karma': {
      'development': {
        'configFile': 'test/karma.conf.js',
        'singleRun': true,
      }
    },

    protractor_webdriver: {
      your_target: {
        options: {
          path: 'test/protractor.conf.js',
        },
      },
    },

    protractor: {
      options: {
        configFile: "test/protractor.conf.js",
        keepAlive: true,
        noColor: false,
        args: {

        }
      },
      your_target: {
        all: {}
      }
    },

    'jshint': {
      'beforeconcat': ['app/js/**/*.js'],
    }
  });

  grunt.registerTask('test', ['karma:development']);
  grunt.registerTask('build',
    [
      'jshint',
      'karma:development',
      'protractor_webdriver',
      'protractor'
    ]);
};