!function() {
  
  function $AlgoliaProvider() {
    var provider = this;
    provider.applicationID = undefined;
    provider.apiKey = undefined;
    provider.resolveDNS = undefined;
    provider.hosts = undefined;
    provider.options = {};
    
    provider.$get = ['$injector', '$window', function($injector, $window) {
       provider.options.angular = {
         '$injector': $injector
       }
      return new $window.AlgoliaSearch(provider.applicationID, provider.apiKey, provider.options, provider.resolveDNS, provider.hosts);
   }];
   
  }

  angular.module('angular-algolia', [])
  .provider('$algolia', $AlgoliaProvider)
  .provider('Algolia', $AlgoliaProvider);
  
  angular.module('ngAlgolia', ['angular-algolia']);
  
}();

