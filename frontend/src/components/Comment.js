import React from 'react'
import { useParams } from 'react-router-dom'

import { useState, useEffect } from 'react'
import CommentForm from './CommentForm';
import CommentDetails from './CommentDetails';

export default function Comment() {
    let {id} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        async function fetchPost() {
            const res = await fetch(`http://127.0.0.1:3000/posts/${id}`)
            const postData = await res.json()
            setPost(postData)
        }
        fetchPost()
        console.log("Post data",post)
    }, [id])

    return (
        <div className="container">
            <h1>{post.title} </h1>

            {/* {console.log(post.comments[0].image)} */}
            {/* <img src={post[0].image}/> */}
            {post.comments && post.comments.map(comment => <CommentDetails key={comment.id} {...comment} />)}

            <CommentForm />
        </div>
    )
}
