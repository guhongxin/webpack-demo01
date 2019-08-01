import React, { Component } from 'react';
class  App extends Component {
  constructor() {
    super()
    this.handClick = this.handClick.bind(this)
  }
  handClick () {
    console.log('你好吗'
  }
  render() {
    return (
      <div onClick={this.handClick}>
        hello word
      </div>
    )
  }
}
export default App