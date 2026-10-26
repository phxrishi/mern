import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const handleClick = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    console.log({ email, name });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-5 mx-auto">
            <h2 className="text-center">Form data read</h2>
            <input
              type="text"
              className="form-control mb-3"
              name=""
              ref={nameRef}
              id=""
            />
            <input
              type="text"
              className="form-control mb-3"
              name=""
              ref={emailRef}
              id=""
            />
            <button
              className="form-control w-100 bg-dark text-light"
              onClick={handleClick}
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;