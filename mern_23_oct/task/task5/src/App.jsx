import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const rule=yup.object().shape({
  name:yup.string().required().min(2),
  employeeid:yup.string().required(),
  email:yup.string().required().email(),
  phone:yup.string().required().max(10).min(10),
  department:yup.string().required().min(2),
  designation:yup.string().required().min(2)
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
        <h4 className='text-center mb-4'><span className='text-danger'>#Employee</span>RegistrationForm</h4>
        <form action="" onSubmit={handleSubmit(saveData)}>
          <input {...register('name')} type="text" placeholder='*Name' className='form-control mb-2' />
          {errors.name && <small className='text-danger'>{errors.name.message}</small>}

          <input {...register('employeeid')} type="text" placeholder='*Employeeid' className='form-control mb-2' />
          {errors.employeeid && <small className='text-danger'>{errors.employeeid.message}</small>}

          <input {...register('email')} type="text" placeholder='*Email' className='form-control mb-2' />
          {errors.email && <small className='text-danger'>{errors.email.message}</small>}

          <input {...register('phone')} type="text" placeholder='*Phone' className='form-control mb-2' />
          {errors.phone && <small className='text-danger'>{errors.phone.message}</small>}

          <input {...register('department')} type="text" placeholder='*department' className='form-control mb-2' />
          {errors.department && <small className='text-danger'>{errors.department.message}</small>} 

          <input {...register('designation')} type="text" placeholder='*designation' className='form-control mb-2' />
          {errors.designation && <small className='text-danger'>{errors.designation.message}</small>} <br />

          <button className='btn btn-primary w-100'>Submit</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default App