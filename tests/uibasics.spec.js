const {test,expect} =  require('@playwright/test')

test("ui basics", async({page}) =>
    {
        // const brw = await browser.newContext();
        // const page = await brw.newPage();
        // // await pg.goto('https://google.com');

        console.log('Navigating to login page...');
  await page.goto('https://211ieox-dev-ed.develop.my.salesforce.com/'); 
  console.log(await page.title());

  console.log('Filling username and password...');
  await page.getByRole('textbox', { name: 'Username' }).fill('steve.aguayo+2.11qe@kantata.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Zse45rdx');

  console.log('Clicking login button...');
  await page.getByRole('button', { name: 'Log In' }).click(); 

  // 4. Wait for successful login 
  //    It's crucial to wait for something that indicates a successful login.
  console.log('Waiting for successful login...');
  await page.locator('div').filter({ hasText: /^SetupHome$/ }).first().waitFor({ state: 'visible',timeout: 50000 });
  await page.getByRole('button', { name: 'App Launcher' }).waitFor({ state: 'visible',timeout: 50000 });
  await page.waitForTimeout(2000);

}

)

