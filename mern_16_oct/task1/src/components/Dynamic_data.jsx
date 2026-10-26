import React from 'react'
import { useParams } from 'react-router-dom'


//TASK-1 && TASK 2
const Dynamic_data = () => {
    const {id}=useParams()
  return (
    <div>Dynamic_data {id}</div>
  )
}

export default Dynamic_data