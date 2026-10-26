// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
// import { useState } from 'react'

// const App = () => {
//   const [form, setForm]=useState({name:'', email:'', phone:''})
//   const hadleform=(key, value)=>{
//     setForm ((prev)=>{
//       return {...prev, [key]:value}
//     })
//   }

//   const handlesubmit =()=>{
//     console.log(form);
//   }

//   const handleClear = () => {
//   setForm({
//     name: "",
//     email: "",
//     phone: "",
//   });
// };
//   return (
//     <>
//     <div className="row text-center mt-5">
//       <div className="col-sm-5 mx-auto">
//         <h1 className='text-danger'>#Form</h1>
//             <input type="text" placeholder='*name'  className='form-control mb-3' onChange={(name)=>hadleform("name", name.target.value)}/>
//             <input type="text" placeholder='*email'  className='form-control mb-3' onChange={(email)=>hadleform("email", email.target.value)}/>
//             <input type="text" placeholder='*phone'  className='form-control mb-3' onChange={(phone)=>hadleform("phone", phone.target.value)}/>
//             <div className="row">
//               <div className="col-sm-1 ">
//                 <input type="submit"  className='btn btn-warning text-light' onClick={handlesubmit}/>
//               </div>
//               <div className="col-sm-2 ms-2"></div>
//                 <input type="submit"  className='btn btn-danger text-light w-25' value="clear" onClick={handleClear}/>

//             </div>

//       </div>
//     </div>
//     </>
//   )
// }

// export default App

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

const App = () => {
  const [form, setForm] = useState({ name: "", email: "", cousre:"" });
  const handleform = (key, value) => {
    setForm((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const handlesubmit = () => {
    console.log(form);
  };

  const handleClear = () => {
  setForm({
    name: "",
    email: "",
    course: "",
  });
};
  return (
    <>
      <div className="row text-center mt-4">
        <h2>
          <span className="text-secondary">#Login</span>Form
        </h2>
        <div className="col-sm-5 mx-auto text-center mt-4 p-4 shadow">
          <input
            type="text"
            placeholder="*Enter your name"
            className="form-control mb-3"
            onChange={(e) => handleform("name", e.target.value)}
             value={form.name}
          />
          <input
            type="text"
            placeholder="*Enter your email"
            className="form-control mb-3"
            onChange={(e) => handleform("email", e.target.value)}
             value={form.email}
          />

            <input
            type="text"
            placeholder="*Enter your course"
            className="form-control mb-3"
            onChange={(e) => handleform("course", e.target.value)}
             value={form.cousre}
          />
         
          <input
            type="submit"
            className="form-control btn btn-secondary text-light w-25"
            onClick={handlesubmit}
          />

          <input
            type="submit"
            className="form-control btn btn-secondary text-light w-25"
            onClick={handleClear}
          />
          
        </div>
      </div>
    </>
  );
};

export default App;
