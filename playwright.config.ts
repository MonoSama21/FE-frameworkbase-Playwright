import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'src/resources/features/**/*.feature',
  steps: ['src/test/utiles/test-fixtures.ts', 'src/test/steps/*.ts'],
  outputDir: './target/.features-gen',
});

export default defineConfig({
  testDir,
  outputDir: './target/test-results',
  fullyParallel: true,
  timeout: 90000,
  reporter: [
    ['list', { printSteps: true }],
    ['html', { outputFolder: './target/playwright-report', open: 'always' }],
    ['json', { outputFile: './target/test-results/results.json' }]
  ],
  use: {
    trace: 'retain-on-failure',
    screenshot: {
      mode: 'only-on-failure',
      fullPage: true
    },
    video: {
      mode: 'retain-on-failure',
      size: { width: 1500, height: 800 }
    },
    actionTimeout: 60000,
    navigationTimeout: 60000,
  },

  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 1500, height: 800 }
      },
    }
  ],
});
