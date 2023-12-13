const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/constellationtests/*js'
  },
  env: {
    url : 'http://constel-social-network.vercel.app/'
  }
});
