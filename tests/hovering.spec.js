const{test,expect} = require('@playwright/test');
test.describe("Hovering" , (page)=>{

    test("Hovering over elements" , async ({page})=>{
        await page.goto("https://the-internet.herokuapp.com/hovers");
        await page.hover('[alt="User Avatar"]');
        await expect(page.locator('text=name: user1')).toBeVisible();
        await page.locator('text=View profile').first().click();
        await page.pause();

        

    })
})