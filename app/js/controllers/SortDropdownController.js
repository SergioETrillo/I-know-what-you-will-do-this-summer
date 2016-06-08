summerApp.controller('SortDropdownController', ['SharedDataService',
  function($SharedDataService) {
  var self = this;

  self.Dropdown = $SharedDataService;
  self.Dropdown.selected_sort = "0";
  self.Dropdown.sort_options = [
    {id: "0", name: 'Best Matched'},
    {id: "1", name:  'Distance'},
    {id: "2", name: 'Highest rated'}
  ];
}]);
