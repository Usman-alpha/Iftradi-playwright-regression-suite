const {test, expect}= require('@playwright/test');

test('Login.', async ({ page }) => {
    //Navigate to application
    await page.goto('https://iftradi.com/login', { timeout: 60000 });
    await expect(page).toHaveTitle('Iftradi');

    //Pause flow to debug or some other oeprations
    // await page.pause();

    //Locate and enter credentials in email field
    await page.locator('[placeholder="Email"]').fill('admin@iftradi.com');

    // await page.pause();

    //Locate and enter credentials in password field.
    await page.locator('[placeholder="Password"]').fill('Password123!');

    // await page.pause();

    //Locate and click autonomously on submit button to login
    await page.locator('button.btn.btn-primary > span.ml-50').click();

    // await page.pause();

    //Logout from the application
    //This is in case your logout is in some dropdown. You have to locate and click dropdown and then click on logout.
    await page.locator('.sc-jSUZER.cbkCTY').click();

    await page.pause();

    await page.locator('button:has-text("Log Out")').click();

    //Close the browser
    // await browser.close();
})