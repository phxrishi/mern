import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [name, setName] = useState("");
  const [nameErr, setNameErr]=useState("")
  const [nameErrMsg, setNameErrMsg]=useState("")

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr]=useState("")
  const [emailErrMsg, setEmailErrMsg]=useState("")
  console.log(name, email);

  return (
    <>
      <div className="row text-center mt-4">
        <h2>
          <span className="text-secondary">#Login</span>Form
        </h2>
        <div className="col-sm-5 mx-auto text-center mt-4 p-4 shadow">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="*Enter your name"
            className="form-control mb-3"
          />
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="*Enter your email"
            className="form-control mb-3"
          />
          <input
            type="submit"
            className="form-control btn btn-secondary text-light w-25"
          />
        </div>
      </div>
    </>
  );
};

export default App;
