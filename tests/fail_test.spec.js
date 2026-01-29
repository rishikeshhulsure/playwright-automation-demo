const { test, expect } = require('@playwright/test');

test('This test will fail', async ({ page }) => {
  await page.goto('https://example.com');
  
  // We expect the text "Google" to be on Example.com (It won't be there!)
  await expect(page.getByText('Google')).toBeVisible({ timeout: 2000 });
});