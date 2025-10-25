import { inputSelectors } from '../data/selectors.js';
import { loginData, errorMessage } from '../data/data.js';

export class loginError {
  constructor(page) {
    this.page = page;
    this.btnUsername = page.locator(inputSelectors.username);
    this.btnPassword = page.locator(inputSelectors.password);
    this.btnLogin = page.locator(inputSelectors.login);
    this.btnError = page.locator(inputSelectors.error);
  }

  async loginError() {
    console.log('Logging in...');
    await this.btnUsername.type(loginData.username);
    await this.btnPassword.type(loginData.errorPassword);
    await this.btnLogin.click();
    console.log('unsuccessful login');
  }

  async validatingMessage() {
    console.log('Validating error message...');
    const errorText = await this.btnError.textContent();
    if (errorText.includes(errorMessage.textError)) {
      console.log('Error message displayed correctly.');
    } else {
      throw new Error('Error !! Message is not displaying correctly.');
    }
    console.log('Message validation completed');
  }
}
