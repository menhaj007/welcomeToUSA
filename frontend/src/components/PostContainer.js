import React, {useState, useEffect} from 'react';
import {Card, Body, Row, Button, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NewPost from './NewPost'
import { useHistory } from 'react-router-dom';
import { Redirect } from "react-router-dom";

export default function PostContainer() {
    const [posts, setPosts] = useState([])
    // const [newAddress, setNewAddress] = useState(null)
    const history = useHistory();

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
            // console.log(postData)
        }
        fetchPost()
    }, [])

    function handleDelete(e){
        let id = parseInt(e.target.id)
        console.log(e.target.id)
        fetch(`http://localhost:3000/posts/${id}`,{
            method: 'DELETE',
            body: null
        });
        return history.push("/")
    }
    
    
    return (
        <div className="container " >
        <Row className="my-2">
            <div className="jumbotron jumbotron-fluid">
                    {/* <span className="display-5">Posts</span> */}
                    <div className="btn btn-dark "><span className="display-6">Posts</span></div>
                    <div className="btn btn-outline-dark mx-4 "><span className="display-6">Informational</span></div>
                    <div className="btn btn-outline-primary mx-1">Question</div>
                    <div className="btn btn-outline-primary mx-1">Tips</div>
                    
                    {/* <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
               
            </div>
        </Row>
    
        <Row className="" >
                <Col className="" >
                
                    { posts.map(post => <div className="mx-1" key={post.id} >
                            <Card style={{ width: '20rem', height: '30rem', backgroundColor: "#f7fbfc"}} className="card-container mb-2">
                                <Card.Title><Link to={`/posts/${post.id}`} className="d-flex mt-2 mx-2 align-self-center link"> {post.title}</Link></Card.Title>
                                <Card.Body className="align-self-center mt-2 card-container">
                                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                    {post.image? <Card.Img src={post.image} style={{width: "200px"}} alt="test"/>: ""}
                            
                                </Card.Body>
                                <Link to={`/posts/${post.id}`} className="btn mt-3 cLink"> Click here leave a comment</Link> 

                            </Card>
                            <div className="align-self-center my-2 mb-2 ">
                                <Button type="button" id={post.id} className="btn btn-danger  mx-1" onClick={handleDelete}>Delete</Button>
                                <Button type="button" className="btn btn-warning mx-1" onClick={e => console.log("click me")}>Edit</Button>
                            </div>

                    </div>)
                    }
                </Col>
            <Col className="">
                <NewPost />
            </Col>
            </Row>
        </div>
    )
}
