import { defineConfig } from 'cypress';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: process.env.NEXTAUTH_URL,
  },

  video: false,

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
