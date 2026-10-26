import React from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Services from './Services'
import Products from './Products'
import Faq from './Faq'
// import './Faq'
// import './Products'
// import './Services'

const App = () => {
  return (
   <>
   <BrowserRouter>
      <Link to="/">Services</Link>
       <Link to="/Products">Products</Link>
        <Link to="/FAQ">FAQ</Link>
         <Link to="/Pricing">Pricing</Link>
          <Link to="/Support">Support</Link>
      <Routes>
        <Route path='/' element={<Services/>}/>
         <Route path='/Products' element={<Products/>}/>
          <Route path='/FAQ' element={<Faq/>}/>
           <Route path='/Pricing' element={<h1>Pricing</h1>}/>
            <Route path='/Support' element={<h1>Support</h1>}/>
      </Routes>
   </BrowserRouter>
   </>
  )
}

export default App