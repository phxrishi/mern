import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";


const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <ul class="nav ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Contact
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Products
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
