import React from 'react'

// const Child = ({handleClick}) => {
//     console.log("child is running");
//   return (
//   <button onClick={handleClick}>Click Me 2</button>
    
//   )
// }
const Child = React.memo(({handleClick}) => {
    console.log("child is running");
  return (
  <button onClick={handleClick}>Click Me 2</button>
    
  )
})

export default Child