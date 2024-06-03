import React,{useState} from 'react'

const initState={
    fname:'aditi',
    lname:'vadi',
}

export const ObjectUseState = () => {
    const [person,setPerson]=useState(initState)
    const changeName=()=>{
    //    person.fname='deep'
    //    person.lname='vadi'
    //    setPerson(person)
    const newPerson={...person}
    newPerson.fname='deep'
    newPerson.lname='vadi'
    setPerson(newPerson)
    }
    console.log('objectUseState Render');
  return (
    <div>
      <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}


