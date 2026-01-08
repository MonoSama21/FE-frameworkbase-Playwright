import { createBdd } from 'playwright-bdd';
import { test, expect } from '../utiles/test-fixtures';
import { LoginPage } from '../pages/login.page';
import { error } from 'console';

const { Given, When, Then } = createBdd(test);

let selectedRole = '';

// Obtener URL dinámica según ambiente
function getEnvironmentUrl(): string {
    const environment = process.env.TEST_ENVIRONMENT || 'certificacion';
    
    if (environment === 'integracion') {
        return process.env.URL_INTEGRACION || 'https://siasis-dev.vercel.app';
    } else {
        return process.env.URL_CERTIFICACION || 'https://siasis-cert.vercel.app';
    }
}

Given('estoy en la pagina de login', async ({ page }) => {
    const baseUrl = getEnvironmentUrl();
    console.log(`🌍 Ejecutando en ambiente: ${process.env.TEST_ENVIRONMENT || 'certificacion'}`);
    console.log(`🔗 URL: ${baseUrl}/login`);
    await page.goto(`${baseUrl}/login`);
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

Then('accedo al sistema como {string} ga', async ({page}, role: string) => {
    const loginPage = new LoginPage(page);
    await loginPage.validateLoginSuccess();
    console.log(`Ingreso exitoso como ${role}`);
    throw new error('Error intencional para pruebas');
});

