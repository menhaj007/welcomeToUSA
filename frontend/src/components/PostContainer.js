import React, {useState, useEffect} from 'react';
import {Card, Body, Row, Button, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NewPost from './NewPost'
import { useHistory, useLocation } from 'react-router-dom';
import { Redirect } from "react-router-dom";

export default function PostContainer() {
    const [posts, setPosts] = useState([])
    const [isUpdate, setIsUpdate] = useState(false)
    
    const history = useHistory();
    const location = useLocation()

    useEffect(() => {
        async function fetchPostData() {
            const res = await fetch("http://127.0.0.1:3000/posts")
            const postData = await res.json()
            setPosts(postData)
            setIsUpdate(true)
            // console.log(postData)
        }
        fetchPostData()
        // console.log("Posted Data", posts)

    }, [isUpdate])

    function handleDelete(e){
        let id = parseInt(e.target.id)
        fetch(`http://localhost:3000/posts/${id}`,{
            method: 'DELETE',
            body: null
        });
        history.push("/posts")
        setIsUpdate(!isUpdate)
    }

    const changeState = () => {
        setIsUpdate(!isUpdate)
    }
    
    return (
        <div className="container " >
        <Row className="my-2">
        {/* className="jumbotron jumbotron-fluid" */}
            <div className=" mt-2 mb-3">
                    {/* <span className="display-5">Posts</span> */}
                    <div className="btn btn-outline-dark"><span className="">Posts</span></div>
                    <div className="btn btn-outline-dark mx-1 "><span className="">Informational</span></div>
                    <div className="btn btn-outline-dark mx-1">Question</div>
                    <div className="btn btn-outline-dark mx-1">Tips</div>
                    
                    {/* <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
               
            </div>
        </Row>
    
        <Row className="" >
                <Col className="" >
                
                    { posts.map(post => <div className="mx-1" key={post.id} >
                            <Card style={{ width: '80%', height: '', backgroundColor: "#f7fbfc"}} className="card-container mb-2">
                                <Card.Title><Link to={`/posts/${post.id}`} className="d-flex mt-2 mx-2 align-self-center link"> {post.title}</Link></Card.Title>

                            </Card>
                            <div className="align-self-center my-2 mb-2 ">
                                <Button type="button" id={post.id} className="btn btn-danger  mx-1" style={{color: "lightgray"}} onClick={e => handleDelete(e)}>Delete</Button>
                                <Button type="button" className="btn btn-warning mx-1" >
                                    <Link to={`/update-post/${post.id}`} className="link" style={{color: "maroon"}}> Edit </Link>
                                </Button>
                                {/* <Button type="button" className="btn btn-success mx-1" >
                                    <Link to={`/posts/${post.id}`} className="pLink" >Click here to leave a comment</Link> 
                                </Button> */}
                            </div>

                    </div>)
                    }
                </Col>


            <Col className="">
                <NewPost changeState={changeState}/>
            </Col>
            </Row>
        </div>
    )
}


    // useEffect(() => {
    //     async function fetchMyAPI() {
    //       let response = await fetch('api/data')
    //       response = await response.json()
    //       dataSet(response)
    //     }
    
    //     fetchMyAPI()
    //   }, [])
