 describe('resultsFactory', function() {

  beforeEach(module('summerApp'));

  var result;

  beforeEach(inject(function(resultsFactory) {
    result = new resultsFactory('location');
  }));

  it('is incomplete by default', function(){
    expect(result.location).toEqual('location');
  });
});
