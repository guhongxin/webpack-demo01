const path = require('path')
const webpackBaseConf = require('./webpack.base.conf')
const merge = require('webpack-merge')
<<<<<<< HEAD
const config = require('../config')
const proConfig = {
  mode: 'production',
  
=======

const proConfig = {
  mode: 'production'
>>>>>>> ea2b48b853e789dcbdd05620d40fd4ccd3131e07
}
module.exports = merge(webpackBaseConf, proConfig)