//The "Tab Jumper" Test - handle a JS Alert and then jump between browser tabs
import {test, expect} from '@playwright/test';

test('Alerts and Multiple Tabs Test', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog', async dialog => {
        console.log('Alert says: ' + dialog.message());
        await dialog.accept();
    });


    // Click the button that triggers the alert
    await page.getByRole('button', {name: 'Click for JS Alert'}).click();

    // Assertion: Check the result text on the page
    await expect(page.getByText('You successfully clicked an alert')).toBeVisible();

    // PART 2:Open a new tab
    await page.goto('https://the-internet.herokuapp.com/windows');

    // 1. Prepare to catch the new page (The "Mitt")
    // We use 'context' here because tabs live inside the browser context
    const pagePromise = page.context().waitForEvent('page');

    // 2. Click the link that opens the new tab (The "Pitch")
    await page.getByText('Click Here').click();

    // 3. Catch the new page
    const newTab = await pagePromise;

    // CRITICAL: Now we have TWO pages: 'page' (old tab) and 'newTab' (new tab).
    // We must tell the script exactly which one to look at.

    // check text on the new tab
    await expect(newTab.getByRole('heading', { name: 'New Window' })).toBeVisible();

    // Check text on the OLD tab (to prove we can switch back)
    await expect(page.getByRole('heading', { name: 'Opening a new window' })).toBeVisible();

    // Close the new tab
    await newTab.close();

});