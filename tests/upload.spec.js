const{test,expect} = require('@playwright/test');

test.describe("Upload Files" , (page)=>{

    test("Upload Files" , async ({page})=>{
        await page.goto("https://the-internet.herokuapp.com/upload");
    
       await page.setInputFiles('#file-upload','uploadedFiles/simple.pdf');
       await page.locator('input:has-text("Upload")').click();
    //     await expect(page.locator('text=File Uploaded!')).toBeVisible();
    //     await expect( page.locator('text= sample.pdf ')).toBeVisible();
    //    await page.pause();

    })
})