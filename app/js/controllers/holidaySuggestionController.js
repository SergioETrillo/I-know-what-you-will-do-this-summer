summerApp.controller("holidaySuggestionController", ["summerService", function(summerService) {

  var self = this;

  self.cats = []

  self.holiday = function(){
    summerService.getHols().then(function(hols) {
      self.holidays = hols
    })
    .then(function(){
      self.holidays.forEach(function(holiday){
        holiday.categories.map(function(category){
          self.cats.forEach(function(selectedCategory){
            if(selectedCategory === category){holiday.count++}
          });
        });
      })

        var index = 0
        var returnObj = null
        var returnArr = []

        self.holidays.forEach(function(holiday){
          if(typeof (self.holidays[index-1])==="undefined"){returnObj = holiday;}
          else if(holiday.count>=self.holidays[index-1].count){returnObj = holiday;}
          index ++
          self.highCount = returnObj.count
        });

        self.holidays.forEach(function(holiday){
          if(holiday.count===self.highCount){returnArr.push(holiday);}
        });

        self.suggestion = returnArr[Math.floor(Math.random()*returnArr.length)]

    });

  };

  self.addCat = function(cat) {
    if(self.cats.includes(cat)){
      var ind = self.cats.indexOf(cat);
      self.cats.splice(ind, 1);
    }
    else if(self.cats.includes(cat)===false){self.cats.push(cat)};
  };

  function resetHolidayCount(holidays) {
    holidays.forEach(function() {
      holiday.count = 0;
    });
  };


}]);