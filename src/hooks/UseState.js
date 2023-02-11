import React, {useState} from 'react'

function UseState() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(prev => prev +1)
    }
    const decrement = () => {
        setCount(prev => prev -1)
    }
  return (
    <div>
        <h1>Use State</h1>
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default UseState