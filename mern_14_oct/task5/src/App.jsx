import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
        <Routes>
          <Route path="/" element={<h1>home</h1>}/>
          <Route path="/about" element={<h1>about</h1>}/>
          <Route path="*" element={<h1>404 Page not found</h1>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App