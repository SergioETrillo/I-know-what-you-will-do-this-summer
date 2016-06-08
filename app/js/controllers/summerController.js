angular.module("summerApp").controller("summerController", ["$env", "$http", "SharedDataService", function($env, $http, $SharedDataService) {
  var self = this;

  self.update = function(){
    self.reset();
    self.params.callback = 'angular.callbacks._0';
    self.params.location = self.location;
    // self.params.radius_filer = self.radius_filter;
    self.Dropdown = $SharedDataService;
    console.log(self.Dropdown.country);
    self.params.cc = self.Dropdown.country;
    self.params.term = self.term;
    self.params.oauth_nonce = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    self.params.oauth_timestamp = new Date().getTime();
    var signature = oauthSignature.generate(method, url, self.params, consumerSecret, tokenSecret);
    self.params.oauth_signature = signature;
    //console.log(self.params);
  };

  self.buildQuery = function(){
    $http.jsonp(url, {params: self.params}).then(function(response){
      self.result = response.data.businesses;
      console.log(self.result);
    });
  };

  function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
      return result;
  }

  var method = 'GET';
  var url = 'http://api.yelp.com/v2/search?callback=JSON_CALLBACK';

  self.reset = function(){
    self.result = null;
    self.params = null;
    self.params = {
      callback: "",
      location: "",
      cc: "",
      radius_filer: "",
      oauth_consumer_key: $env.oauth_consumer_key,
      oauth_nonce: "",
      oauth_signature_method: "HMAC-SHA1",
      oauth_timestamp: "",
      oauth_token: $env.oauth_token,
      oauth_version: "1.0",
      term: ""
    };
  };


  var consumerSecret = $env.consumerSecret;
  var tokenSecret = $env.tokenSecret;
}]);
