const{test,expect} = require('@playwright/test');

test.describe("Frame example" , (page)=>{

    test("Frame" , async ({page})=>{
        await page.goto("https://the-internet.herokuapp.com/iframe");
        const frameTest = page.frameLocator('#mce_0_ifr').locator('html');
        await frameTest.click();
        await frameTest.clear();
        await frameTest.type('this is just a test typing in frame');
      


    })
})