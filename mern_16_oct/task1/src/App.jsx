import React from 'react'
import {BrowserRouter, Link, Route, Routes, useParams} from 'react-router-dom'
import Home1 from './components/Home1'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Products from './components/Products'
import Login from './components/Login'
import Logout from './components/Logout'
import Gallary from './components/Gallary' 
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Dynamic_data from './components/Dynamic_data'
import User from './components/User'
import Student from './components/Student'
import Category from './components/Category'
import Term from './components/Term'

const App = () => {
  
  return (
    <>
    {
      <BrowserRouter>
      <Navbar/>
          <Routes>
              <Route path='/' element={<Home1/>}/>
               <Route path='/About' element={<About/>}/>
                <Route path='/Contact' element={<Contact/>}/>
                <Route path='/Services' element={<Services/>}/>
               <Route path='/Products/:id' element={<Products/>}/>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/Gallary' element={<Gallary/>}/>
                <Route path='/Logout' element={<Logout/>}/>
                <Route path='/Term' element={<Term/>}/>
                <Route path='/:id' element={<Dynamic_data/>}/>
                <Route path='User/:name' element={<User/>}/>
                <Route path='/Student/:id' element={<Student/>}/>
                <Route path='/category/:categoryName/item/:itemId' element={<Category/>}/>
               
          </Routes>
      </BrowserRouter>
    }
    
    </>
  )
}

export default App