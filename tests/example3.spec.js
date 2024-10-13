const{test,expect} = require('@playwright/test');

test("First Test", async ({page})=>
{
    await page.goto("https://playwright.dev/");
    const title = page.locator('.navbar__iner .navbar__title');
})

test("Simple click test", async ({page,browserName})=>
{
    test.skip(browserName ==='firefox','working od firefox fix');
    await page.goto("https://the-internet.herokuapp.com");
    await page.locator("text=Add/Remove Elements").click();
    await page.locator("text=Add Element").click();
})

test("Duplicate test", async ({page})=>
{
    await page.goto("https://the-internet.herokuapp.com");
    await page.locator("text=Add/Remove Elements").click();
    await page.locator("text=Add Element").click();
})