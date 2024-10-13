const{test,expect} = require('@playwright/test');

test.describe("Example" , (page)=>{

    test("Testing WebSite JLab" , async ({page})=>{
        await page.goto("http://jovanovskilaboratory.com/");
        await page.locator('a:has-text("Contact")').click();
        await page.locator('#name').type("ivancho");
        await page.locator('#email').type("ivancho@gmail.com");
        await page.locator('[name="subject"]').type("3D printer");
        await page.locator('[name="message"]').type("i want to buy one for home i have a lot of time and i want go learn how is work the machine");
      //  await page.locator("text=Send Message").click();
      //  await page.pause();
        
    })
})
