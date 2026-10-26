import React from 'react'
import { useParams } from 'react-router-dom'

//TASK 6
const Category = () => {
    const {CategoryName , ItemID}=useParams()
  return (
    <>
    <div>CategoryName : {CategoryName }</div>
    <div>ItemID : {ItemID}</div>
    </>
  )
}

export default Category