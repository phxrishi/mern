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
  const [form, setForm] = useState({ name: "", email: "" });
  const handleform = (key, value) => {
    setForm((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const handlesubmit = () => {
    console.log(form);
  };

  const handleClear = () => {
    console.log();
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
          />
          <input
            type="text"
            placeholder="*Enter your email"
            className="form-control mb-3"
            onChange={(e) => handleform("email", e.target.value)}
          />
          <div className="mb-3 text-start">
            <label className="form-label d-block">Gender:</label>

            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="gender"
                value="Male"
                className="form-check-input"
                checked={form.gender === "Male"}
                onChange={(e) => handleform("gender", e.target.value)}
              />
              <label className="form-check-label">Male</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="gender"
                value="Female"
                className="form-check-input"
                checked={form.gender === "Female"}
                onChange={(e) => handleform("gender", e.target.value)}
              />
              <label className="form-check-label">Female</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="gender"
                value="Other"
                className="form-check-input"
                checked={form.gender === "Other"}
                onChange={(e) => handleform("gender", e.target.value)}
              />
              <label className="form-check-label">Other</label>
            </div>
          </div>
          <input
            type="submit"
            className="form-control btn btn-secondary text-light w-25"
            onClick={handlesubmit}
          />
          <input
            type="submit"
            className="btn btn-danger text-light w-25"
            value="clear"
            onClick={handleClear}
          />
        </div>
      </div>
    </>
  );
};

export default App;
