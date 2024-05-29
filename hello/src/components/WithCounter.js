import React from "react";

const UpdateComponent = (OriginalComponent)=>{
    class NewCompnent extends React.Component{
       render(){
        return <OriginalComponent name="aditi"/>
       } 
    }
    return NewCompnent
}
export default UpdateComponent