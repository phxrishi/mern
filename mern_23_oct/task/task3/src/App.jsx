import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const rule=yup.object().shape({
 
  email:yup.string().required().email(),
  password:yup.string().required().max(30).min(8),
})

const App = () => {
  const {handleSubmit, reset, register, formState:{errors}}=useForm({resolver:yupResolver(rule)})

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
         
          <input {...register('email')} type="text" placeholder='*Email' className='form-control mb-2' />
          {errors.email && <small className='text-danger '>{errors.email.message}</small>}

          
          <input {...register('password')} type="text" placeholder='*Password' className='form-control mb-2 ' />
          {errors.password && <small className='text-danger '>{errors.password.message}</small>} <br />

          <button className='btn btn-primary w-100 mt-3'>Submit</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default App