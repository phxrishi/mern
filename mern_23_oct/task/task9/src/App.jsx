import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const rule=yup.object().shape({
  name:yup.string().required().min(2),
  email:yup.string().required().email(),
  terms:yup.string().required(),
  
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
        <h4 className='text-center mb-4'><span className='text-danger'>#Newsletter</span>SubscriptionForm</h4>
        <form action="" onSubmit={handleSubmit(saveData)}>
          <input {...register('name')} type="text" placeholder='*Name' className='form-control mb-2' />
          {errors.name && <small className='text-danger'>{errors.name.message}</small>}

          
          <input {...register('email')} type="text" placeholder='*Email' className='form-control mb-2' />
          {errors.email && <small className='text-danger'>{errors.email.message}</small>} <br />

          <input {...register('terms')} type="checkbox" placeholder='*terms' className='mb-2' style={{height:'15px', width:'15px'}}/>Accepted the terms and conditions
          {errors.terms && <small className='text-danger'>{errors.terms.message}</small>} <br />

        
          <button className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default App