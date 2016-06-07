var summerApp = angular.module("summerApp", ['env','ngRoute']);

summerApp.config(function($routeProvider,$locationProvider){

    $routeProvider
    .when('/', {
        templateUrl: 'templates/main.html',
        controller: 'summerController'
    });

    $locationProvider.html5Mode(true);

});