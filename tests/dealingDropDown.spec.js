const{test,expect} = require('@playwright/test');

test.describe("Drag&Drop example" , (page)=>{

    test("Drag&Drop" , async ({page})=>{
        await page.goto("https://the-internet.herokuapp.com/dropdown");
       // await page.locator('#dropdown').selectOption('1');
        await page.locator('#dropdown').selectOption({label:'Option 1'});
        await expect(page.locator('#dropdown')).toHaveValue('1');
        await page.locator('#dropdown').selectOption({label:'Option 2'});
        await expect(page.locator('#dropdown')).toHaveValue('2');


    })
})