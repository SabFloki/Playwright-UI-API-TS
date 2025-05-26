import { test, expect } from '../../pages/fixtures/pages.fixture'
import path from 'path'

test.describe('Upload functionality', () => {

    test('Upload the file and verify with conditional wait', async ({ page, cartPage }) => {

        await page.goto('/cart')

        //set filpath of image
        const filePath = await cartPage.uploadComponent().setFilePath('../../snap/image.png')

        //set the file and click on upload
        await cartPage.uploadComponent().uploadFile(filePath)

        //assert the uploaded file
        await expect(cartPage.uploadComponent().message).toContainText('successfully')
    })

    test('Upload the file and verify with assertion wait', async ({ page, cartPage }) => {

        await page.goto('/cart')

        //set filpath of image
        //set filpath of image
        const filePath = await cartPage.uploadComponent().setFilePath('../../snap/image.png')

        //set the file and click on upload
        await cartPage.uploadComponent().uploadFile(filePath)
        //assert the uploaded file
        await expect(page.locator('#wfu_messageblock_header_1_1')).toContainText('successfully', { timeout: 10000 })
    })
})