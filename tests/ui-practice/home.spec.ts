import { test, expect } from '@playwright/test'
import HomePage from '../../pages/home.page'

test.describe('Home', () => {

    test('Open homepage and verify the title', async ({ page }) => {

        await page.goto('https://practice.sdetunicorns.com/')
        //verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns')
    })

    test('Open About page and verify the title', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/about/')
        //verify title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site')
        await expect(page).toHaveTitle(/.*Practice E-Commerce Site/)
    })

    test('Click get started button using CSS Selector', async ({ page }) => {
        const homePage = new HomePage(page)
        await page.goto('https://practice.sdetunicorns.com')

        //click the button
        await homePage.getStartedBtn.click()
        //verify url has #get-started
        await expect(page).toHaveURL(/.*#get-started/)
    })

    test('Verify heading text using text selector', async ({ page }) => {
        const homePage = new HomePage(page)
        await page.goto('https://practice.sdetunicorns.com')

        //click the button
        const headingText = await homePage.headingText

        //verify headingText is visible
        await expect(headingText).toBeVisible()
    })

    test('Verify home link using text and css', async ({ page }) => {
        const homePage = new HomePage(page)
        await page.goto('https://practice.sdetunicorns.com')

        //click the button
        const homeText = await homePage.homeText

        //verify headingText is visible
        await expect(homeText).toBeEnabled()
    })

    test('Verify home link using text and css - method 2', async ({ page }) => {
        const homePage = new HomePage(page)
        await page.goto('https://practice.sdetunicorns.com')

        //click the button
        const homeText = await homePage.homeTextCSS

        //verify headingText is visible
        await expect(homeText).toBeEnabled()
    })

    test('Capture menu items and verify the nth item', async ({ page }) => {
        const homePage = new HomePage(page)
        const expectedItems = [
            'Home', 'About', 'Shop', 'Blog', 'Contact', 'My account'
        ]
        await page.goto('https://practice.sdetunicorns.com')

        const menuItems = await homePage.navLinks

        //loop through each items and print
        for (let el of await menuItems.elementHandles()) {
            console.log(await el.textContent())
        }

        //verify menu items
        expect(await menuItems.allTextContents()).toEqual(expectedItems)

        //verify menu items with nth item
        expect(await menuItems.nth(3).textContent()).toEqual(expectedItems[3])
    })
})