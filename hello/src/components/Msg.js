import React, { Component}  from 'react'

class Msg extends Component{
    constructor(){
        super()
        this.state={
            msg:'welcome visitor'
        }
    }
    changemsg(){
       this.setState({
        msg:'Thank you for subscribing'
       }) 
    }
render(){
    return(
        <div>
          <h1>{this.state.msg}</h1>
          <button onClick={()=>this.changemsg()}>subscribe</button>
        </div> 
    )
}
}
export default Msg