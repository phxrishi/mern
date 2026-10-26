import React from 'react'
import { useParams } from 'react-router-dom'
const Logout = () => {
  const {id} = useParams() //instance
  return (
    <>
    <h1>Dynamic {id}</h1>
    </>
  )
}

export default Logout