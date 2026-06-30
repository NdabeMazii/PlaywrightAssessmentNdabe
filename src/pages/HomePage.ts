import {Page, Locator} from "@playwright/test";
import {BasePage} from "./BasePage";

export class HomePage extends BasePage {

    get verifyHomePageHeading() {
        return this.page.getByRole('heading', { name: /Welcome\s*back/i });
    }
    
    async verifyHomePageIsDisplayed() {
        await this.basePageVerifyElementIsVisible(this.verifyHomePageHeading);
    }

}