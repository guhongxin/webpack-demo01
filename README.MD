## webpack
&emsp;&emsp;本文在yarn利用webpack4 构建react项目
### 1、初始化项目
在命令行终端里，跳转到准备引入Yarn的目录（通常是一个项目的根目录），执行以下命令：
> yarn init
这将打开一个用于创建Yarn项目的交互式表单，其中包含以下问题：
你既可以回答这些问题，也可以直接敲回车键（enter/return）使用默认配置或者留空
### 2、安装webpack
采用局部安装webpack在命令行中输入,使用 webpack 4+ 版本，你还需要安装 CLI
>yarn add webpack webpack-cli --dev

### webpack 相关插件使用方法
#### clean-webpack-plugin 清空的文件目录
需要注意的是：应该把CleanWebpackPlugin放在plugin配置项的最后一个，因为 webpack 配置是倒序的（最后配置的最先执行）。以保证每次正式打包前，先清空原来遗留的打包文件
webpack报错CleanWebpackPlugin is not a constructor，官方文档改变了，之前的写法都会报错
```ruby
抛错原写法
const CleanWebpackPlugin = require("clean-webpack-plugin");
plugins: [
  new CleanWebpackPlugin(['dist'])
]
另一种错误写法
const CleanWebpackPlugin = require("clean-webpack-plugin");
plugins: [
  new CleanWebpackPlugin(['dist'], {
    root: path.resolve(__dirname, '../'),   //根目录
  })
]
=============================分割线==============================
正确写法
 
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
plugins: [
  new CleanWebpackPlugin({ // 参数是一个对象
    cleanOnceBeforeBuildPatterns: [path.join(__dirname, '..', 'dist')]
  })
]
```

