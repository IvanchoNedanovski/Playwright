const{test,expect} = require('@playwright/test');

test.describe("Drag&Drop" , (page)=>{

    test("Drag&Drop" , async ({page})=>{
        await page.goto("https://the-internet.herokuapp.com/drag_and_drop");
        await page.dragAndDrop('#column-a','#column-b');
        await page.pause();


    })
})