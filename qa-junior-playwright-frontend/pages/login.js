import { inputSelectors } from '../data/selectors.js';
import { loginData } from '../data/data.js';

export class Login {
  constructor(page) {
    this.page = page;
    this.btnUsername = page.locator(inputSelectors.username);
    this.btnPassword = page.locator(inputSelectors.password);
    this.btnLogin = page.locator(inputSelectors.login);
  }

  async loginSuccess() {
    console.log('Logging in...');
    await this.btnUsername.type(loginData.username);
    await this.btnPassword.type(loginData.password);
    await this.btnLogin.click();
    console.log('Login successfullyS');
  }
}
