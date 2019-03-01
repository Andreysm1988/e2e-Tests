import PageAuth from './modelLogin'
import CreateTag from './modelCreateTag'
import WindowBrowser from './windowsBrowser'
import ModelDeleteTag from './modelDeleteTag'

const window = new WindowBrowser();
const pageAuth = new PageAuth();
const createNewTag = new CreateTag();
const deleteTag = new ModelDeleteTag();

pageAuth.WebPageCAA_TS();

test('CreateTag', async t => {
  await window.windowsSizeBrowser();
  await pageAuth.startAuthorization();
  await createNewTag.startCreateTag();
  await deleteTag.startDeleteTag();
});



