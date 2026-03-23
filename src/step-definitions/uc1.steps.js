const {Given, When, Then} = require('@cucumber/cucumber');
const LoginPage = require('../po/login.page');
const CheckoutPage =require('../po/checkout.page');

//1. Empty username and password shows error
Given('I am on the login page', async()=>{
    await LoginPage.open();
})

When('I click the login button without username and password', async()=>{
    await LoginPage.loginButton.click();
});

Then('I should see the error {string}', async(expectedError)=>{
    await expect(LoginPage.errorMessage).toBeDisplayed();
    await expect(LoginPage.errorMessage).toHaveText(expectedError);
})

//2. Only username filled shows password error
When('I enter username {string} without a password', async(username)=>{
    await LoginPage.login(username, '');
});

//3. Checkout without postal code shows error
When('I login with {string} and {string}', async(username, password)=>{
    await LoginPage.login(username, password);
});
When('I navigate to the checkout page', async()=>{
    await $('.shopping_cart_link').click();
    await CheckoutPage.proceedToCheckout();

});
When('I fill in first name {string} and last name {string}', async(fname, lname)=>{
    await CheckoutPage.fillCheckoutForm(fname, lname);
});
When('I click the continue button', async()=>{
    await CheckoutPage.clickContinue();
});
