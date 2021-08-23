import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

export default function CommentForm({updateStateStatus}) {
    const [readers_comment, setReadersComment] = useState("")
    const [image, setImage] = useState({});

    const {id} = useParams();

    const history = useHistory();


    function handleSubmit(e){
        // e.preventDefault()
        const data = new FormData()
        data.append("readers_comment", readers_comment)
        data.append("image", image)
        data.append("post_id", id)
        data.append("public_id", 1)
        data.append("image_url", "cloudinary")
        
        fetch(`http://localhost:3000/comments`, {
            method: "POST",
            body: data
        })
        //history to re-render the same page with different name.
        history.push("/posts/"+id)
        // console.log(history)
        updateStateStatus()   
        setReadersComment("")
        setImage("")

    };




    return (
        <div className="container">
            <div className="d-bg-flex justify-content-between align-item-center">
                <form className="mt-5 mx-3" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="readers_comment"><span className="h4"></span></label>
                                <input type="text" className="form-control" id="readers_comment" placeholder="comment" value={readers_comment} name="readers_comment" 
                            onChange={e => setReadersComment(e.target.value)}
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



    // async function handleSubmit(e){
    //     e.preventDefault()
    //     const comment = {
    //         readers_comment: readers_comment,
    //         post_id: id
    //     }
    //     // debugger
    //     const res = await fetch(`http://localhost:3000/comments`,{
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({comment})
    //     });
    //     const userData = await res.json();
    //     if(res.ok){
    //         setReadersComment("")
    //         history.push(`/posts/${id}`)
    //     } else {
    //         // setErrors(userData.message)
    //     }

    // };
    