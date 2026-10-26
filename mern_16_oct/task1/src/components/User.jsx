import React from 'react'
import { useParams } from 'react-router-dom'

//TASK-4
const User = () => {
    const {name}=useParams()
  return (
    <div>User Name : {name}</div>
  )
}

export default User