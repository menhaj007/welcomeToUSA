import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import NewPost from './NewPost'

export default function PostContainer() {
    const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     async function fetchMyAPI() {
    //       let response = await fetch('api/data')
    //       response = await response.json()
    //       dataSet(response)
    //     }
    
    //     fetchMyAPI()
    //   }, [])

    useEffect(() => {
        async function fetchPost() {
            const res = await fetch("http://127.0.0.1:3000/posts")
            const postData = await res.json()
            setPosts(postData)
        }
        fetchPost()
    }, [])


    return (
        <div className="container fluid">
            <NewPost />
            <div className="container my-3">
            <h1>Posts</h1>
            {posts.map(post => <div key={post.id}>
                        <div><Link to={`/posts/${post.id}`}> {post.title}</Link></div>
                        <img src={post.image} style={{width: "300px"}} alt="test"/>
                    </div>)
            }

            </div>
            

        </div>
    )
}
