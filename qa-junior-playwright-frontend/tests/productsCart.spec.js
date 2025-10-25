import { test } from '@playwright/test';
import { Login } from '../pages/login.js';
import { productsCart } from '../pages/productsCart.js';
import { checkout } from '../data/data.js';

test.describe('Products in cart', () => {
  test('Products in cart', async ({ page }) => {
    const login = new Login(page);
    const products = new productsCart(page);

    await page.goto('https://www.saucedemo.com/');
    await login.loginSuccess();

    await products.addProducts();
    await products.openCart();
    await products.deleteItems();
    await products.checkout(checkout.firstName, checkout.lastName, checkout.postalCode);
    await products.overview();
    await products.checkoutComplete();
  });
});
