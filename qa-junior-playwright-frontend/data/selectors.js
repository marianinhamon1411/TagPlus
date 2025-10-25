export const inputSelectors = {
  //Login
  username: '[data-test="username"]',
  password: '[data-test="password"]',
  login: '[data-test="login-button"]',
  error: '[data-test="error"]',

  //Products
  backpack: '[data-test="add-to-cart-sauce-labs-backpack"]',
  bikeLight: '[data-test="add-to-cart-sauce-labs-bike-light"]',
  tShirt: '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]',
  jacket: '[data-test="add-to-cart-sauce-labs-fleece-jacket"]',
  onesie: '[data-test="add-to-cart-sauce-labs-onesie"]',
  tShirtRed: '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]',
  removedTShirt: '//button[@id="remove-sauce-labs-bolt-t-shirt"]',
  removeBikeLight: '//button[@id="remove-sauce-labs-backpack"]',
  checkout: '[data-test="checkout"]',
  finish: '[data-test="finish"]',
  checkoutMessage: '[data-test="complete-header"]',

  //Cart
  cart: '[data-test="shopping-cart-badge"]',
  productsName: '[data-test="inventory-item-name"]',
  productsNameOverview: '[data-test="inventory-item-name"]',

  //Checkout
  firstName: '[data-test="firstName"]',
  lastName: '[data-test="lastName"]',
  postalCode: '[data-test="postalCode"]',
  continue: '[data-test="continue"]',

  //Price
  subtotal: '[data-test="subtotal-label"]',
  tax: '[data-test="tax-label"]',
  total: '[data-test="total-label"]'
};
