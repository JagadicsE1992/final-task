const CheckoutPage = require("../po/checkout.page");
const LoginPage = require("../po/login.page")

describe('UC-1: Form validation', ()=>{
    beforeEach(async()=>{
        await LoginPage.open();
    });
    //passed
    it('should show an error when both field are empty', async()=>{
        await LoginPage.login('', '');
        await expect(LoginPage.errorMessage).toBeDisplayed();
        await expect(LoginPage.errorMessage).toHaveText(
            expect.stringContaining('Username is required')
        );
    });
    //passed
    it('should show error when only username is filled with data', async()=>{
        await LoginPage.login('standard_user', '');
        await expect(LoginPage.errorMessage).toBeDisplayed();
        await expect(LoginPage.errorMessage).toHaveText(
            expect.stringContaining('Password is required')
        );
    });
    
    it('should show error when postal code is empty at checkout', async()=>{
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        const addToCartBtn = await $('.inventory_item:first-child button');
        await addToCartBtn.click();

        await $('.shopping_cart_link').click();

        await CheckoutPage.proceedToCheckout();
        await CheckoutPage.fillCheckoutForm('UserFirst', 'UserLast')
        await CheckoutPage.clickContinue();

        await expect(CheckoutPage.errorMessage).toBeDisplayed();
        await expect(CheckoutPage.errorMessage).toHaveText(
            expect.stringContaining('Postal Code is required')
        );
        
    })
})