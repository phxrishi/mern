import React from 'react'

function Menu() {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
      <div className="col-sm-4 text-center">
        <h4 className='text-warning'>
          Blink <b className='text-dark'>it</b> 
        </h4>
      </div>
        <div className="col-sm-8 text.center py-4 ">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Conact</li>
              <li>Login</li>
            </ul>
        </div>
    </div>
    </div>
    </>
  )
}

export default Menu