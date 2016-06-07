var summerApp = angular.module("summerApp", ['env','ngRoute']);

summerApp.config(function($routeProvider,$locationProvider){

    $routeProvider
    .when('/', {
        templateUrl: 'templates/main.html',
        controller: 'SummaryAppController'
    })
    .when('/showArticle/:articleId', {
        templateUrl: 'templates/show-article.html',
        controller: 'SummaryAppController',
        article_data: ''
      })
      .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);

});