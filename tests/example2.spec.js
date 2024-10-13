const{test,expect} = require('@playwright/test');

//test("First Test", async ({page})=>
// {
//     await page.goto("https://playwright.dev/");
//     const title = page.locator('.navbar__iner .navbar__title');
//     await expect(title).toHaveText('Playwright');
// }

test("Siimple click test", async ({page})=>
{
    await page.goto('https://the-internet.herokuapp.com/');
    await page.locator("text=Add/Remove Elements").click();
    await page.pause();
    await page.locator("text=Add Element").click();
})

test("Siimple click test but other sintax", async ({page})=>
{
    await page.goto('https://the-internet.herokuapp.com/');
    await page.click("text=Add/Remove Elements");
    await page.pause();
    await page.locator("text=Add Element").click();
})

test("Siimple click test but other sintax1", async ({page})=>
{
    await page.goto('https://the-internet.herokuapp.com/');
    const element = page.locator("text=Add/Remove Elements");
    await page.pause();
    const addElement =  page.locator("text=Add Element");
    await element.click();
    await addElement.click();
})






