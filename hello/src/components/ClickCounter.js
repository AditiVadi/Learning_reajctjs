import React, { Component } from 'react'
import UpdateComponent from './WithCounter'
class ClickCounter extends Component {
      
  render() {
    const {count,incrementCount} = this.props
    return (
      <div>
        <button onClick={incrementCount}>
         Click {count} times</button>
      </div>
    )
  }
}
//HOC
export default UpdateComponent(ClickCounter)

