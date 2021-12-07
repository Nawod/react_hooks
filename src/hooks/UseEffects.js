import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'

export default function UseEffects() {
    const [data, setData] = useState('');
    const [id, setId] = useState(0);

    const SetId = () => {
        setId(id + 1)
    }

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((res) => {
            setData(res.data[`${id}`].email) //retrived the first user email
        })
    }, [id]); //to avoid re runing the function for each re rendering. If mentiond an varibale(state) inside the array, useEffect re-run with that state change.

    return (
        <div>
            <h1 style={{marginTop:'35px'}}>useEffect hook</h1>
            <p>useEffect Hook allows you to perform side effects in functional components. Also run with page rendering</p>
            <div>
                <h3>User {id} Email: {data}</h3>
                <button onClick={SetId} >Next user</button>
            </div>
        </div>
    )
}
