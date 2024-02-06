import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1000, // change the viewport width
    viewportHeight: 880, // change the viewport height
    downloadsFolder: "/home/christopherespena/Downloads/" // Look into this later
  },
});