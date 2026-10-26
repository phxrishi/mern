import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
const Navbar = () => {
  return (
    <>
   <div className="container-fluid">
    <div className="row">
        <div className="col-sm-12 mx-auto bg-light p-3 m-3 ">
    <ul  className="nav">
  <li  className="nav-item">
     <Link  className="nav-link" to="/">Home</Link>
  </li>
  <li  className="nav-item">
     <Link  className="nav-link" to="/contact">Contact</Link>
  </li>
  <li  className="nav-item">
     <Link  className="nav-link" to="/about">About</Link>
  </li>

  <li  className="nav-item">
     <Link  className="nav-link" to="/login">Login</Link>
  </li>

  <li  className="nav-item">
     <Link  className="nav-link" to="/logout">Logout</Link>
  </li>

  <li  className="nav-item">
     <Link  className="nav-link" to="/services">Services</Link>
  </li>
  
</ul>
        </div>
    </div>
   </div>
    </>
  )
}

export default Navbar