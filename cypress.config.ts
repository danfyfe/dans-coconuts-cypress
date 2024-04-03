require('dotenv').config()

module.exports = {
  projectId: "3u3goe",

  e2e: {
    baseUrl: process.env.BASE_URL ?? 'http://localhost:3001',
    // setupNodeEvents(on, config) {
    //   config.env.baseUrl = process.env.BASE_URL
    // },
  },
};
