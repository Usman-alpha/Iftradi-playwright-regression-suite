const {test, expect}= require('@playwright/test');

test('Login to Application with valid credentials.', async ({page}) => {
        //Navigate to application
        await page.goto('https://iftradi.com/register', { timeout: 60000 });
        await expect(page).toHaveTitle('Iftradi');

        //Pause flow to debug or some other oeprations
        // await page.pause();

        //Change Language from Arabic to English
        await page.getByText('عربيEnglishعربي').click();
        await page.getByRole('menuitem', { name: 'English' }).click();

        //Locate and enter credentials in email field
        await page.getByPlaceholder('First Name').fill('abc');
        await page.getByPlaceholder('Last Name').fill('xyz');
        await page.getByPlaceholder('Email').fill('user@test.com');
        const pwd= await page.getByPlaceholder('Password', { exact: true }).fill('12345678');
        await page.getByPlaceholder('Confirm Password').fill('12345678');
        await page.getByRole('button', { name: 'Register' }).click();

        //Close the browser
        await browser.close();
})