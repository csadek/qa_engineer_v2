module.exports = function () {
  /**
  * @returns {Promise} a promise to enter the search values
  */
  this.Given(/^I am on adidas home page$/, () => {
    // load budget URL
    return page.pages.UIMethods.visitWebSite(shared.testData.homePageURL);
  });
};
