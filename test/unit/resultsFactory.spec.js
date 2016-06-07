 describe('resultsFactory', function() {

  beforeEach(module('summerApp'));

  var result;

  beforeEach(inject(function(resultsFactory) {
    result = new resultsFactory('location');
  }));

  it('location is available', function(){
    expect(result.location).toEqual('location');
  });
});
