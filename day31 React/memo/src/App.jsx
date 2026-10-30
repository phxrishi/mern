import React, { useMemo, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)
  const result = useMemo(()=>{
    console.log("function is running");
    return num*num
    
  },[num])
  return (
    <center><div className='m-5 p-5'>
     <h1 className='text-center text-warning'>{result}</h1>
      <input type="number" onChange={(e)=>setNum(e.target.value)} className='form-control mb-2 w-25' />
      <button onClick={()=>setCount((prev)=>prev+1)} className='btn btn-success'>{count}</button>
    </div></center>
  )
}

export default App