summerApp.controller('InputDropdownController', ['$scope', 'SharedDataService',
  function($scope, $SharedDataService) {
  var self = this;
  self.Dropdown = $SharedDataService;
  self.data = {
    country: null,
    availableOptions: [
    {id: 'AR', name: 'Argentina'},
    {id: 'AU', name: 'Australia'},
    {id: 'AT', name: 'Austria'},
    {id: 'BE', name: 'Belgium'},
    {id: 'BR', name: 'Brazil'},
    {id: 'CA', name: 'Canada'},
    {id: 'CL', name: 'Chile'},
    {id: 'CZ', name: 'Czech Republic'},
    {id: 'DK', name: 'Denmark'},
    {id: 'FI', name: 'Finland'},
    {id: 'FR', name: 'France'},
    {id: 'DE', name: 'Germany'},
    {id: 'HK', name: 'Hong Kong'},
    {id: 'IT', name: 'Italy'},
    {id: 'JP', name: 'Japan'},
    {id: 'MY', name: 'Malasia'},
    {id: 'MX', name: 'Mexico'},
    {id: 'NZ', name: 'New Zeland'},
    {id: 'NO', name: 'Norway'},
    {id: 'PH', name: 'Philippines'},
    {id: 'PL', name: 'Poland'},
    {id: 'PT', name: 'Portugal'},
    {id: 'IE', name: 'Republic of Ireland'},
    {id: 'SG', name: 'Singapore'},
    {id: 'ES', name: 'España'},
    {id: 'SE', name: 'Sweden'},
    {id: 'CH', name: 'Switzerland'},
    {id: 'TW', name: 'Taiwan'},
    {id: 'NL', name: 'The Netherlands'},
    {id: 'TR', name: 'Turkey'},
    {id: 'GB', name: 'United Kingdom'},
    {id: 'US', name: 'United States'}
  ],
 };
}]);