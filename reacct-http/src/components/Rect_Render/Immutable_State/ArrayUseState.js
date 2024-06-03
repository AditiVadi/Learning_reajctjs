import React,{useState} from 'react'

const initState=['aditi','vadi']

 export const ArrayUseState = () => {
    const [persons,setPersons]=useState(initState)

    const handleClick=()=>{
        // persons.push('deep')
        // persons.push('vadi')
        // setPersons(persons)

        const newPersons=[...persons]
        newPersons.push('deep')
        newPersons.push('vadi')
        setPersons(newPersons)
    }

    console.log('ArrayUseState Render');
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {
        persons.map(person=>(
            <div key={person}>{person}</div>
        ))
      }
    </div>
  )
}

