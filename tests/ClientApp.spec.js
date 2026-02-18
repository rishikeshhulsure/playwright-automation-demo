import {expect, test} from '@playwright/test';

test('End to end testing', async ({page}) =>{
    const userEmail = 'rishi@gmail.com';
    const password = 'Test@1234';
    const products = page.locator('.card-body');
    const productName = 'ZARA COAT 3';
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.locator('#userEmail').fill(userEmail);
    await page.locator('#userPassword').fill(password);
    await page.locator('#login').click();
    await page.waitForLoadState('networkidle');
    await expect(page.locator("div[class='card']").first()).toBeVisible();
    const count = await products.count();
    console.log(count);
    for(let i=0; i<count; i++){
        let product = await products.nth(i).locator('b').textContent();
        if(product === productName){
            await products.nth(i).locator('text= Add To Cart').click();
            break;
        }
    }
});