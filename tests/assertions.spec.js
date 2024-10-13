const{test,expect} = require('@playwright/test');

test.describe("Example" , (page)=>{

    test("Testing Assertions" , async ({page})=>{

        await page.goto("https://demoqa.com/text-box");
        await page.locator('#userName').type("Test Username");
        await page.locator('[placeholder="name@example.com"]').type("testmail@test.com");
        await page.locator('[placeholder="Current Address"]').type("This is the current adress");
        await page.locator('#permanentAddress').type("Test");
        await page.locator('button:has-text("Submit")').click();
        await page.pause();
        
        const name = page.locator('#name');
        const email = page.locator('#email');
        const currentAddress = page.locator('p#currentAddress');
        const permanentAddress = page.locator('p#permanentAddress');

        await expect(name).toBeVisible();
        await expect(name).toHaveText('Name:Test Username');
        await expect(email).toBeVisible();
        await expect(email).toHaveText('Email:testmail@test.com');
        await expect(currentAddress).toBeVisible();
        await expect(currentAddress).toHaveText('Current Address :This is the current adress');
        await expect(permanentAddress).toBeVisible();
       await expect(permanentAddress).toHaveText('Permananet Address :Test');
                                                  



    })
})
      