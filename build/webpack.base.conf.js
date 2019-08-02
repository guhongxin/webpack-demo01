const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const resolve = function (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  entry: {
    main: resolve('src/main.js')
  },
  output: {
    filename: 'js/[name]_[hash:8].js',
    chunkFilename: 'js/[name].chunk.js',
    path: resolve('dist')
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': resolve('src')
    }
  },
  optimization: {
    splitChunks: {
      chunks: "async", // 必须三选一： "initial" | "all"(推荐) | "async" (默认就是async)
      minSize: 30000, // 最小尺寸，30000
      minChunks: 1, // 最小 chunk ，默认1
      maxAsyncRequests: 5, // 最大异步请求数， 默认5
      maxInitialRequests : 3, // 最大初始化请求书，默认3
      automaticNameDelimiter: '~',// 打包分隔符
      cacheGroups:{}
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
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.less$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader
        },
        'css-loader',
        {
          loader:'less-loader',
          options: {
            sourceMap: true,
            modifyVars: {
              'primary-color': '#1DA57A',
              'link-color': '#1DA57A',
              'border-radius-base': '2px'
            },
            javascriptEnabled: true
          }
        }
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('public/index.html'),
      title: 'webpack-react-demo',
      favicon: resolve('public/favicon.ico')
    }),
    new MiniCssExtractPlugin({
      // 这里的配置和webpackOptions.output中的配置相似
      // 即可以通过在名字前加路径，来决定打包后的文件存在的路径
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    }),
    new CleanWebpackPlugin()
  ]
}