import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row bg-light">
          <nav className="navbar sm:navbar-expand bg-5 fg-2">
            <div className="container-fluid">
              <Link className="navbar-brand  text-primary" to="#">Navbar</Link>

              <ul className="nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Services">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Logout">Logout</Link>
                </li>
                 <li className="nav-item">
                  <Link className="nav-link" to="/Term">Term</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Gallary">Gallary</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Products">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/User">User</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Student">Student</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Category">Category</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>


      </div>
    </>
  )
}

export default Navbar