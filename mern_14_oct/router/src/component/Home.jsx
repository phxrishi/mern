import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
  const query = useSearchParams()
  const name = query[0].get('name')
  const c = query[0].get('c')
  const gender = query[0].get('gender')
  return (

    <>
    <h1>{name} {c} {gender}</h1>
    </>
  )
}

export default Home