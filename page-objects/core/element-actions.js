module.exports = {
  /**
   * enters selenium element name and value to insert it
   * @param {string} elementName
   * @param {string} text
   * @returns {Promise}
   */
  enterText(elementName, text) {
    // return a promise so the calling function knows the task has completed
    const uiElement = page.core.elementsloader.getUiElementByKey(elementName);
    driver.wait(until.elementsLocated(uiElement), 10000)
      .then(() => driver.findElement(uiElement).clear());
    return driver.findElement(uiElement).sendKeys(text);
  },
  /**
   * enters selenium element name and value to insert it
   * @param {string} elementName
   * @param {string} text
   * @returns {Promise}
   */
  enter(elementName) {
    // return a promise so the calling function knows the task has completed
    const uiElement = page.core.elementsloader.getUiElementByKey(elementName);
    driver.wait(until.elementsLocated(uiElement), 10000)
      .then(() => driver.findElement(uiElement).clear());
    return driver.findElement(uiElement).sendKeys(selenium.Key.ENTER);
  },
  /**
   * get element text value
   * @param {string} elementName
   * @returns {Promise}
   */
  getElementText(elementName) {
    const uiElement = page.core.elementsloader.getUiElementByKey(elementName);
    // return a promise so the calling function knows the task has completed
    return driver
      .wait(until.elementsLocated(uiElement), 10000)
      .then(() => driver.findElement(uiElement).getText())
      .catch((error) => {
        throw new Error(`Cannot find Element: '${error}'`);
      });
  },
  /**
   * enters selenium element name to click it
   * @param {string} elementName
   * @returns {Promise}
   */
  click(elementName) {
    // return a promise so the calling function knows the task has completed
    const uiElement = page.core.elementsloader.getUiElementByKey(elementName);
    return driver
      .wait(until.elementsLocated(uiElement), 100000)
      .then(() => driver.findElement(uiElement).click());
  },
  /**
   * enters selenium element name and value to verify it
   * @param {string} elementName
   * @param {string} text
   * @returns {Promise}
   */
  verifyText(elementName, text) {
    const uiElement = page.core.elementsloader.getUiElementByKey(elementName);
    const expectedText = text.toString();
    // return a promise so the calling function knows the task has completed
    return driver
      .wait(until.elementsLocated(uiElement), 10000)
      .then(() => driver.findElement(uiElement).getText())
      .catch((error) => {
        throw new Error(`Cannot find Element: '${error}'`);
      })
      .then((elementText) => {
        assert.equal(elementText.replace(/[\n\r]/g, ''), expectedText.replace(/[\n\r]/g, ''));
      })
      .catch((error) => {
        throw new Error(`Cannot get text from element: '${error}'`);
      });
  },
};
