const path = require('path')

export default () => {
  this.addPlugin(path.resolve(__dirname), 'plugin.js')
}
