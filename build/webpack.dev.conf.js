const path = require('path')
const webpackBaseConf = require('./webpack.base.conf')
const merge = require('webpack-merge')
<<<<<<< HEAD
const config = require('../config')
const devConfig = {
  mode: 'development',
  devtool: config.dev.devtool,
=======

const devConfig = {
  mode: 'development',
>>>>>>> ea2b48b853e789dcbdd05620d40fd4ccd3131e07
  devServer: {
    contentBase: './dist',
    port: 8080,
    hot: true
  },
}

module.exports = merge(webpackBaseConf, devConfig)