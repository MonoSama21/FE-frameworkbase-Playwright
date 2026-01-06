import { test as base } from 'playwright-bdd';
import { LoginPage } from '../pages/login.page';
import * as dotenv from 'dotenv';

dotenv.config({ path: 'playwright.env' });

type Fixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';
