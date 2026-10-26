import React from 'react'
import { useSearchParams } from 'react-router-dom'

//TASK 12
const Term = () => {
    const [searchParams]=useSearchParams()
    const term = searchParams.get("term");
  return (
    <div>Term : {term}</div>
  )
}

export default Term