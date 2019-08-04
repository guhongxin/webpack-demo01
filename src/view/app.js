import React, { Component } from 'react'
import { Button } from 'antd'
class  App extends Component {
  constructor() {
    super()
    this.handClick = this.handClick.bind(this)
  }
  handClick () {
    console.log('你好吗')
    import( /* webpackPrefetch: true */ '@/utils/test.js').then(function({default: _}) {
      console.log(_())
    })
  }
  render() {
    return (
      <div onClick={this.handClick} className="test">
        <p className="p-sty">hello word<Button type="primary">Button</Button></p>
      </div>
    )
  }
}
export default App