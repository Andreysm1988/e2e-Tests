import PageAuth from './modelLogin'
import CreateTag from './modelCreateTag'
import WindowBrowser from './windowsBrowser'

const window = new WindowBrowser();
const pageAuth = new PageAuth();
const createNewTag = new CreateTag();

pageAuth.WebPageCAA_TS();

test('CreateTag', async t => {
  await window.windowsSizeBrowser();
  await pageAuth.startAuthorization();
  await createNewTag.startCreateTag();
});



