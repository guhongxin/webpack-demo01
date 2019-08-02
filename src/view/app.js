<<<<<<< HEAD
import React, { Component } from 'react'
import { Button } from 'antd'
=======
import React, { Component } from 'react';
>>>>>>> ea2b48b853e789dcbdd05620d40fd4ccd3131e07
class  App extends Component {
  constructor() {
    super()
    this.handClick = this.handClick.bind(this)
  }
  handClick () {
<<<<<<< HEAD
    console.log('你好吗')
  }
  render() {
    return (
      <div onClick={this.handClick} className="test">
        hello word<Button type="primary">Button</Button>
=======
    console.log('你好吗'
  }
  render() {
    return (
      <div onClick={this.handClick}>
        hello word
>>>>>>> ea2b48b853e789dcbdd05620d40fd4ccd3131e07
      </div>
    )
  }
}
export default App