import React,{useState} from 'react'
import { ParentOne } from './ParentOne'
import { ChildOne } from './ChildOne'

export const GrandParent=()=> {
    const [newCount,setCount]=useState(0)
  return (
    <div>
      <button onClick={()=>setCount(c=>c+1)}>
      GrandParent Count - {newCount}</button>
      <ParentOne newCount={newCount}>
      <ChildOne/>
      </ParentOne>
    </div>
  )
}
