import { test, expect } from '../../pages/fixtures/pages.fixture'

test.describe('Home', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    })

    test('Open homepage and verify the title', async ({ page, homePage }) => {

        //verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns')
    })

    test('Open About page and verify the title', async ({ page, homePage }) => {
        await page.goto('/about')
        //verify title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site')
        await expect(page).toHaveTitle(/.*Practice E-Commerce Site/)
    })

    test('Click get started button using CSS Selector', async ({ page, homePage }) => {

        //click the button
        await homePage.getStartedBtn.click()
        //verify url has #get-started
        await expect(page).toHaveURL(/.*#get-started/)
    })

    test('Verify heading text using text selector', async ({ page, homePage }) => {

        //click the button
        const headingText = await homePage.headingText

        //verify headingText is visible
        await expect(headingText).toBeVisible()
    })

    test('Verify home link using text and css', async ({ page, homePage }) => {

        //click the button
        const homeText = await homePage.homeText

        //verify headingText is visible
        await expect(homeText).toBeEnabled()
    })

    test('Verify home link using text and css - method 2', async ({ page, homePage }) => {

        //click the button
        const homeText = await homePage.homeTextCSS

        //verify headingText is visible
        await expect(homeText).toBeEnabled()
    })

    test('Capture menu items and verify the nth item', async ({ page, homePage }) => {

        const expectedItems = [
            'Home', 'About', 'Shop', 'Blog', 'Contact', 'My account'
        ]

        const menuItems = await homePage.navLinks

        //loop through each items and print
        for (let el of await menuItems.elementHandles()) {
            console.log(await el.textContent())
        }

        //verify menu items
        expect(await homePage.getNavLinks()).toEqual(expectedItems)

        //verify menu items with nth item
        expect(await menuItems.nth(3).textContent()).toEqual(expectedItems[3])
    })

    test('Find broken links on the page and retrieve the numbers', async ({ page, homePage }) => {


        const links: any = await page.$$eval('a', anchor => {
            return anchor.map(el => el.href).filter(href => href.startsWith('http'))
        })
        let brokenCount = 0
        for (const href of links) {
            try {
                const response = await page.request.get(href!, { timeout: 30000 })
                if (!response.ok()) {
                    console.log(`❌ Broken link (bad status): ${href} — Status: ${response.status()}`)
                    brokenCount++
                } else {
                    console.log(`✅ Valid link: ${href} — Status: ${response.status()}`)
                }
            } catch (error) {
                console.log(`❌ Broken link (timeout or error): ${href}`)
                brokenCount++
            }
        }
        console.log(`🔍 Total links checked: ${links.length}`)
        console.log(`🚨 Total broken links: ${brokenCount}`)

    })
})