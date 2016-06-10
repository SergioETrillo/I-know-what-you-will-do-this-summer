summerApp.service("summerService", ["$http", function($http) {

  this.getHols = function() {
    var arr = [];
    return $http.get('https://holiday-info-baby.herokuapp.com/')
    .then(function(response){
      response.data.forEach(function(result){
        arr.push(result);
      });
      return arr;
    });
  };
}]);

