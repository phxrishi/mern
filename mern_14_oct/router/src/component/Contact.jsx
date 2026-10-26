import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()
  const redirect = () =>{
    navigate('/login')
  }
  return (
   <>
   <h1>Contact</h1>
   <button onClick={redirect} className='btn btn-success  m-4'>Go to Login</button>
   </>
  )
}

export default Contact