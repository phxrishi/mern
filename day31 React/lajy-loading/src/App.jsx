import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import React2 from './components/React2'
// import React3 from './components/React3'
// import React4 from './components/React4'
// import React1 from './components/React1'
const React1 = lazy(()=>import('./components/React1'))
const React2 = lazy(()=>import('./components/React2'))
const React3 = lazy(()=>import('./components/React3'))
const React4 = lazy(()=>import('./components/React4'))
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<h1>Loading............</h1>
    }>
      <Routes>
      <Route path='/' element={<React1/>}/>
      <Route path='/react2' element={<React2/>}/>
      <Route path='/react3' element={<React3/>}/>
      <Route path='/react4' element={<React4/>}/>
    </Routes>
    </Suspense>
    </BrowserRouter>
    </>
  )
}

export default App