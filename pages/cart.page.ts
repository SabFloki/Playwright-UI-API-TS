import { Page, Locator } from "playwright"
import UploadComp from "./component/upload.comp"

class CartPage {
    private page: Page

    constructor(page: Page) {
        this.page = page
    }

    uploadComponent() {
        return new UploadComp(this.page)
    }
}

export default CartPage