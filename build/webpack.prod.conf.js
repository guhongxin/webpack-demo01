const path = require('path')
const webpackBaseConf = require('./webpack.base.conf')
const merge = require('webpack-merge')
const config = require('../config')
const proConfig = {
  mode: 'production',
  
}
module.exports = merge(webpackBaseConf, proConfig)