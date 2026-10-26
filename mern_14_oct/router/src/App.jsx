import React from 'react'
import { BrowserRouter, Route, Routes,} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import About from './about'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Contact from './component/Contact'
import Services from './component/Services'
import Login from './component/Login'
import Logout from './component/Logout'

const App = () => {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/:id' element={<Logout/>}/>
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App