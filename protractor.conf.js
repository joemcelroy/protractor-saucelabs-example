exports.config = {

  sauceUser: "xxx",
  sauceKey: "xxx",
  framework: "jasmine",

  capabilities: {
    build: "1",
    platformName: 'iOS',
    platformVersion: '7.1',
    browserName: '',
    app: 'safari',
    deviceName: 'iPhone Simulator',
    'appium-version':"1.1",
    tunnelIdentifier:"xxx"
  },

  specs: [
    'spec.js'
  ]

}