const {Eyes, Target} = require('@applitools/eyes.webdriverio');

const eyes = new Eyes();
eyes.setApiKey('kI5bOq7QyT7tB6Iw1V81p4MwyKgthmq0QVWk1PlzNmI110');

describe('my first visual test', function () {
  it('should look visually perfect', async function () {
    browser.url('./helloworld');

    const pageTitle = browser.getTitle();

    console.log(`Title of page is ${pageTitle}`)

    try {
      const viewportSize = browser.getViewportSize();

      await eyes.open(browser, 'Hello World!', 'My first Javascript test!', viewportSize);

      await eyes.check('Main Page', Target.window());

      browser.click('button');

      await eyes.check('Click!', Target.window());

      await eyes.close();
    } finally {
      await eyes.abortIfNotClosed();
    }

  })
});