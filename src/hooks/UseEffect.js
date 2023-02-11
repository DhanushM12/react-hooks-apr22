import React, {useEffect, useState} from 'react'

function UseEffect() {
    const [resource, setResource]= useState('');
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
        .then(res => res.json())
        .then(data => setItems(data))
    }, [resource])
  return (
    <div>
        <h1>Use Effect</h1>
        <div>
            <button onClick={() => setResource('posts')}>Posts</button>
            <button onClick={() => setResource('todos')}>Todos</button>
            <button onClick={() => setResource('users')}>Users</button>
        </div>
        <div>
            {
                items.map(item => {
                    return <pre>{JSON.stringify(item)}</pre>
                })
            }
        </div>
    </div>
    
  )
}

export default UseEffect