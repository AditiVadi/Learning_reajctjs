import React, { Component } from 'react'
class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggegIN: true
    }
  }
    
  render() {
    return this.state.isLoggegIN && <div>hmmm</div>//sortsrict oprater-render some-thing or nothing
    // return(//->3 ternary operator
    //   this.state.isLoggegIN ?
    //   <div>if</div>:
    //   <div>hiiii</div>
    // )
    // let message //->2 element variable
    // if(this.state. isLoggegIN){
    //   message = <div>iffffff</div>
    // }
    // else{
    //   message = <div>elseeeee</div>
    // }
    // return <div>{message}</div>
    // if(this.state.isLoggegIN){->1
    //     return(
    //         <div>hiiii</div>
    //     )
    // }
    // else{
    //     return(
    //         <div>hmmmmmm</div>
    //     )
    // }
    // return (
    //    <div>
    //   <div>
    //    ADITI VADI 
    //   </div>
    //   <div>guest</div>
    //   </div> 
    // )
  }
}

export default UserGreeting
