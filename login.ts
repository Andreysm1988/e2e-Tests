import PageAuth from './modelLogin'

const pageAuth = new PageAuth();
pageAuth.WebPageCAA_TS();

test('Login', async t => {
  await pageAuth.startAuthorization();
});
