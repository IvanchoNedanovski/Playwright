const{test,expect} = require('@playwright/test');

test.describe("Authentication" , (page)=>{

    test("Saving Authentication" , async ({page})=>{

        await page.goto('https://parabank.parasoft.com/parabank/index.htm');
        await page.locator('input[name="username"]').click();
        await page.locator('input[name="username"]').fill('ivnacho');
        await page.locator('input[name="username"]').press('Tab');
        await page.locator('input[name="password"]').click();
        await page.locator('input[name="username"]').fill('ivancho');
        await page.locator('input[name="username"]').click();
        await page.locator('input[name="password"]').fill('ivancho');
        await page.getByRole('button', { name: 'Log In' }).click();
        
        await page.context().storageState({path: 'automationUser.json'});
      })





    })
