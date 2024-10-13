const{test,expect} = require('@playwright/test');


test.describe.parallel("Smoke Tests",()=>{

    test.beforeEach(async ({page})=>{

        await page.goto("/");

    })

    test.afterEach(async ({page})=>{

        console.log("this test is finished");

        })

test.skip("First Test @test-regresion", async ({page})=>
{
    await page.goto("https://playwright.dev/");
    const title = page.locator('.navbar__iner .navbar__title');
})

test("Siimple click test @regresion-test", async ({page,})=>
{
    await page.locator("text=Add/Remove Elements").click();
    await page.locator("text=Add Element").click();
})

test("Duplicate test @smoke", async ({page})=>
{
    await page.locator("text=Add/Remove Elements").click();
    await page.locator("text=Add Element").click();
})

test("Duplicate test @regresion", async ({page})=>
{
    await page.locator("text=Add/Remove Elements").click();
    await page.locator("text=Add Element").click();
})
})