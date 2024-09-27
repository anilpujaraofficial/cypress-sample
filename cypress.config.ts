import { defineConfig } from "cypress";
const fs = require("fs");
require("dotenv").config(); // Load .env file
export default defineConfig({
  e2e: {
    setupNodeEvents(on: any, config: any) {
      //!----------check file exists-----------------------------
      on("task", {
        checkFileExists(filepath: string) {
          if (fs.existsSync(filepath)) {
            return true;
          } else {
            return false;
          }
        },
      });
      // !-------------------------remove directory--------------------
      on("task", {
        removeDirectory(fileDir: string) {
          return new Promise((resolve, reject) => {
            fs.rmdir(fileDir, { recursive: true }, (err: boolean) => {
              if (err) {
                return reject(err);
              }
              resolve(null);
            });
          });
        },
      });
      // !--------------------- archive file-----------------------------

      on("task", {
        deleteFile(filepath: string) {
          return new Promise((resolve, reject) => {
            fs.unlink(filepath, (error: boolean) => {
              if (error) {
                return reject(error);
              }
              resolve(null);
            });
          });
        },
      });
      require("@cypress/grep/src/plugin")(config);
      return config;
    },
    //! config

    experimentalStudio: true,
    viewportWidth: 1440,
    viewportHeight: 900,
    chromeWebSecurity: false,
    pageLoadTimeout: 90000,
    defaultCommandTimeout: 6000,
    video: false,
    trashAssetsBeforeRuns: false,
    projectId: "ikzau4",

    retries: {
      runMode: 2,
      openMode: 0,
    },

    excludeSpecPattern: [
      // !investigation
      //!patientAdministration
    ],

    // !------------------------report generation config -----------
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "./report/mocha",
      reportFilename: "[status]-[name]-report",
      overwrite: false,
      html: true,
      json: true,
      charts: true,
    },
    // !----------------------environment define---
    env: {
      grepFilterSpecs: true,
      testEnv: "qa",
      qa: {
        url: process.env.BASE_URL,
        apiUrl: process.env.API_URL,
        sub_org_id: process.env.SUB_ORG_ID,
        //user
        name: process.env.NAME,
        email: process.env.EMAIL,
        user_id: process.env.USER_ID,
        username: process.env.USER_NAME,
        password: process.env.PASSWORD,

        //agent
        agent_username: process.env.AGENT_USERNAME,
        agent_password: process.env.AGENT_PASSWORD,
        agent_id: process.env.AGENT_ID,
        agent_scheme: process.env.SCHEME_ID,
      },
    },
  },
});
