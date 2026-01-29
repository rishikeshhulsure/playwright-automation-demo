import {test, expect} from '@playwright/test';
import {loginPage} from '../pages/LoginPage.js';

const testData = require('../data/users.json');

for(const data of testData){
    test(`Data Driven Test Login test for user: ${data.username}`, async ({page})=>{
        const loginpage = new loginPage(page);
        await loginpage.goto();
        await loginpage.login(data.username, data.password);
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });
}