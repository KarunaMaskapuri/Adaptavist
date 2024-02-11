const { expect } = require('@playwright/test');

exports.PlaywrightDevPage = class PlaywrightDevPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
     }

  async goto() {
    await this.page.goto('https://magento.softwaretestingboard.com/');
  }

  

  async pageObjectModel() {
    await this.verifyTitle();
  }
  async verifyTitle() {
  await expect(this.page).toHaveTitle(/Home Page/);
  }

};