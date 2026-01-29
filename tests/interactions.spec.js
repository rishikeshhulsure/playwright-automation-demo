import {test, expect} from '@playwright/test';

test('The herokuApp checkbox verification', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    const firstCheckbox = page.getByRole('checkbox').first();
    const secondCheckbox = page.getByRole('checkbox').last();

    await firstCheckbox.check();
    await secondCheckbox.uncheck();

    await expect(firstCheckbox).toBeChecked();
    await expect(secondCheckbox).not.toBeChecked();

    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdown = page.locator('#dropdown');
    await dropdown.selectOption({label: 'Option 1'});
    await expect(dropdown).toHaveValue('1');
});