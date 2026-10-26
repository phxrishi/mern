import React from 'react'
import { useSearchParams } from 'react-router-dom'


//TASK 8 & TASK-9 & TASK 10 & TASK 11
const Contact = () => {
  const[searchParams]=useSearchParams()
  
  const name = searchParams.get("name")|| "Not Provided";
  const studentClass = searchParams.get("class")|| "Not Provided";
  const gender = searchParams.get("gender")|| "Not Provided";
  return (
    // <div>Name : {name}</div>
    <>
    <h1>
        Name: {name} | Class: {studentClass} | Gender: {gender}
      </h1>
    </>
  )
}

export default Contact