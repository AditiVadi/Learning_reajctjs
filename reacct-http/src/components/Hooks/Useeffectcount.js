import React,{useState,useEffect} from 'react'

function Useeffectcount() {
    const [count,setcount]=useState(0)
    const [name,setName]=useState('')

    useEffect(()=>{
        console.log('Update');
       document.title=`You clicked ${count} times` 
    },[count])//condistion jethi pachhu render na thai(array of value that the effect depends on)
  return (
    <div>
    <input type='text' value={name} onChange={e=>setName(e.target.value)}></input>
      <button onClick={()=>setcount(count +1)}>Click {count} times</button>
    </div>
  )
}

export default Useeffectcount
