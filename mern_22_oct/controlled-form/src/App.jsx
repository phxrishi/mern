import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

// const App = () => {

//   const [form, setForm]=useState({
//     name:'',
//     email:'',
//     phone:''
//   })
//   const handleForm=(key, value)=>{
//     // setForm((prev) => ({...prev, [key]:value}))
//     setForm((prev)=>{
//       return{ ...prev, [key]:value}
//     })

//   }
//   // const [name, setName]=useState('')
//   // const [email, setEmail]=useState('')
//   // console.log(name,email)

//     <>
//       <div className="row">
//         <div className="col-sm-4 mx-auto mt-5">
//           <h1 className="text-center">
//             <span className="text-warning">#Controlled</span>Form
//           </h1>
//           <input
//             type="text"
//             className="form-control mb-3"
//             onChange={(name) => setName("name", name.target.value)}
//             placeholder="*Enter your name"
//           />
//           <input
//             type="text"
//             className="form-control mb-3"
//             onChange={(email) => setEmail("email", email.target.value)}
//             placeholder="*Enter your email"
//           />

//           <input
//             type="text"
//             className="form-control mb-3"
//             onChange={(phone) => setEmail("phone", phone.target.value)}
//             placeholder="*Enter your phone"
//           />
//           <input type="submit" onClick={handleForm} className="btn btn-danger text-light"/>
//         </div>
//       </div>
//     </>

// };

// export default App;



const App = () => {
  const [name, setName] = useState('')
  const [nameErr, setNameErr] = useState('')
  const [nameErrMsg, setNameErrMsg] = useState('')

  const [email, setEmail]= useState('')
  const [emailErr, setEmailErr]= useState('')
  const [emailErrMsg, setEmailErrMsg]= useState('')

  const handleValidation = ()=>{
    setNameErr(false)
    setEmailErr(false)
    let isAllowed = true
    if(name.trim().length ==0){
      isAllowed = false;
      setNameErr(true)
      setNameErrMsg("Name is required field")
    }

    if(email.trim().length == 0){
      isAllowed = false;
      setEmailErr(true)
      setEmailErrMsg("Email is reaquired field")
    }
    return isAllowed
  }
  const handleSubmit = () => {
    const res = handleValidation()
    if(res) {
      console.log({name, email});
    }
  }
  return (
    <>
      <div className="row">
        <div className="col-sm-4 mx-auto">
          <input type="text" className="form-control mb-3" placeholder="*name" onChange={(e) => setName(e.target.value)} />
          {nameErr && <p className="text-danger">{nameErrMsg}</p>}
          <input type="text" className="form-control mb-3" placeholder="*email"  onChange={(e) => setName(e.target.value)} />
          {emailErr && <p className="text-danger">{emailErrMsg}</p>}
          <input type="submit" onClick={handleSubmit} className="form-control btn btn-warning" />
        </div>
      </div>
    </>
  );
};

export default App;
