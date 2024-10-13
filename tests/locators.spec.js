const{test,expect} = require('@playwright/test');

test.describe("Example" , (page)=>{

    test("Testing Selectors" , async ({page})=>{

        await page.goto("https://demoqa.com/text-box");
        await page.locator('#userName').type("Test Username");
        await page.pause();
        await page.locator('[placeholder="name@example.com"]').type("testmail@test.com");
        await page.pause();
        await page.locator('#currentAddress').type("This is the current adress");
        await page.pause();
        await page.locator('#permanentAddress').type("This is a pemanent address");
        await page.pause();
        await page.locator('button:has-text("Submit")').click();
        await page.pause();

    })
})