class CheckoutPage{
    get checkoutButton() { return $('#checkout');}
    get firstNameInput() { return $('#first-name');}
    get lastNameInput() { return $('#last-name');}
    get postalCodeInput() { return $('#postal-code');}
    get continueButton() { return $('#continue');}
    get cartLink(){return $('.shopping_cart_link');}
    get errorMessage() { return $('[data-test="error"]');}

    async proceedToCheckout(){
        await this.checkoutButton.click();
    }
    async fillCheckoutForm(firstName, lastName, postalCode){
        if(firstName) await this.firstNameInput.setValue(firstName);
        if(lastName) await this.lastNameInput.setValue(lastName);
        if(postalCode) await this.postalCodeInput.setValue(postalCode);
    }
    async clickContinue(){
        await this.continueButton.click();
    }
    async goToCart(){
        await this.cartLink.click();
    }

}

module.exports = new CheckoutPage();