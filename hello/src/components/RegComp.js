import React, { Component } from 'react'
import ParentComp from './ParentComp'

 class RegComp extends Component {
  render() {
    console.log("Regcomp");
    return (
      <div>
        Regular comp {this.props.name}
      </div>
    )
  }
}

export default RegComp
