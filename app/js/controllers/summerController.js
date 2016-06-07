angular.module("summerApp").controller("summerController", ["$env", "$http", "$route", function($env, $http, $route) {
  var self = this;

  self.buildQuery = function(){
    params.oauth_timestamp = new Date().getTime();
    console.log("params timestamp",params.oauth_timestamp);
    params.location = self.location;
    params.cc = self.cc;
    console.log("country is:",params.cc);
    params.term = self.term;
    var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret);
    params.oauth_signature = signature;
    console.log(params);
    $http.jsonp(url, {params: params}, {cache: false}).success(function(response){

      self.results = response.businesses;
      console.log(self.results);
    });
    // self.reloadRoute();
  };

  function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
      return result;
  }

  var method = 'GET';
  var url = 'http://api.yelp.com/v2/search';

  var params = {
    callback: 'angular.callbacks._0',
    location: "",
    cc: "",
    oauth_consumer_key: $env.oauth_consumer_key,
    oauth_nonce: "",
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: new Date().getTime(),
    oauth_token: $env.oauth_token,
    oauth_version: "1.0",
    term: ""
  };

  var consumerSecret = $env.consumerSecret;
  var tokenSecret = $env.tokenSecret;

  self.reloadRoute = function() {
   $route.reload();
  };
}]);
