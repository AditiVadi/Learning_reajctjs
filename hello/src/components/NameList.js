import React from 'react'

function NameList() {
    const names=['aditi','deep','keshvi','aditi'];
    const nameList=names.map((n,idx)=><h2 key={idx}>{idx}{n}</h2>)//idx as a key but best is id as a key
  return (
    <div>
    {/* {
        names.map(n=><h2>{n}</h2>)
      }*/}
      {nameList}
    </div>
  )
}

export default NameList
