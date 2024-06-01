import React ,{useState}from 'react'

function HookCounterTwo() {
    const icount=0;
    const [count,setCount]=useState(icount)

    const incrementFive=()=>{
        for(let i=0;i<5;i++){
            setCount(prevCount=>prevCount+1)
        }
    }
  return (
    <div>
      Count:{count}
      <button onClick={()=>setCount(icount)}>Reset</button>
      <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
     {/* <button onClick={()=>setCount(count-1)}>Decrement</button> can ouccer error*/}
      <button onClick={incrementFive}>Increment 5</button>

    </div>
  )
}

export default HookCounterTwo
