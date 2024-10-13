const{test,expect} = require('@playwright/test');
test.describe("Authentication" , (page)=>{

    test("Saving Authentication" , async ({page})=>{

        await page.goTo("https://parabank.parasoft.com/parabank/register.htm");


    })
})
