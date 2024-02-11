// @ts-check
const { test, expect } = require('@playwright/test');
const { PlaywrightDevPage } = require('./playwright-dev-page');
test('search product', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.goto();
  // Expect a title "to contain" a substring.
  await playwrightDev.verifyTitle();
  await expect(page).toHaveTitle(/Home Page/);

  await page
  .getByPlaceholder('Search entire store here...').fill('sports watch');
  
  await page.keyboard.press('Enter');
  
  
  await expect(page.locator('//p[@id="toolbar-amount"]').first()).toBeVisible();
  
// Click it.

});

test('Sign In to the Application', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.goto();
  // Expect a title "to contain" a substring.
  await playwrightDev.verifyTitle();
  

  await page
  .getByRole('link', { name: 'Sign In' }).click();
  
  await page
  .getByTitle('Email').fill('karuna6593@gmail.com');
  await page
  .getByTitle('Password').fill('Karuna@6593');
  await page.mouse.down();
  await page.
  getByRole('button', { name: 'Sign In' })
.click();
page
  .getByPlaceholder('Welcome, karuna6593 karuna6593!').isHidden({timeout:60000})
await expect(page
  .getByPlaceholder('Welcome, karuna6593 karuna6593!')).toBeHidden();
  

// Click it.

});

test('Sign Up for the Application', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.goto();
  // Expect a title "to contain" a substring.
  await playwrightDev.verifyTitle();
  
  await page
  .getByRole('link', { name: 'Create an Account' }).click();
  let r = (Math.random() + 1).toString(36).substring(7);
  console.log("random", r);
r+='@gmail.com';
  
console.log("random", r);
  await page
  .getByTitle('First Name').fill('karuna6593');
  await page
  .getByTitle('Last Name').fill('karuna6593');
  await page
  .getByTitle('email').fill(r);
  await page
  .getByLabel('Password', { exact: true }).first().fill('Karuna@6593');
  await page
  .getByLabel('Confirm Password').fill('Karuna@6593');
  await page
  .getByTitle('Create an Account').click();
page
  .getByPlaceholder('message-success success message').isVisible({timeout:90000})
//await expect(page  .getByPlaceholder('My Account')).toBeEnabled({timeout:90000});
  

// Click it.

});


