const{test,expect} = require('@playwright/test');

test.describe("Example" , (page)=>{

    test("Testing Assertions2" , async ({page})=>{

        await page.goto("https://demoqa.com/text-box");
        await expect(page).toHaveTitle("DEMOQA");
        await expect(page).toHaveURL("https://demoqa.com/text-box")



    })
})
