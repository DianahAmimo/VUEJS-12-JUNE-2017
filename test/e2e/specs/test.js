module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    const devServer = browser.globals.devServerURL

    browser
      .url('http://localhost:8080/login')
      .waitForElementVisible('#login', 50002222)
      .assert.elementPresent('.trial')
      .assert.containsText('h3', 'Login to proceed')
      .assert.elementCount('img', 1)
      .end()
  }
}
