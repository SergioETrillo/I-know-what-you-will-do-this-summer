describe("app", function() {

  var category = $$('.img-thumbnail');

  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("I know what you'll do this summer");
  });

  it("should hide a location if no category is submitted", function() {
    browser.get('/');
    category.first().click();
    expect($('#location-suggestion').getText()).toBeFalsy();
  });

  it("should return a suggested loctaion once a category is selected", function() {
    browser.get('/');
    category.first().click();
    $('#suggestion-button').click();
    expect($('#location-suggestion').isDisplayed()).toBeTruthy();
  });

});
