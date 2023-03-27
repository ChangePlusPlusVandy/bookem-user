import { defineConfig } from 'cypress';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        'db:seed': async () => {
          // Send request to backend API to re-seed database with test data
          const res = await fetch(`http://127.0.0.1:3000/api/scripts/seedDb`);
          return res;
        },
      });
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
