import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

const App = () => {
  const [form, setForm]=useState({name:'', email: '', phone: ''})
  const handleform = (key, value)=>{
    setForm((prev)=>{
    return{ ...prev, [key]:value}}
    )
  }

  const handlesubmit = () => {
    console.log(form);
  }
  return (
    <>
      <div className="row text-center mt-4">
        <h2>
            <span className="text-secondary">#Login</span>Form
          </h2>
        <div className="col-sm-5 mx-auto text-center mt-4 p-4 shadow">
          
          <input type="text" placeholder="*Enter your name" className="form-control mb-3" onChange={(e)=>handleform("name", e.target.value)} />
          <input type="text" placeholder="*Enter your email" className="form-control mb-3" onChange={(e)=>handleform("email", e.target.value)} />
          <input type="text" placeholder="*Enter your phone" className="form-control mb-3" onChange={(e)=>handleform("phone", e.target.value)} />

         <input type="submit"  className="form-control btn btn-secondary text-light w-25" onClick={handlesubmit}/>
        </div>
      </div>
    </>
  );
};

export default App;
