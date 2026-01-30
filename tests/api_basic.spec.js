import { test, expect } from '@playwright/test';

test('Get User Details via JSONPlaceholder 1', async ({ request }) => {
  
  // 1. Send GET request to the friendly API
  const response = await request.get('https://jsonplaceholder.typicode.com/users/1');

  // 2. Check if the server is happy
  // If this fails with 403 again, your internet provider/VPN is blocking scripts strictly.
  expect(response.status()).toBe(200);

  // 3. Unpack the data
  const responseBody = await response.json();
  
  // Print it to see the structure
  console.log(responseBody);

  // 4. Verify the data
  // This API returns a user named "Leanne Graham"
  expect(responseBody.name).toBe('Leanne Graham');
  expect(responseBody.email).toBe('Sincere@april.biz');

});