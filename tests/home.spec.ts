import { test, expect } from '@playwright/test'

test.describe('Home', () => {

    test('Open homepage and verify the title', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/')

        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns')
    })
})