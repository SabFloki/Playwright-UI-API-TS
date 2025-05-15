import { test, expect } from '@playwright/test'
const path = require('path')

test.describe('Upload functionality', () => {

    test('Upload the file and verify', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/cart/')

        //set filpath of image
        const filePath = path.join(__dirname, '../../snap/image.png')

        //set the file and click on upload
        await page.setInputFiles('input#upfile_1', filePath)

        await page.locator('#upload_1').click()

        //assert the uploaded file
        await expect(page.locator('#wfu_messageblock_header_1_1')).toContainText('successfully')
    })
})