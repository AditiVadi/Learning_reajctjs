import React from "react";
//higher order components
const UpdateComponent = (OriginalComponent)=>{
    class NewCompnent extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
          incrementCount=()=>{
            this.setState(prevState =>{
              return {count:prevState.count +1 }
            })  
          }  
       render(){
        return (
        <OriginalComponent 
        count={this.state.count} 
        incrementCount={this.incrementCount}/>
        )}
    }
    return NewCompnent
}
export default UpdateComponent