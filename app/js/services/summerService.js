summerApp.service("summerService", [ "$env", "summerFactory", "$http", function( $env, summerFactory, $http) {

  this.getResults = function() {
    var respFromAPI =$http.get($env.apiURL).then(_iterateThrough);
    console.log("resp from API:",respFromAPI);
    return respFromAPI;
  };


  function _iterateThrough (response) {
    var articles = [];

    response.data.response.results.forEach(function(object) {
      $http.get($env.summaryUrl + object.webUrl).success(function(response){
        articles.push(new SummaryFactory(object.webTitle, object.webPublicationDate,
        object.fields.thumbnail, object.fields.body, object.webUrl, response.sentences));
      });
    });

    return articles;
  }


}]);