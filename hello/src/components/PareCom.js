import React, { Component } from 'react'
import ChildCom from './ChildCom'

 class PareCom extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent'
      }
      this.greetParent=this.greetaParent.bind(this)
    }
    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    
  render() {
    return (
      <div>
        <ChildCom greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default PareCom
