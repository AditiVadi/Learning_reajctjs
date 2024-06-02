import {useState} from 'react'

function useCounter(initialCount=0,value) {
    const [count, setCount] = useState(initialCount)

    const increment = () => {
        setCount(pervCount => pervCount + value)
    }

    const decrement = () => {
        setCount(pervCount => pervCount - value)
    }

    const reset = () => {
        setCount(initialCount)
    }
    return [count,increment,decrement,reset]
}

export default useCounter
