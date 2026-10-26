import React, { useState } from "react";
import Menu from "./components/Menu";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import products from "./data";

function App() {
  // const age=20;
  // if(age>=18){
  //     return(
  //         <>
  //         <h1>You can vote because your age is {age}</h1>
  //         </>
  //     )
  // }else{
  //      return(
  //         <>
  //         <h1>You can't vote because your age is {age}</h1>
  //         </>
  //     )
  // }

  // const name='TANNU';
  // if(name=='TANNU'){
  //     return (
  //         <>
  //         {name}
  //         </>
  //     )
  // }else{
  //     return (
  //         <>
  //         <h4>naam glt hai</h4>
  //         </>
  //     )

  // }

  // const age=18;
  // return(
  //     <>
  //     {age>=18 ? <h5>You can vote</h5> : <h5>You can't vote</h5>}

  //     </>
  // )

  // const error=true;
  // return(
  //     <>
  //     {
  //         error && <h1>This is input error</h1>
  //     }
  //     </>
  // )

  // const err=false;
  // return <h1 className={err == false ? 'text-success' : 'text-danger'}>Conditional CSS</h1>

  // const err=false;
  // return <button className={err==false ? 'btn btn-succes text-light' : 'btn btn-danger text-light'}>Submit</button>



  //LISTING AND KEY
//   const arr = [2, 5, 7, 8, 0, 4];
//   return (
//     <>
//       {arr.map((item, index) => {
//         return (
//           <div key={index} className="bg-dark text-warning p-2 m-2 fs-3">
//             {item}
//           </div>
//         );
//       })}
//     </>
//   );


// return(<>
// <div className="row">
//     <div className="col-sm-9
//      mx-auto">
//         <h3 className="mt-4 mb-4 text-center"><span className="text-danger">#Ekart</span>Product </h3>
//         <table className="table">
//             <thead className="table-dark ">
//                 <tr>
//                     <th>Sr.No</th>
//                     <th>Title</th>
//                     <th>Rating</th>
//                     <th>Category</th>
//                     <th>Price</th>
//                     <th>Thumbnail</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     products.map((item, index)=>{
//                         return(<tr>
//                              <td>
//                                 {item.id}
//                             </td>

//                             <td>
//                                 {item.title}
//                             </td>

//                              <td>
//                                 {item.rating}
//                             </td>

//                              <td>
//                                 {item.category}
//                             </td>

//                              <td>
//                                 {item.price}
//                             </td>

//                              <td>
//                                 <img src={item.thumbnail} height='60' width='60' alt="" />
//                             </td>
//                         </tr>
//                         )
//                     })
//                 }
//             </tbody>
//         </table>
//     </div>
// </div>
// </>)


const [count, setCount] = useState(10)
const Increment=()=>{
    if(count<10){
        setCount((prev)=> prev+1)
    }
}

const Decrement = ()=>{
    if(count>0){
        setCount((prev)=> prev-1)
    }
}

return(
    <div className="p-5">
        <h2>{count}</h2>
        <button onClick={Increment} className=" btn btn-success fs-3 text-light bg-success  px-4">+</button>
        <button onClick={Decrement} className="btn btn-success fs-3 text-light bg-success  px-4 ms-3">-</button>
    </div>
)
}

// const student=[
//     {
//         name:"tannu",
//         branch:"IT",
//         college:"SITM",
//         id:112345
//     }
// ];
// return(
//     <>
//     {

//     }
//     </>
// )



// HOOKS
// PROPS
// STATE
//PROPS
//setter fn





export default App;
