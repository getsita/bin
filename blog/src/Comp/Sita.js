import axios from 'axios';
import React, { useEffect, useState } from 'react'


function Sita() {
    let [post, setPost]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res.data);
        setPost(res.data)
        });
    },[])
  return (
    <div>
        <ul>
            {post.map((a)=>(
                <li>{a.id}</li>
            ))}
        </ul>
    </div>
  )
}

export default Sita