import React, { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import counter from './counter'

//componnent life cycle{mount, unmount,update}
//useeffect

const App = () => {
  // //Component mount
  // useEffect(()=>{
  //   console.log("component didmount (load hone pr)")
  // },[])

  //Component didupdate
  // const [num, setNum]=useState(0)
  // useEffect(()=>{
  //   console.log("component didmount (update hone pr)")
  // },[num])
  // return (
  //   <>
  //   <h1 className='text-center'>useEffect</h1>
  //   <button className='bg-success p-3 btn btn-success' onClick={()=>setNum((p) => p+1)}>{num}</button>
  //   <counter/>
  //   </>
  // )


  //component unmount
  // useEffect(()=>{
  //   return()=>{
  //     console.log("componnet unmount condition")
  //   }
  // })
}

export default App