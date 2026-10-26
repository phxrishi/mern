import React from 'react'
import { useLocation } from 'react-router-dom'

const Services = () => {
  const {pathname} = useLocation()
  return (
    <>
    <h1>{pathname}</h1>
    </>
  )
}

export default Services