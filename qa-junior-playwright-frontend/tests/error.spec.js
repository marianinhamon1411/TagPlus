import { test } from '@playwright/test';
import { loginError } from '../pages/error.js';
import { loginData, errorMessage } from '../data/data.js';

test.describe('Login error', () => {
  test('Error login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const erro = new loginError(page);
    await erro.loginError(loginData.username, loginData.errorPassword);
    await erro.validatingMessage(errorMessage.errorMessage);
  });
});
