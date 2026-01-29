import {test, expect} from '@playwright/test';

import {loginPage} from '../pages/LoginPage.js';

test('Verify log in via pageObject model', async ({page})=>{
    const loginpage = new loginPage(page);
    await loginpage.goto();
    await loginpage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});