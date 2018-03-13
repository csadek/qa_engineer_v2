module.exports = function () {
  this.Then(/^every component has at least analytics data "([^"]*)" in it$/, (analytics) => {
    // verify that one item is added to the table
    return page.pages.API.verifyAnalyticsDataExist(this.APIResponse[1], analytics);
  });
  this.Then(/^All images are retrieved successfully$/, () => {
    // verify that multiple items are added to the table
    return page.pages.API.verifyImagesAPIs(this.APIResponse[1]);
  });
  this.Then(/^response time is bellow "([^"]*)" second$/, (seconds) => {
    // verify that Working Balance calculation is correct for one item
    return page.pages.API.verifyDuration(this.APIResponse[2], seconds);
  });
  this.Then(/^search results for "([^"]*)" should be displayed$/, (searchKeyword) => {
    // verify that multiple items are added to the table
    return page.pages.UIMethods.verifySearch(searchKeyword);
  });
  this.Then(/^search filter for "([^"]*)" should be displayed$/, (filter) => {
    // verify that multiple items are added to the table
    return page.pages.UIMethods.verifyFilter(filter);
  });
  this.Then(/^Item details should be displayed$/, () => {
    // verify that multiple items are added to the table
    return page.pages.UIMethods.verifyProductName();
  });
  this.Then(/^Item should be added to wishLists page$/, () => {
    // verify that multiple items are added to the table
    return page.pages.UIMethods.verifyWishListContent();
  });
  this.Then(/^wishLists count is increased$/, () => {
    // verify that multiple items are added to the table
    return page.pages.UIMethods.verifyWishListCount();
  });
};
