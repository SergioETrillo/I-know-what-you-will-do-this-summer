angular.module("summerApp").controller("summerController", ["$env", "$http", function($env, $http) {
  var self = this;

  self.buildQuery = function(){
    params['location'] = self.location;
    params['term'] = self.term;
    var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret);
    params['oauth_signature'] = signature;
    console.log(params);
    $http.jsonp(url, {params: params}).success(function(response){
      self.result = response;
      console.log(self.result);
    });
  }

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
    oauth_consumer_key: $env.oauth_consumer_key,
    oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: new Date().getTime(),
    oauth_token: $env.oauth_token,
    oauth_version: "1.0",
    term: ""
  };

  var consumerSecret = $env.consumerSecret;
  var tokenSecret = $env.tokenSecret;
}]);
