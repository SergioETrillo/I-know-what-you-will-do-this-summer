angular.module( 'env', [] )
.service( '$env', function () {

  return {
    // your configurations here,
      oauth_consumer_key: 'c2hrE-52wukvvSguu1TybQ',
      oauth_token: 'dNyeHDUidNiKJ0ZbE8zWteOibdSwK1GR',
      consumerSecret: 'QdK7NysKoM3hCJZJCHx1B2TtFI8',
      tokenSecret: 'OZwYZY4z1toHfuN6W5ca2RfzgN0',
      weather_id: 'a3d9eb01d4de82b9b8d0849ef604dbed'

    // API secrets and so here
    // call the variable like that: $env.summaryUrl
    // you have to inject $env in the service as such
// newsSummaryApp.service("SummaryService", [ "$env", "SummaryFactory", "$http", function( $env, SummaryFactory, $http)


  };

});
