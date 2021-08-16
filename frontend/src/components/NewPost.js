import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function NewPost() {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState({});

    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault()
        const data = new FormData()
        data.append("title", title)
        data.append("image", image)
        data.append("user_id", 1)
        data.append("public_id", 1)
        data.append("image_url", "cloudinary")
        
        fetch(`http://localhost:3000/posts`, {
            method: "POST",
            body: data
        })
        setTitle("")
        setImage({})
        history.push("/")

        
        
        // {      
        //     method: 'POST',
        //     headers: {
        //       'Content-Length': file.length
        //       'Authorization: Bearer <authorization token>',
        //       'Content-Type': 'multipart/form-data'
        //     }

        // const post = {
        //     title: title,
        //     user_id: 1
        // }
        // // debugger
        // const res = await fetch(`http://localhost:3000/posts`,{
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({post})
        // });

        // const postData = await res.json();
        // if(res.ok){
        //     // setTitle(postData)
        //     console.log(postData)
        //     history.push('/')
        //     setTitle("")
        // } 
        // // else {
        // //     // setErrors(post.message)
        // // }

    };

    return (
        <div className="container">
            <div className="d-bg-flex justify-content-between align-item-center">
                <form className="mt-5 mx-3" onSubmit={handleSubmit}>
                <h4>Please feel free to ask or share anything</h4>
                        <div className="form-group">
                            <label htmlFor="title"><span className="h4"></span></label>
                                <input type="text" className="form-control" id="newPost" placeholder="Share your thoughts" value={title} name="title" 
                            onChange={e => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image"><span className="h4"></span></label>
                                <input type="file" className="form-control" id="image" placeholder="Upload an image or file" name="image" 
                            onChange={e => setImage(e.target.files[0])}
                            />
                        </div>

                        <div className="form-group">
                            <input type="submit" className="btn btn-dark btn-md mt-3" id="submit" name="submit"
                            />
                        </div>
                
                </form>
            </div>
            
        </div>
    )
}