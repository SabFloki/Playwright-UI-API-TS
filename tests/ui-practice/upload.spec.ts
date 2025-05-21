import { test, expect } from '../../pages/fixtures/pages.fixture'
const path = require('path')

test.describe('Upload functionality', () => {

    test('Upload the file and verify with conditional wait', async ({ page, cartPage }) => {

        await page.goto('https://practice.sdetunicorns.com/cart/')

        //set filpath of image
        const filePath = path.join(__dirname, '../../snap/image.png')

        //set the file and click on upload
        await cartPage.uploadComponent().uploadFile(filePath)

        //assert the uploaded file
        await expect(cartPage.uploadComponent().message).toContainText('successfully')
    })

    test('Upload the file and verify with assertion wait', async ({ page, cartPage }) => {

        await page.goto('https://practice.sdetunicorns.com/cart/')

        //set filpath of image
        const filePath = path.join(__dirname, '../../snap/image.png')

        //set the file and click on upload
        //set the file and click on upload
        await cartPage.uploadComponent().uploadFile(filePath)

        //assert the uploaded file
        await expect(page.locator('#wfu_messageblock_header_1_1')).toContainText('successfully', { timeout: 10000 })
    })
})