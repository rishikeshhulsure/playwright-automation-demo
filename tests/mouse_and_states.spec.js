//Mouse and hover actions - The Ghost test
import {test, expect} from '@playwright/test';

test('Mouse hover and state verification', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/hovers');
    const userImage = page.locator('.figure').first();
    await userImage.hover();
    const hiddenText = page.getByText('name: user1');
    await expect(hiddenText).toBeVisible();

    await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
    const inputBox = page.locator('#input-example input');
    const enableButton = page.locator('#input-example button');
    await expect(inputBox).toBeDisabled();
    await enableButton.click();

    await expect(inputBox).toBeEnabled();
    await inputBox.fill('I have the power!');
    await expect(inputBox).toHaveValue('I have the power!');
});