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
### webpack 配置
#### devtool 此选项控制是否生成，以及如何生成 source map
使用方法见官网：https://www.webpackjs.com/configuration/devtool/
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
#### html-webpack-plugin 根据指定的index.html模板生成对应的 html 文件
需要注意的是：配合html-loader处理 html 文件中的<img>标签和属性，此时和html-webpack-plugin产生冲突，
利用webpack的html-webpack-plugin插件来打包传统的多页面项目，html-loader处理html里的img:src的资源问题
#### 模块热替换 webpack-dev-server 
安装
> yarn add webpack-dev-server
### react
#### 安装react
```ruby
  yarn add react react-dom
```
### babel
bebel是用来解析es6语法或者是es7语法分解析器，让开发者能够使用新的es语法，同时支持jsx，vue等多种框架
#### 安装babel
```ruby
  yarn add babel-loader babel-cli --dev
  注意：babel-cli 是核心库, babel-loader起到链接webpack
```
#### babel配置文件：.babelrc
在根目录下新建.babelrc
配置
```ruby
  {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ],
    "plugins": []
  }
```
babel支持自定义的预设(presets)或插件(plugins),只有配置了这两个才能让babel生效，单独的安装babel是无意义的
presets：代表babel支持那种语法(就是你用那种语法写)，优先级是从下往上,state-0|1|2|..代表有很多没有列入标准的语法回已state-x表示,参考这里
plugins:代表babel解析的时候使用哪些插件，作用和presets类似，优先级是从上往下

依次安装
* @babel/preset-env 将ES6转义成ES5
* @babel/preset-react 将JSX转义成js

### 引入antd
1、安装antd
```ruby
  $ yarn add antd
```
修改 `src/main.js`，引入 antd 的按钮组件

```javascript {.line-numbers}
import 'antd/dist/antd.css' // 引入antd样式

ReactDom.render(
  <App />,
  document.getElementById('app')
)

```
修改 src/app.js，引入 antd 的按钮组件

```javascript {}
import React, { Component } from 'react'
import Button from 'antd/es/button'
class  App extends Component {
  constructor() {
    super()
    this.handClick = this.handClick.bind(this)
  }
  handClick () {
    console.log('你好吗')
  }
  render() {
    return (
      <div onClick={this.handClick} className="test">
        hello word<Button type="primary">Button</Button>
      </div>
    )
  }
}
export default App
```

#### 高级配置
已经把组件成功运行起来了，但是在实际开发过程中还有很多问题，例如上面的例子实际上加载了全部的 antd 组件的样式（gzipped 后一共大约 60kb)

使用 babel-plugin-import
babel-plugin-import 是一个用于按需加载组件代码和样式的 babel 插件（原理）
```ruby
  $ yarn add babel-plugin-import --dev
```
##### 按需加载
在.babelrc中添加plugins (这里也可以在babel-loader的options中添加)
```javascript {}
"plugins": [
  [ "import", { 
    "libraryName": "antd", 
    "libraryDirectory": "es",
    "style": "css" 
    }
  ]
]
```
##### 修改主题色
```javascript {}
"plugins": [
  [ "import", { 
    "libraryName": "antd", 
    "libraryDirectory": "es",
    "style": "css" 
    }
  ]
]
```