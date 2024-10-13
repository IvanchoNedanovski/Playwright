const{test,expect} = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto("https://demoqa.com");
  await page.locator('span').filter({ hasText: 'Elements' }).locator('div').first().click();
  await page.locator('li').filter({ hasText: 'Text Box' }).click();
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('dsfsfsdds');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill('fdsfsdfdsf');
  await page.getByPlaceholder('Current Address').click();
  await page.getByPlaceholder('Current Address').fill('dsfsfsd');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('dfsdf');
  await page.getByRole('button', { name: 'Submit' }).click();
})