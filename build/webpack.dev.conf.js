const path = require('path')
const webpackBaseConf = require('./webpack.base.conf')
const merge = require('webpack-merge')

const devConfig = {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    port: 8080,
    hot: true
  },
}

module.exports = merge(webpackBaseConf, devConfig)