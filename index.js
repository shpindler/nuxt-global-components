import path from 'path'

export default function (moduleOptions) {
  const options = { ...this.options.globalComponents, ...moduleOptions }
  
  if (!options.path) {
    throw new Error('Please, specify "path" option.')
  }

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options: { path: options.path }
  })
}
