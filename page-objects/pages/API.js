module.exports = {
  verifyAnalyticsDataExist(responseBody, tag) {
    // return a promise so the calling function knows the task has completed
    let components = JSON.parse(responseBody).component_presentations;
    components = components.map(obj =>
      obj.component);
    for (let index = 0; index < components.length; index += 1) {
      const objects = this.getValues(components[index], tag);
      assert.isAtLeast(objects.length, 1);
    }
  },
  getValues(obj, key) {
    let objects = [];
    for (const i in obj) {
      if (!obj.hasOwnProperty(i)) {
        if (typeof obj[i] === 'object') {
          objects = objects.concat(this.getValues(obj[i], key));
        } else if (i === key) {
          objects.push(obj[i]);
        }
      }
    }
    return objects;
  },
  verifyImagesAPIs(responseBody) {
    const mobileImage = this.getValues(responseBody, 'mobile_image');
    const tabletImage = this.getValues(responseBody, 'tablet_image');
    const desktopImage = this.getValues(responseBody, 'desktop_image');
    let response;
    mobileImage.forEach(async (image) => {
      response = await page.core.jsActions.sendHttpRequest(image);
      assert.equal(response[0], 200);
    });
    tabletImage.forEach(async (image) => {
      response = await page.core.jsActions.sendHttpRequest(image);
      assert.equal(response[0], 200);
    });
    desktopImage.forEach(async (image) => {
      response = await page.core.jsActions.sendHttpRequest(image);
      assert.equal(response[0], 200);
    });
  },
  async verifyDuration(timestamp, duration) {
    assert.isAtMost(timestamp, duration);
  },
};
