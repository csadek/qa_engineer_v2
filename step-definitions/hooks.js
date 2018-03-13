module.exports = function () {
  // add before scenario hook
  this.BeforeScenario((scenario, done) => {
    if (scenario.getTags()[0].getName() === '@API') {
      global.driver = page.pages.driver;
      done();
    }
    done();
  });
};
