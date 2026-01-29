import { test, expect } from '@playwright/test';

test('Create a new Post via API', async ({ request }) => {
  
  // 1. Prepare the Payload (The Pizza Order)
  const newPost = {
    title: 'My First Automation Post',
    body: 'I am learning Playwright API testing!',
    userId: 1
  };

  // 2. Send the POST request with the data
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: newPost
  });

  // 3. Check if the server accepted it
  // Status 201 = "Created"
  expect(response.status()).toBe(201);

  // 4. Verify the server sent back our data
  const responseBody = await response.json();
  console.log(responseBody);

  // The server usually assigns a new ID to our post (e.g., id: 101)
  expect(responseBody.title).toBe('My First Automation Post');
  expect(responseBody.id).toBeTruthy(); // Checks that an ID exists

});