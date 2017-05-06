// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'e2e task list test': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 1000)

    // check add task
    browser
      .setValue('#app .addtask input[type=text]', 'test')
      .click('#app .addtask button')
      .waitForElementVisible('#app .tasklist .task', 1000)
      .assert.containsText('#app .tasklist .task span', 'test')

    // check toggle task
    browser
      .click('#app .tasklist .task')
      .assert.attributeEquals('#app .tasklist .task input[type=checkbox]', 'checked', 'true')

    // check clear done
    browser
      .click('#app #clear-done small')
      .expect.element('#app .tasklist .task').to.not.be.present

    browser
      .end()
  }
}
