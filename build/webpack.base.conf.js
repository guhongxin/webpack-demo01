const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = function (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  entry: {
    main: resolve('src/main.js')
  },
  output: {
    filename: 'js/[name]_[hash:8].js',
    path: resolve('dist')
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [{
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 300,
        name: '[name].[hash:7].[ext]',
        outputPath: 'image'
      }
    }, {
      test: /\.js?$/,
      include: /src/,          // 只转化src目录下的js
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('public/index.html'),
      title: 'webpack-react-demo',
      favicon: resolve('public/favicon.ico')
    }),
    new CleanWebpackPlugin()
  ]
}