import { Page, Locator } from "playwright"
import path from 'path'
import { fileURLToPath } from 'url';

class UploadComp {
    private page: Page
    uploadInput: string
    uploadBtn: Locator
    message: Locator

    constructor(page: Page) {
        this.page = page
        this.uploadInput = 'input#upfile_1'
        this.uploadBtn = page.locator('#upload_1')
        this.message = page.locator('#wfu_messageblock_header_1_1')
    }

    async uploadFile(filePath: any) {
        await this.page.setInputFiles('input#upfile_1', filePath)

        await this.uploadBtn.click()

        await this.message.waitFor({ state: 'visible', timeout: 10000 })

    }

    async setFilePath(file: any) {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        //set filpath of image
        const filePath = path.join(__dirname, file)
        return filePath
    }
}

export default UploadComp