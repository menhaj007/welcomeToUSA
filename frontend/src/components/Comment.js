import React from 'react'
import { useParams } from 'react-router-dom'

import { useState, useEffect } from 'react'
import CommentForm from './CommentForm';
import CommentDetails from './CommentDetails';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Comment() {
    let {id} = useParams();
    const [post, setPost] = useState({});
    const history = useHistory();

    useEffect(() => {
        async function fetchPost() {
            const res = await fetch(`http://127.0.0.1:3000/posts/${id}`)
            const postData = await res.json()
            setPost(postData)
        }
        fetchPost()
        console.log("Post data",post.comments)

    }, [id])

    return (
        <div className="container">
            <div className="jumbotron jumbotron-fluid">
                <div className="">
                    <h1 className="">{post.title}</h1>
                    {/* <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
                </div>
            </div>
            {post.comments && post.comments.map(comment => <CommentDetails key={comment.id} {...comment} />)}

            <CommentForm />
        </div>
    )
}
