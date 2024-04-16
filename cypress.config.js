const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'xv6ptx',
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
})
