import React from 'react'

export default function Post({title, image}) {
    return (
        <div>
            <h1>{title}</h1>
            <img src={image} alt="images for test"/>
        </div>
    )
}
