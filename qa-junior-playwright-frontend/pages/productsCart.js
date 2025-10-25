import { inputSelectors } from '../data/selectors.js';
import { checkout } from '../data/data.js';

export class productsCart {
  constructor(page) {
    this.page = page;
    this.btnAddBackpack = page.locator(inputSelectors.backpack);
    this.btnAddBikeLight = page.locator(inputSelectors.bikeLight);
    this.btnAddTShirt = page.locator(inputSelectors.tShirt);
    this.btnAddJacket = page.locator(inputSelectors.jacket);
    this.btnAddOnesie = page.locator(inputSelectors.onesie);
    this.btnAddTShirtRead = page.locator(inputSelectors.tShirtRed);
    this.btnCart = page.locator(inputSelectors.cart)
    this.btnRemoveTShirt = page.locator(inputSelectors.removedTShirt);
    this.btnRemoveBikeLight = page.locator(inputSelectors.removeBikeLight);
    this.btnChekout = page.locator(inputSelectors.checkout);
    this.btnFirstName = page.locator(inputSelectors.firstName);
    this.btnLastName = page.locator(inputSelectors.lastName);
    this.btnPostalCode = page.locator(inputSelectors.postalCode);
    this.btnContinue = page.locator(inputSelectors.continue);
    this.btnFinish = page.locator(inputSelectors.finish);
    this.btnCheckoutMessage = page.locator(inputSelectors.checkoutMessage);
    
    //Names
    this.productsNames = page.locator(inputSelectors.productsName);
    this.productsNameOverview = page.locator(inputSelectors.productsNameOverview);

    //Price
    this.subtotal = page.locator(inputSelectors.subtotal);
    this.tax = page.locator(inputSelectors.tax);
    this.total = page.locator(inputSelectors.total);    
  }

  async addProducts() {
    console.log('Adding products to the cart...');
    await this.btnAddBackpack.click();
    await this.btnAddBikeLight.click();
    await this.btnAddTShirt.click();
    await this.btnAddJacket.click();
    await this.btnAddOnesie.click();
    await this.btnAddTShirtRead.click();
    console.log('Addition completed');
  }

  async openCart() {
    console.log('Accessing the cart...');
    await this.btnCart.click();

    const items = await this.productsNames.allTextContents();
    console.log('Items in cart:', items);

    console.log('Validation of items in the cart completed successfully');
  }

  async deleteItems() {
    console.log('Removing items from the cart...');
    await this.btnRemoveTShirt.click();
    await this.btnRemoveBikeLight.click();

    const items = await this.productsNames.allTextContents();
    console.log('Items in cart after removal:', items);

    console.log('Removal completed successfully');
  }

    async checkout() {
    console.log('Finalizing purchase...');
    await this.btnChekout.click();
    await this.btnFirstName.fill(checkout.firstName);
    await this.btnLastName.fill(checkout.lastName);
    await this.btnPostalCode.fill(checkout.postalCode);
    await this.btnContinue.click();
    console.log('Purchase completed');
  }

  async overview() {
    console.log('Verifying purchase...');

    const itemsOverview = await this.productsNameOverview.allTextContents();
    console.log('Items in cart:', itemsOverview);

    const priceSubTotal = await this.subtotal.allTextContents();
    console.log('Subtotal:', priceSubTotal);

    const priceTax = await this.tax.allTextContents();
    console.log('Tax:', priceTax);

    const priceTotal = await this.total.allTextContents();
    console.log('Total:', priceTotal);

    await this.btnFinish.click();

    console.log('Purchase completed');
  }

  async checkoutComplete() {
    console.log('Validating message...');
    const completed = await this.btnCheckoutMessage.textContent();
    if (completed .includes(checkout.messege)) {
      console.log('Thank you message displayed correctly.');
    } else {
      throw new Error('Error !! Message is not displaying correctly.');
    }
    console.log('Message validation completed');
  }
}
