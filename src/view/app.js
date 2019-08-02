import React, { Component } from 'react'
import { Button } from 'antd'
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