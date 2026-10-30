import React, { useCallback, useState } from 'react'
import Child from './Child'

const App = () => {
  const [count , setCount] = useState(0)
  // const handleClick = ()=>{
  //   setCount((prev)=>prev+1)
  // }
  const handleClick = useCallback(()=>{
    setCount((prev)=> prev +1)
  },[])
  return (
    <>
    <h1>{count}</h1>
    <button onClick={handleClick}>Click Me</button>
    <Child handleClick={handleClick}/>
    
    </>

  )
}

export default App