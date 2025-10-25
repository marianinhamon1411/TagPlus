import { test } from '@playwright/test';
import { Login } from '../pages/login.js';
import { loginData } from '../data/data.js';

test.describe('Login', () => {
  test('Login successfully', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const login = new Login(page);
    await login.loginSuccess(loginData.username, loginData.password);
  });
});
