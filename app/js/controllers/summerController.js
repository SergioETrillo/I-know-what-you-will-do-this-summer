angular.module("summerApp").controller("summerController", ["$env", "$http", function($env, $http) {
  var self = this;

  self.update = function(){
    self.reset();
    self.params['callback'] = 'angular.callbacks._0';
    self.params['location'] = self.location;
    self.params['term'] = self.term;
    self.params['oauth_nonce'] = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    self.params['oauth_timestamp'] = new Date().getTime();
    var signature = oauthSignature.generate(method, url, self.params, consumerSecret, tokenSecret);
    self.params['oauth_signature'] = signature;
    //console.log(self.params);
  }

  self.buildQuery = function(){
    // params['callback'] = 'angular.callbacks._' + i++;
   //  params['location'] = self.location;
   //  params['term'] = self.term;
   //  params['oauth_nonce'] = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
   //  params['oauth_timestamp'] = new Date().getTime();
   //  params['oauth_signature'] = self.signature;
    $http.jsonp(url, {params: self.params}).then(function(response){
      self.result = response.data.businesses;
      console.log(self.result);
    });
  }

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
      oauth_consumer_key: $env.oauth_consumer_key,
      oauth_nonce: "",
      oauth_signature_method: "HMAC-SHA1",
      oauth_timestamp: "",
      oauth_token: $env.oauth_token,
      oauth_version: "1.0",
      term: ""
    };
  }


  var consumerSecret = $env.consumerSecret;
  var tokenSecret = $env.tokenSecret;
}]);
