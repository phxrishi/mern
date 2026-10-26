import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const rule=yup.object().shape({
  name:yup.string().required().min(2),
  email:yup.string().required().email(),
  password:yup.string().required().min(6)
})

const App = () => {
  const{register, handleSubmit, reset, formState:{errors}}=useForm({
    resolver:yupResolver(rule)
  })
  const SaveData=(data)=>{
    console.log(data);
    reset();
  }
  return (
    <>
    <div className="row">
      <div className="col-sm-4 mx-auto p-5 shadow rounded">
        <h3 className='text-center mb-4'><span className='text-danger'>#Registration</span>Form</h3>
        <form action="" onSubmit={handleSubmit(SaveData)}>
          <input {...register('name')} type="text" placeholder='*Name' className='form-control mb-2' />
          {errors.name && <p className='text-danger'>{errors.name.message}</p>}

          <input {...register('email')} type="text" placeholder='*Email' className='form-control mb-2' />
          {errors.email && <p className='text-danger'>{errors.email.message}</p>}


          <input {...register('password')} type="text" placeholder='*Password' className='form-control mb-2' />
          {errors.password && <p className='text-danger'>{errors.password.message}</p>}


          <button className='btn btn-primary  mt-3'>Submit</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default App