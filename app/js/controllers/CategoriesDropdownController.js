summerApp.controller('CategoriesDropdownController', ['SharedDataService',
  function($SharedDataService) {
    var self = this;
    self.Dropdown = $SharedDataService;
    self.Dropdown.selected_categories = [];
    self.Dropdown.categories_options = [
      {id: "active", name: "Sports & Leisure"},
      {id: "arts", name: "Arts & Entertainment"},
      {id: "beautysvc", name: "Beauty & Spas"},
      {id: "food", name: "Food"},
      {id: "hotelstravel", name: "Hotels & Travel"},
      {id: "nightlife", name: "Nightlife"},
      {id: "restaurants", name: "Restaurants"},
      {id: "shopping", name: "Shopping"}
    ];
}]);