// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout: 40000,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  
  reporter: [['html'],
    ['junit', { outputFile: 'test-results/junit-report.xml' }]]
  ,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName:'chromium',
    headless:false

  },

  /* Configure projects for major browsers */
  

  
});

