const{test,expect} = require('@playwright/test');

test.describe("Download Files" , (page)=>{

    test("Download Files" , async ({page})=>{
        await page.goto("https://the-internet.herokuapp.com/download");
    
       const downloadPromise = page.waitForEvent('download');
         await page.getByText('some-file.txt').click();
           const download = await downloadPromise;
            await download.saveAs('proba' + download.suggestedFilename());  
         

      


    })
})