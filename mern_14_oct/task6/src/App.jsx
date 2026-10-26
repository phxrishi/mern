import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
 
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="/Dashboard">Dashboard</Link>
    <Link to="/Setting">Setting</Link>
   
   
      <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
         <Route path='/Dashboard' element={<h1>Dashboard</h1>}/>
          <Route path='/Setting' element={<h1>Setting</h1>}/>
           <Route path='*' element={<h1>404 Not found</h1>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App