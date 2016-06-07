angular.module("summerApp")
  .controller("summerController", ["$env", function($env) {
    var self = this;

    self.greeting = "Hello, summers";
  }]);

