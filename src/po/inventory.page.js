class InventoryPage{
    get inventoryContainer() {return $('#inventory_container')};
    get burgerMenuButton() {return $('#react-burger-menu-btn')};
    get resetAppStateLink() {return $('#reset_sidebar_link')};
    get logoutLink() {return $('#logout_sidebar_link')};
    get burgerCrossButton() {return $('#react-burger-cross-btn')};

    async waitForPageLoad(){
        await this.inventoryContainer.waitForDisplayed({timeout: 15000});
    }
    async openBurgerMenu() {
        await this.burgerMenuButton.click();
    }
    async resetAppState(){
        await this.resetAppStateLink.waitForDisplayed({timeout: 5000});
        await this.resetAppStateLink.click();
    }
    async logout() {
        await this.logoutLink.waitForDisplayed({ timeout: 5000 });
        await this.logoutLink.click();
    }
    async closeBurgerMenu() {
        await this.burgerCrossButton.click();
    }
}
module.exports = new InventoryPage();
