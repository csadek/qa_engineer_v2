module.exports = function () {
  this.When(/^I send API request to Addidus landing page$/, async () => {
    // count number of items and working balance then add budget item
    this.APIResponse = await page.core.jsActions.sendHttpRequest(shared.testData.APIURL);
  });
  this.When(/^I search for "([^"]*)"$/, async (searchItem) => {
    // count number of items and working balance then add multiple budget items
    return page.pages.UIMethods.performSearch(searchItem);
  });
  this.When(/^I filter the search results with gender "([^"]*)"$/, async (filter) => {
    // count number of items and working balance then add budget item of type income
    return page.pages.UIMethods.performFilter(filter);
  });
  this.When(/^I click on specific item$/, () => {
    // count number of items and working balance then add budget item
    return page.pages.UIMethods.viewProduct();
  });
  this.When(/^I wishList specific item$/, () => {
    // count number of items and working balance then add budget item
    return page.pages.UIMethods.wishListProduct();
  });
};
