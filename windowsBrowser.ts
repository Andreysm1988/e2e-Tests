import { Selector, t } from 'testcafe';

export default class WindowBrowser{
    async windowsSizeBrowser() {
            await t
                .resizeWindow(1920, 1080)

    }
}
