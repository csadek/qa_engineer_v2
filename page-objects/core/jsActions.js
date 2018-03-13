const request = require('request');

module.exports = {
  sendHttpRequest(url) {
    const before = Date.now();
    return new Promise((resolve, reject) => {
      request(url, (error, response) => {
        const after = Date.now();
        if (error) {
          reject(error);
        }
        const duration = (after - before) / 1000;
        resolve([response.statusCode, response.body, duration]);
      });
    });
  },
};
