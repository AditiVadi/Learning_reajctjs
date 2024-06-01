import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState({})
    const [id, SetId] = useState(1)
    const [idFromButton, setIdFromButton] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(e => {
                console.log(e);
            })
    }, [idFromButton])

    const handleClick = () => {
        setIdFromButton(id)
    }

    return (
        <div>
            <input type='text' value={id} onChange={e => SetId(e.target.value)} />
            <button title='button' onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
            {/*<ul>{
                posts.map(post => <li key={post.id}>{post.title}</li>)
            }</ul>*/}
        </div>
    )
}

export default DataFetching
