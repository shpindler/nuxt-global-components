import path from 'path'

export default function (moduleOptions) {
  const _moduleOptions = moduleOptions || this.options.globalComponents
  
  if (!_moduleOptions || !_moduleOptions.path) {
    throw new Error('Please, specify "path" option.')
  }

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options: { path: _moduleOptions.path }
  })
}
