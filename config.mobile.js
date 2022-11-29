const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 740,
    viewportHeight:360,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
