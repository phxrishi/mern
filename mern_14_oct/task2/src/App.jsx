import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
 
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Link to="/" className='bg-light mx-5 '>Home</Link>
    <Link to="/About" className='bg-light mx-5 '>About</Link>
    <Link to="/Portfolio" className='bg-light mx-5 ' >Portfolio</Link>
    <Link to="/Blog" className='bg-light mx-5 ' >Blog</Link>
    <Link to="/Contact" className='bg-light mx-5 '>Contact</Link>
      <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='/About' element={<h1>About</h1>}/>
        <Route path='/Portfolio' element={<h1>Portfolio</h1>}/>
        <Route path='/Blog' element={<h1>Blog</h1>}/>
        <Route path='/Contact' element={<h1>Contact</h1>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App