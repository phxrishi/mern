import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const rule=yup.object().shape({
  name:yup.string().required().min(2),
  
  email:yup.string().required().email(),
  subject:yup.string().required().max(10).min(10),
  message:yup.string().required().min(20)
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
        <h4 className='text-center mb-4'><span className='text-danger'>#Contact</span>Form</h4>
        <form action="" onSubmit={handleSubmit(saveData)}>
          <input {...register('name')} type="text" placeholder='*Name' className='form-control mb-2' />
          {errors.name && <small className='text-danger'>{errors.name.message}</small>}

          
          <input {...register('email')} type="text" placeholder='*Email' className='form-control mb-2' />
          {errors.email && <small className='text-danger'>{errors.email.message}</small>}

          <input {...register('subject')} type="text" placeholder='*subject' className='form-control mb-2' />
          {errors.subject && <small className='text-danger'>{errors.subject.message}</small>}

          <input {...register('message')} type="text" placeholder='*Message' className='form-control mb-2' />
          {errors.message && <small className='text-danger'>{errors.message.message}</small>} <br />

          <button className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default App