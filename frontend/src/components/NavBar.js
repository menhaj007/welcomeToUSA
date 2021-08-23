import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
  



    return (
      <nav className="navbar navbar-expand-sm mb-3 navbar-dark bg-dark navColor">
      <div className="container-fluid" >
        <a className="navbar-brand text-warning"  href="/" >WelcomeToUSA</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link" active aria-current="page" href="/">Home</a> */}
              {/* <a className="nav-link active" active aria-current="page" href="/">Home</a> */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/posts"><span>Posts</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/social-services"><span >Social-Services</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/healthcare"><span >Healthcare</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/esol"><span >English-Courses</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/transportation-guide"><span >Transportation</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/dari"><span >دری/فارسی</span></a>
            </li>
          
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    )
}
