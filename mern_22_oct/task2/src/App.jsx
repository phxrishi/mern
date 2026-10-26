import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

const App = () => {
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [phone, setPhone]=useState("")
  console.log(name,email,phone)
  return (
    <>
      <div className="row text-center mt-4">
        <h2>
            <span className="text-secondary">#Login</span>Form
          </h2>
        <div className="col-sm-5 mx-auto text-center mt-4 p-4 shadow">
          
          <input type="text" placeholder="*Enter your name" className="form-control mb-3" onChange={(name)=>setName(name.target.value)}/>
          <input type="text" placeholder="*Enter your email" className="form-control mb-3" onChange={(email)=>setEmail(email.target.value)}/>
          <input type="text" placeholder="*Enter your phone" className="form-control mb-3" onChange={(phone)=>setPhone(phone.target.value)}/>

         <input type="submit"  className="form-control btn btn-secondary text-light w-25" />
        </div>
      </div>
    </>
  );
};

export default App;
