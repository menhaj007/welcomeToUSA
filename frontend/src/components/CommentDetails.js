import React from 'react'

export default function CommentDetails({readers_comment, image}) {
    return (
        <div className="container">
            <p>{readers_comment}</p>
            {/* {image && <img src={image} alt="images for test"/>} */}
        </div>
    )
}
