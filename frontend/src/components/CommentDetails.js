import React from 'react'
import { useHistory } from "react-router-dom";


export default function CommentDetails({id,readers_comment, image}) {
    let history = useHistory();

    function handleDelete(){
        console.log("I was clicked")
        fetch(`http://localhost:3000/comments/${id}`,{
            method: 'DELETE',
            body: null
        });
        
        // history.push("/posts/:id")
    }

    return (
        <div className="container border-2 my-3">
            <div className="border ">

                <div className="row">
                    <div className="">
                        <p className="">{readers_comment}</p>
                    </div>
                    <div className="">
                        {image && <img src={image} style={{width: "150px", border: "5px"}} alt="images for test"/>} 
                    </div>
                </div>
            <div>
                <button type="button" className="btn btn-danger mt-2" onClick={handleDelete}>Delete</button>
                {/* <button type="button" className="btn btn-warning mx-3" onClick={e => console.log("click me")}>edit</button> */}
            </div>
            </div>
            
        </div>
    )
}
