import React, { useReducer } from 'react'
//as a objects
const initialState = {
    firsiCounter: 0,
    secoundCounter: 1,
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state,firsiCounter: state.firsiCounter + action.value }

        case 'decrement':
            return { ...state,firsiCounter: state.firsiCounter - action.value }
        case 'increment2':
            return { ...state,secoundCounter: state.secoundCounter + action.value }

        case 'decrement2':
            return { ...state,secoundCounter: state.secoundCounter - action.value }

        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterTow() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>count-{count.firsiCounter}</div>
            <div>secound Counter-{count.secoundCounter}</div>

            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
            <div>
            <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement2</button>
            <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment2</button>
            </div>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default CounterTow
