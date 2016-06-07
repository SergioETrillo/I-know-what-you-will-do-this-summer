angular.module("summerApp")
  .controller("summerController", ["$env", function($env) {
    var self = this;

    self.greeting = "Hello, summers";

    var method = 'GET';
    var url = 'http://api.yelp.com/v2/search';

    var params = {
      callback: 'angular.callbacks._0',
      location: 'London',
      oauth_consumer_key: $env.oauth_consumer_key,
      oauth_token: $env.oauth_token,
      oauth_signature_method: "HMAC-SHA1",
      oauth_timestamp: new Date().getTime(),
      // oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
      term: 'food'
    };
    var consumerSecret = $env.consumerSecret;
    var tokenSecret = $env.tokenSecret;

    var signature = oauthSignature.generate("GET",url,params, consumerSecret, tokenSecret, { encodeSignature: false});
    console.log(signature);
  }]);

