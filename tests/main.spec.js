const {test, expect}= require('@playwright/test');

test('Regression test suite.', async ({ page }) => {
    //Navigate to application
    await page.goto('https://iftradi.com/login', { timeout: 60000 });
    await expect(page).toHaveTitle('Iftradi');

    //Change Language from Arabic to English
    await page.getByText('عربيEnglishعربي').click();
    await page.getByRole('menuitem', { name: 'English' }).click();

    //Locate and enter credentials in email field
    await page.locator('[placeholder="Email"]').fill('admin@iftradi.com');

    //Locate and enter credentials in password field.
    await page.locator('[placeholder="Password"]').fill('Password123!');

    //Locate and click autonomously on submit button to login
    await page.locator('button.btn.btn-primary > span.ml-50').click();

    //Navigate to dashboard
    await page.locator('.sc-jSUZER.cbkCTY').click();
    await page.getByRole('menuitem', { name: 'Dashboard' }).click();

    // await page.pause();

    //Navigate to edit profile
    await page.locator('.sc-jSUZER.cbkCTY').click();
    await page.getByRole('menuitem', { name: 'Edit Profile' }).click();
    //Change name and save changes
    await page.getByPlaceholder('[object Object]').fill('Super');
    await page.getByRole('button', { name: 'Update Profile' }).click();

    //Navigate to roles
    await page.getByRole('link', { name: 'Roles' }).click();
    //See permissions
    await page.getByRole('row', { name: '1 Super Admin April 28th 2023 08:49 AM April 28th 2023 08:49 AM' }).getByRole('img').click();
    await page.getByRole('button', { name: 'Back' }).click();
    //New role
    await page.getByRole('button', { name: '+ New Role' }).click();
    await page.locator('div').filter({ hasText: /^Permissions$/ }).locator('label').click();
    await page.locator('div').filter({ hasText: /^Permissions$/ }).locator('label').click();
    await page.getByRole('button', { name: 'Back' }).click();
    //Go to Users
    await page.getByRole('link', { name: 'Users' }).click();
    //Add User
    await page.getByRole('link', { name: 'Add User' }).click();
    //Field inputs
    await page.getByPlaceholder('First Name').fill("Test");
    await page.getByPlaceholder('Last Name').fill("User");
    await page.getByPlaceholder('Email').fill("user@test.com");
    await page.getByPlaceholder('Password', { exact: true }).fill("12345678");
    await page.getByPlaceholder('Confirm Password').fill("12345678");
    await page.locator('div').filter({ hasText: /^Not Selected$/ }).nth(3).click();
    await page.getByText('QA Roles', { exact: true }).click();
    //All users list
    await page.getByRole('link', { name: 'All Users' }).click();
    await page.getByRole('button', { name: '2' }).click();
    //Go to meetings
    await page.getByRole('link', { name: 'Meetings' }).click();
    //Schedule meeting
    await page.getByRole('link', { name: 'Schedule Meeting' }).click();
    await page.getByPlaceholder('Title').fill("Meeting crteated by automated actions.");
    await page.getByPlaceholder('Description').fill("Meeting created using autonomous actions to test the functionality of meetings.");
    await page.locator('div').filter({ hasText: /^Select\.\.\.$/ }).nth(1).click();
    await page.locator('div').filter({ hasText: /^Select\.\.\.$/ }).nth(1).click();
    await page.getByRole('button', { name: 'Submit' }).click();
    //Meeting list
    await page.getByRole('link', { name: 'Meetings List' }).click();
    await page.getByText('Previous Meetings').click();
    //Calendar
    await page.getByRole('link', { name: 'Calendar' }).click();
    //Week navigator
    await page.getByRole('button', { name: 'Week' }).click();
    //Day navigator
    await page.getByRole('button', { name: 'Day' }).click();
    //List navigator
    await page.getByRole('button', { name: 'List' }).click();
    //Month navigator
    await page.getByRole('button', { name: 'Month' }).click();
    await page.locator('.select__indicator').first().click();
    //Activities
    await page.getByRole('link', { name: 'Activities' }).click();
    //Media
    await page.getByRole('link', { name: 'Media' }).click();

    await page.locator('#meeting').click();
    
    await browser.close();

    // await page.pause();
})
