const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    // implement node event listeners here
      
    },
    // to tell cypress what to test 
    specPattern: 'cypress/e2e/**/*.cy.js',
   // specPattern: 'cypress/e2e/Test_properties/TS_create-property.js'
  },
});
