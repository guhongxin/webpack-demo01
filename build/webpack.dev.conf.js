const path = require('path')
const webpackBaseConf = require('./webpack.base.conf')
const merge = require('webpack-merge')
const config = require('../config')
const devConfig = {
  // mode: 'development',
  mode: 'production',
  devtool: config.dev.devtool,
  devServer: {
    contentBase: './dist',
    port: 8080,
    hot: true
  },
}

module.exports = merge(webpackBaseConf, devConfig)