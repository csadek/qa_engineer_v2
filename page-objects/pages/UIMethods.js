module.exports = {
  /**
   * Load the needed URL
   * @returns {Promise} a promise to load the URL
   */
  visitWebSite(URL) {
    // return a promise so the calling function knows the task has completed
    return helpers.loadPage(URL);
  },
  /**
   * @param {string} keyword
   */
  async performSearch(keyword) {
    await page.core.elementActions.enterText('homePage-search-textBox', keyword);
    // return a promise so the calling function knows the task has completed
    return page.core.elementActions.enter('homePage-search-textBox');
  },
  async viewProduct() {
    this.productName = await page.core.elementActions.getElementText('searchPage-products-names');
    return page.core.elementActions.click('searchPage-products-links');
  },
  /**
   * @param {string} type
   */
  async performFilter(type) {
    const uiElement = shared.elements['searchPage-filter-links'];
    const seleniumElement = await helpers
      .getElementsContainingText(uiElement.selector, type);
    return seleniumElement[0].click();
  },
  async wishListProduct() {
    this.productName = await page.core.elementActions.getElementText('searchPage-products-names');
    await page.core.elementActions.click('searchPage-wishList-icon');
  },
  /**
   * @param {string} keyword
   */
  verifySearch(keyword) {
    const expectedKeyword = keyword.toUpperCase();
    // return a promise so the calling function knows the task has completed
    return page.core.elementActions.verifyText('searchPage-searchResult-msg', expectedKeyword);
  },
  /**
   * @param {string} filter
   */
  verifyFilter(filter) {
    // return a promise so the calling function knows the task has completed
    return page.core.elementActions.verifyText('searchPage-selectedfilter-link', filter);
  },
  verifyProductName() {
    return page.core.elementActions.verifyText('productPage-product-title', this.productName);
  },
  async verifyWishListContent() {
    await page.core.elementActions.click('searchPage-wishList-link');
    return page.core.elementActions.verifyText('wishListPage-product-name', this.productName);
  },
  verifyWishListCount() {
    return page.core.elementActions.verifyText('searchPage-wishList-count', 1);
  },
};
