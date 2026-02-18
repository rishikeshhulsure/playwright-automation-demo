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
    await products.first().waitFor();
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
    await page.locator("[routerlink*='cart']").click();
    await expect(page.locator("[class='infoWrap'] h3")).toHaveText(productName);
    await page.locator("text=Checkout").click();
    await expect(page.locator("[class*='text-validated ']")).toHaveText(userEmail);
    await page.locator("[placeholder='Select Country']").fill('ind',{delay:100});
    await page.locator(".ta-results").waitFor();
    const optionsCount = await page.locator(".ta-results button").count();
    for(let i=0; i<optionsCount; i++){
        let text = await page.locator(".ta-results button").nth(i).textContent();
        if(text.trim() === 'India'){
            await page.locator(".ta-results button").nth(i).click();
            break;
        }    
    }
    await page.locator("text=Place Order").click();
    await expect(page.locator(".hero-primary")).toHaveText('THANKYOU FOR THE ORDER.');
    let orderNumber = await page.locator("[class='ng-star-inserted'] td label").last().textContent();
    console.log(orderNumber);

});