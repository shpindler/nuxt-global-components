const path = require('path')

export default function () {
  this.addPlugin(path.resolve(__dirname), 'plugin.js')
}
