var Visualizer = require('webpack-visualizer-plugin')
module.exports = function editWebpackConfig (webpackConfig) {
  // webpackConfig is the parsed JS webpack config from react-scrips.
  // modify it here synchronously, & return it.
  console.log(webpackConfig)
  webpackConfig.plugins.push(new Visualizer({
    filename: './statistics.html'
  }))
  return webpackConfig
}
