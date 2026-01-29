import {expect, test} from '@playwright/test';

test('Verify web ui contrls', async ({page}) =>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').fill('rahulshettyacademy');
    //await page.locator('#password').fill('Learning@830$3mK2');
    await page.fill('#password','Learning@830$3mK2');
    await page.locator('.customradio:nth-child(2) .radiotextsty').click();
    await page.locator("#okayBtn").click();
    await expect(page.locator('.customradio:nth-child(2) .radiotextsty')).toBeChecked();
    await page.locator('select.form-control').selectOption('consult');
    await page.locator("[type='checkbox']").check();
    await page.locator('#signInBtn').click();
    await page.waitForLoadState('networkidle');
});