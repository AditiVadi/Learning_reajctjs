import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {
    const [count, SetCount] = useState(0);

    const tick = () => {
        SetCount(count + 1);
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [count])

    return (
        <h1>
            {count}
        </h1>
    )
}

export default IntervalHookCounter
