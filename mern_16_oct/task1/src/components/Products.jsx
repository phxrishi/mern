import React from 'react'
import { useParams } from 'react-router-dom'


//TASK 3
const Products = () => {
 const {id}= useParams()
  return (
    <div>Product-ID : {id}</div>
  )
}

export default Products