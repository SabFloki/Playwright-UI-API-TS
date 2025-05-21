import { test as baseTest, Page } from '@playwright/test'
import CartPage from '../cart.page'
import HomePage from '../home.page'

type Fixture = {
    page: Page
    cartPage: CartPage
    homePage: HomePage
}

export const test = baseTest.extend<Fixture>({
    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page)
        await use(cartPage)
    },
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page)
        await use(homePage)
    },
})

export { expect } from '@playwright/test'