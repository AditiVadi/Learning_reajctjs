import React, { useState, useCallback } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function ParentComp() {
    const [age, setAge] = useState(21)
    const [salary, setSalary] = useState(10000000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 10000)
    }, [salary])
    return (
        <div>
            <Title />
            <Count text='Age' count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text='Salary' count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComp
