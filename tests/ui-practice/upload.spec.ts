import { test, expect } from '../../pages/fixtures/pages.fixture'
import path from 'path'
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const snapFolderPath = path.join(__dirname, '../../snap');

const imageFiles = fs
    .readdirSync(snapFolderPath)
    .filter(file => /\.(png|jpg|jpeg)$/i.test(file)); // filter image files only

for (let imageFile of imageFiles) {
    test.describe('Upload functionality', () => {

        test(`Upload the file and verify with conditional wait for image - ${imageFile}`, async ({ page, cartPage }) => {
            const fileImagePath = path.join(snapFolderPath, imageFile);
            await page.goto('/cart')

            //set filpath of image
            //const filePath = await cartPage.uploadComponent().setFilePath(fileImagePath)

            //set the file and click on upload
            await cartPage.uploadComponent().uploadFile(fileImagePath)

            //assert the uploaded file
            await expect(cartPage.uploadComponent().message).toContainText('successfully')
        })

        test(`Upload the file and verify with assertion wait for image - ${imageFile}`, async ({ page, cartPage }) => {

            const fileImagePath = path.join(snapFolderPath, imageFile);
            await page.goto('/cart')

            //set filpath of image
            //const filePath = await cartPage.uploadComponent().setFilePath(fileImagePath)

            //set the file and click on upload
            await cartPage.uploadComponent().uploadFile(fileImagePath)
            //assert the uploaded file
            await expect(page.locator('#wfu_messageblock_header_1_1')).toContainText('successfully', { timeout: 10000 })
        })
    })
}