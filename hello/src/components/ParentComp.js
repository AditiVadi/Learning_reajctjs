import React, { Component,PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import MemoComp from './MemoComp'

export class ParentComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'aditi'
      }
    }
componentDidMount(){
    setInterval(()=>{
        this.setState({name:'aditi'})
    },2000)
}    
    
  render() {
    console.log("parentcomp");
    return (
      <div>
        ParentComp
        <MemoComp name={this.state.name}/>
        {/* <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp> */}
      </div>
    )
  }
}

export default ParentComp
