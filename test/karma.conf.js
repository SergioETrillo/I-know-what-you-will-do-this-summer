module.exports = function(config){
  config.set({

    basePath: '../',

    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/env.js',
      'app/js/app.js',
      'app/js/**/*.js',
      'test/unit/**/*.js',

    ],

    singleRun: true,

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine'
    ]
  });
};
