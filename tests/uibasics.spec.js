const {test,expect} =  require('@playwright/test')

test("ui basics", async({browser}) =>
    {
        const brw = await browser.newContext();
        const pg = await brw.newPage();
        await pg.goto('https://google.com');

}

)

