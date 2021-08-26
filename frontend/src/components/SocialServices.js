import React from 'react'
import { Link } from 'react-router-dom'

export default function SocialServices() {
    return (
        <div className="container">
            
            <div className="row border"> 
                <h3 className=" mb-3 mt-3">
                    <a href={"https://www.youtube.com/watch?v=pd5wIVuM8E4"} className="my-3 link">What to expect upon arrival?</a>
                </h3>
                    <div className="video-responsive">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/wbIXmB2ZLmA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
            </div>

            <div className="row mt-4 mb-4 border">
                
                <h3 className=" mb-3">
                    <a href={"https://www.hhs.texas.gov/"} className="my-3 link">Texas Department of Human Services</a>
                    </h3>
                <iframe title={"Texas Department of Human Services"} className="mt-3" src="https://www.hhs.texas.gov/" style={{width: "90%", height:"300px"}}></iframe>
            </div>

            <div className="row mt-4 mb-4 border">
                
                <h3 className=" mb-3">
                    <a href={"https://www.dss.virginia.gov/community/ona/index.cgi"} className="my-3 link">Virginia Department of Social Services</a>
                    </h3>
                <iframe title={"Virginia Department of Social Services"} className="mt-3" src="https://www.dss.virginia.gov/community/ona/index.cgi" style={{width: "90%", height:"300px"}}></iframe>
            </div>

            <div className="row mt-4 mb-4 border">
                
                <h3 className=" mb-3">
                    <a href={"https://dhs.maryland.gov/"} className="my-3 link">Maryland Department of Human Services</a>
                    </h3>
                <iframe title={"Maryland Department of Human Services"} className="mt-3" src="https://dhs.maryland.gov/" style={{width: "90%", height:"300px"}}></iframe>
            </div>
            
            
            

            

            {/* <iframe src="https://www.youtube.com/embed/cWDJoK8zw58"></iframe> */}
        </div>
    )
}
