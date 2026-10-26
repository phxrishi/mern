import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Services from './component/Services'
import Products from './component/Products'

const App = () => {
  return (
   <>
   <div className="container-fluid">
    <div className="row">
      <div className="col-sm-12 mt-3 mb-3 p-3 bg-light shadow">
        {
           <BrowserRouter >
      <Link to="/" className='mx-4 text-warning'>Home</Link>
       <Link to="/About" className='mx-4 text-warning'>About</Link>
        <Link to="/Contact" className='mx-4 text-warning'>Contact</Link>
         <Link to="/Services" className='mx-4 text-warning'>Services</Link>
          <Link to="/Products" className='mx-4 text-warning'>Products</Link>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
           <Route path='/Services' element={<Services/>}/>
            <Route path='/Products' element={<Products/>}/>
      </Routes>
    </BrowserRouter>
        }
      </div>
    </div>
   </div>
   </>
  )
}

export default App