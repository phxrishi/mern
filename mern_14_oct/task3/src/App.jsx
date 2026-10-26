import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Link to="/" >Home</Link>
         <Link to="/About">About</Link>
          <Link to="/Services">Services</Link>
           <Link to="/Team">Team</Link>
            <Link to="/Testinomials">Testinomials</Link>

        <Routes>
          <Route path='/' element={<h1>Home</h1>}/>
           <Route path='/About' element={<h1>About</h1>}/>
            <Route path='/Services' element={<h1>Services</h1>}/>
             <Route path='/Team' element={<h1>Team</h1>}/>
              <Route path='/Testimonials' element={<h1>Testimonials</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App