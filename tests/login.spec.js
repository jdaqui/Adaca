const {test, expect} = require('@playwright/test');


test('Login', async ({ page }) => {
    await page.goto('https://saucedemo.com/');
  
    await page.getByPlaceholder("Username").type("standard_user")
    await page.getByPlaceholder("Password").type("secret_sauce")
    await page.locator("//input[@id='login-button']").click
  });