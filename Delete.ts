import PageAuth from './modelLogin'
import WindowBrowser from './windowsBrowser'
import ModelDeleteTag from './modelDeleteTag'

const window = new WindowBrowser();
const pageAuth = new PageAuth();
const deleteTag = new ModelDeleteTag();

pageAuth.WebPageCAA_TS();

test('CreateTag', async t => {
  await window.windowsSizeBrowser();
  await pageAuth.startAuthorization();
  await deleteTag.startDeleteTag();
});



