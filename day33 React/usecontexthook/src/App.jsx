import React, { useContext } from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import Child from './components/Child'
import {UserContext} from './context/UserContext'

const App = () => {
  const {data} = useContext(UserContext)
  return (
    // <>
    // <BrowserRouter>
    // <Routes>
    // <Route path="/" element={<Child/>} />

    // </Routes>
    // </BrowserRouter>
    // </>
    <div className='m-3'>
      <h1>{data.name} {data.branch}</h1>
      <Child/>
      
    </div>
  )
}

export default App