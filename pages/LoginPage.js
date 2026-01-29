import { expect } from "@playwright/test";

exports.loginPage = class LoginPage{
    /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page) {
        this.page = page;
        // we define our locators here ONCE.
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('input[type="submit"]');
    }

    //We define the actions here

    async goto(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(userName, password){
        await this.usernameInput.fill(userName);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}