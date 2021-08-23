import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function UpdatePost() {
    const [title, setTitle] = useState("")
    let {id} = useParams();
    let history = useHistory();

    // useEffect(() => {
    //     async function updatePost() {

    //         const requestOptions = {
    //             method: 'PUT',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ title })
    //         };
    //         const response = await fetch('http://localhost:3000/posts/'+id, requestOptions);
    //         const data = await response.json();
    //         setTitle(data);
    //     }
    
    //     updatePost();
    // }, []);

    const handleEdit = (e) => {
        setTitle(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify(
                {title}),
            headers: {
                "Content-type": "application/json" }
            })
            .then(response => response.json())
            .then(json => console.log(json))
            history.push("/posts")

    
    }

    return (
        <div className="container">
            <div className="d-bg-flex justify-content-between align-item-center">
                <form className="mt-5 mx-3" onSubmit={handleSubmit}>
                <h4>Please feel free to ask or share anything</h4>
                        <div className="form-group">
                            <label htmlFor="title"><span className="h4"></span></label>
                                <input type="text" className="form-control" id="newPost" placeholder="Share your thoughts" value={title} name="title" 
                            onChange={handleEdit}
                            />
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="image"><span className="h4"></span></label>
                                <input type="file" className="form-control" id="image" placeholder="Upload an image or file" name="image" 
                            onChange={e => setImage(e.target.files[0])}
                            />
                        </div> */}

                        <div className="form-group">
                            <input type="submit" className="btn btn-dark btn-md mt-3" id="submit" name="submit"
                            />
                        </div>
                
                </form>
            </div>
            
        </div>
    )
}
