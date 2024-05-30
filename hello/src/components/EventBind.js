import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props) {//rconst
      super(props)
    
      this.state = {
         message:'Hello'
      }

      //this.clickHandler = this.clickHandler.bind(this)->3
    }
    //clickHandler (){
      //  this.setState({
        //    message:'Goodbye!'
       // })
        //console.log(this)//undifind
    //}
    //->4 method
    clickHandler = ()=>{
        this.setState({
            message:'GoodBye!'
        })
    }


  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/*<button onClick={this.clickHandler.bind(this)}>Click</button>->1
        <button onClick={() => this.clickHandler()}>Click</button>->2*/}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind

