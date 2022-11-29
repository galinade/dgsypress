const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth:732,
    viewportHeight:412,
    headded:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
