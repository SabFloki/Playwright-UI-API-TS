import { Page, Locator } from "playwright"

class HomePage {
    page: Page
    locator: Locator
    getStartedBtn: Locator
    headingText: Locator
    homeText: Locator
    navLinks: Locator
    homeTextCSS: Locator

    constructor(page: Page) {
        this.page = page
        this.getStartedBtn = page.locator('#get-started')
        this.headingText = page.locator('text=Think different. Make different.')
        this.homeText = page.locator('#zak-primary-menu >> text=Home')
        this.homeTextCSS = page.locator('#zak-primary-menu:has-text("Home")')
        this.navLinks = page.locator('#zak-primary-menu li')
    }

    async getNavLinks() {
        return this.navLinks.allTextContents()
    }


}

export default HomePage