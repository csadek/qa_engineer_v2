module.exports = {
  async close() {
    // close
  },
  async takeScreenshot() {
    //   take snapshot
  },
  async quit() {
    //   quit
  },

  /**
 * Creates a list of variables to expose globally and therefore
 * accessible within each step definition
 * @returns {void}
 */
  createWorld() {
    const runtime = {
      driver: page.pages.driver,
      eyesKey: 'eye',
      expect, // expose chai expect to allow variable testing
      assert, // expose chai assert to allow variable testing
      page: global.page || {}, // empty page objects placeholder
      shared: global.shared || {}, // empty shared objects placeholder
    };

    // expose properties to step definition methods via global variables
    Object.keys(runtime).forEach((key) => {
      // make property/method available as a global (no this. prefix required)
      global[key] = runtime[key];
    });
  },
};
