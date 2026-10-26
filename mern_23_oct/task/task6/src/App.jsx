import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const rule=yup.object().shape({
 
  cpassword:yup.string().required().min(6).oneOf([yup.ref('npassword')], 'password do not match'),
    npassword:yup.string().required().min(6).notOneOf([yup.ref('password')], 'New password should different from current password'),
  password:yup.string().required().min(6)
})

const App = () => {
  const {handleSubmit, reset, register, formState:{errors}}=useForm({resolver:yupResolver(rule)})

  const matchpassword=()=>{
    if(npassword===cpassword){
      return alert("same password")
    }
  }
  const saveData =(saveData)=>{
    console.log(saveData);
    reset();
  }
  return (
    <>
    <div className="row">
      <div className="col-sm-4 mx-auto p-5 shadow rounded">
        <h4 className='text-center mb-4'><span className='text-danger'>#Login</span>Form</h4>
        <form action="" onSubmit={handleSubmit(saveData)}>
           
        <input {...register('password')} type="text" placeholder='*Password' className='form-control mb-2 ' />
          {errors.password && <small className='text-danger '>{errors.password.message}</small>} 

          <input {...register('npassword')} type="text" placeholder='*New Password' className='form-control mb-2 ' />
          {errors.npassword && <small className='text-danger '>{errors.npassword.message}</small>}

          <input {...register('cpassword')} type="text" placeholder='*Confirm Password' className='form-control mb-2 ' />
          {errors.cpassword && <small className='text-danger '>{errors.cpassword.message}</small>} <br />

          <button className='btn btn-primary w-100 '>Submit</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default App