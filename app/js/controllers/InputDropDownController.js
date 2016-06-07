summerApp.controller('InputDropdownController', ['$scope', function($scope) {
  $scope.data = {
    repeatSelect: null,
    availableOptions: [
    {id: 'CA', name: 'Canada'},
    {id: 'GB', name: 'United Kingdom'},
    {id: 'US', name: 'United States'}
  ],
 };
}]);