import React from 'react'

function Mapmethod() {
    const names = ['bruce','clark','dayn']
    const nameList = names.map((name,index) =><h2 key = {index}>{index} {name}</h2>)
    return <div>{nameList}</div>
  // return (
  //   <div>
  //       <h2></h2>
  //       {
  //          names.map(name => <h2>{name}</h2>)
  //       }
      
  //   </div>
  // ) 
}

export default Mapmethod
