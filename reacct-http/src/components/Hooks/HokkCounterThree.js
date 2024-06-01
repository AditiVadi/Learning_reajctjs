import React,{useState} from 'react'

function HokkCounterThree() {
    const [name,setName]=useState({firstName:'',lastname:''})
  return (
    <div>
      <form>
      <input type='text' 
      value={name.firstName} 
      onChange={e=> setName({...name,firstName:e.target.value})}/>
      <input type='text'
      value={name.lastname} 
      onChange={e=> setName({...name,lastname:e.target.value})}/>
      <h2>Your name:{name.firstName }{ name.lastname}</h2>
      <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  )
}

export default HokkCounterThree
