describe("summerController", function() {
  var controller;

  beforeEach(module("summerApp"));

  beforeEach(inject(function($controller) {
    controller = $controller("summerController");
  }));
});
