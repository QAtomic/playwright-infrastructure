import { Page, Locator } from '@playwright/test';
import { closeCookiePopup } from '../utils/closeCookiePopup';
import { brokenLinkChecker } from '../utils/brokenLinkChecker';

export class HomePage {
    page: Page;
    url: string;
    linkContactUs: Locator;
    linkPricing: Locator;
    linkSearch: Locator;

    constructor(page: Page) {
        this.page = page;
        this.url = "https://www.telerik.com";
        this.linkContactUs = page.locator("//a[@title='Contact Us']");
        this.linkPricing = page.locator("//li[@class='TK-Menu-Item']/a[text()='Pricing']");
        this.linkSearch = page.locator("//div[@class='TK-Drawer']/ul[@class='TK-Aside-Menu']/li/a[@title='Search']");
    }

    async open(){
        await this.page.goto(this.url);
        await closeCookiePopup(this.page);
    }

    async checkForBrokenLinks() {
        await brokenLinkChecker(this.page);
    }

    async clickContactUsLink() {
        await this.linkContactUs.click();
    }

    async clickPricingLink() {
        await this.linkPricing.click();
    }

    async clickSearchLink() {
        await this.linkSearch.click();
    }

}