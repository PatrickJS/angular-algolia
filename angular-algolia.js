angular.module('algoliasearch', [])
.provider('algolia', function() {
  var provider = this;
  provider.applicationID = undefined;
  provider.apiKey = undefined;
  provider.options = {}
  provider.resolveDNS = undefined;
  provider.hosts = undefined;
  
  provider.$get = ['$injector', '$window', function($injector, $window) {
     provider.options.angular = {
       '$injector': $injector
     }
    return new $window.AlgoliaSearch(provider.applicationID, provider.apiKey, provider.options, provider.resolveDNS, provider.hosts);
 }];
 
});
