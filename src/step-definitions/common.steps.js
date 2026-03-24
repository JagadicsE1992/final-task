//Grouping the common steps
const {Given, When, Then} = require('@cucumber/cucumber');
const LoginPage = require('../po/login.page');
const InventoryPage = require('../po/inventory.page');

Given('I am on the login page', async()=>{
    await LoginPage.open();
});

When('I login with {string} and {string}', async(username, password)=>{
    await LoginPage.login(username, password);
});

Then('I should see the error {string}', async(expectedError)=>{
    await expect(LoginPage.errorMessage).toBeDisplayed();
    await expect(LoginPage.errorMessage).toHaveText(expectedError);
});

