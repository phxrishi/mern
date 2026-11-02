import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Child = () => {
  const {setData} = useContext(UserContext)
  const handleClick = () => {
    setData({name:"divya", branch:"CSE"})
  }
  return (
    <>
    <h1>Child Components</h1>
    <button className='btn btn-primary' onClick={handleClick}>
      Update Data
    </button>
    </>
  )
}

export default Child