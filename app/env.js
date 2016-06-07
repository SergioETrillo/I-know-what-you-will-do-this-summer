angular.module( 'env', [] )
.service( '$env', function () {

  return {
    // your configurations here,
    summaryUrl : "",
    apiURL : ""

    // API secrets and so here
    // call the variable like that: $env.summaryUrl
    // you have to inject $env in the service as such
// newsSummaryApp.service("SummaryService", [ "$env", "SummaryFactory", "$http", function( $env, SummaryFactory, $http)


  };

});

