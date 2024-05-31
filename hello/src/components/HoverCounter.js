import React, { Component } from 'react'
import UpdateComponent from './WithCounter'

 class HoverCounter extends Component {
    
  render() {
    const {count,incrementCount} = this.props
    return (
      <div>
        <h1 onMouseOver={incrementCount}>
        {/*props*/}
         Hovered {count} times</h1>
      </div>
    )
  }
}
//HOC
export default UpdateComponent(HoverCounter)
