import path from 'path'

export default function (moduleOptions = {}) {
  if (!moduleOptions.path) {
    throw new Error('Please, specify "path" option.')
  }

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options: { path: moduleOptions.path }
  })
}
