const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'ow29pt',
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      hideCredentials: true,
      requestMode: true,// allows to use cy.request instead of cy.api
    },
    experimentalRunAllSpecs: true,
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  fixturesFolder: false,
  video: false,
})