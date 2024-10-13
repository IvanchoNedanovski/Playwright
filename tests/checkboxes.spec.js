const{test,expect} = require('@playwright/test');

test.describe("Checkboxes" , (page)=>{

    test("Checkboxes" , async ({page})=>{
        await page.goto("https://the-internet.herokuapp.com/checkboxes");
        await page.locator('input[type="checkbox"]').first().check();
        await page.locator('input[type="checkbox"]').last().uncheck();
        await page.pause();
        

    })
})
    