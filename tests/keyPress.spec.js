const{test,expect} = require('@playwright/test');
test.describe("KeyPress" , (page)=>{

    test("KeyPress" , async ({page})=>{
        await page.goto("https://the-internet.herokuapp.com/key_presses");
         await page.press('#target','2');
         await page.press('#target','Delete');

         await page.pause();
        

    })
})