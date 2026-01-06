import { createBdd } from 'playwright-bdd';
import { test, expect } from '../utiles/test-fixtures';
import { LoginPage } from '../pages/login.page';

const { Given, When, Then } = createBdd(test);

let selectedRole = '';

Given('estoy en la pagina de login', async ({ page }) => {
    await page.goto("https://siasis-cert.vercel.app/login");
});

When('selecciono el rol {string}', async ({ page }, role: string) => {
    const loginPage = new LoginPage(page);
    selectedRole = role;
    await loginPage.clickRoleOption(role);
});

When('ingreso mi nombre de usuario y contraseña validos', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.validateImgLogoIsVisible();
    await loginPage.fillCredentials(selectedRole);
});

Then('accedo al sistema como {string}', async ({ page }, role: string) => {
    const loginPage = new LoginPage(page);
    await loginPage.validateLoginSuccess();
    console.log(`Ingreso exitoso como ${role}`);
});



