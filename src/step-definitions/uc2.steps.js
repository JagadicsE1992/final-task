const {When, Then} = require('@cucumber/cucumber');
const LoginPage = require('../po/login.page');
const InventoryPage = require('../po/inventory.page');

//1. Performance glitch user login with wait strategy
Then ('Inventory page should be loaded', async()=>{
    await InventoryPage.waitForPageLoad();
    await expect(InventoryPage.inventoryContainer).toBeExisting();
});

//2. Reset app state via burger menu
When('I open the burger menu', async()=>{
    await InventoryPage.openBurgerMenu();
});

When('I click reset app state', async()=>{
    await InventoryPage.resetAppState();
});

Then('the burger menu should be closed', async()=>{
    await expect(InventoryPage.burgerMenuButton).toBeDisplayed();
});

//3. Logout via burger menu
When('I click logout', async()=>{
    await InventoryPage.logout();
});
Then('I should be back on the login page', async()=>{
    await expect($('#login-button')).toBeDisplayed();
})

