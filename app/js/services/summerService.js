summerApp.service("summerService", ["$http", function($http) {

  this.getHols = function() {
    var arr = []
    return $http.get('http://holiday-info-baby.herokuapp.com/')
    .then(function(response){
      response.data.forEach(function(stuff){
        arr.push(stuff);
      });
      return arr
    });
  };
}]);

