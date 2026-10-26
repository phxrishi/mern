import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const rule=yup.object().shape({
  name:yup.string().required().min(2),
  rollno:yup.string().required(),
  email:yup.string().required().email(),
  phone:yup.string().required().max(10).min(10),
  course:yup.string().required().min(2)
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
        <h4 className='text-center mb-4'><span className='text-danger'>#Student</span>RegistrationForm</h4>
        <form action="" onSubmit={handleSubmit(saveData)}>
          <input {...register('name')} type="text" placeholder='*Name' className='form-control mb-2' />
          {errors.name && <small className='text-danger'>{errors.name.message}</small>}

          <input {...register('rollno')} type="text" placeholder='*RollNo' className='form-control mb-2' />
          {errors.rollno && <small className='text-danger'>{errors.rollno.message}</small>}

          <input {...register('email')} type="text" placeholder='*Email' className='form-control mb-2' />
          {errors.email && <small className='text-danger'>{errors.email.message}</small>}

          <input {...register('phone')} type="text" placeholder='*Phone' className='form-control mb-2' />
          {errors.phone && <small className='text-danger'>{errors.phone.message}</small>}

          <input {...register('course')} type="text" placeholder='*Course' className='form-control mb-2' />
          {errors.course && <small className='text-danger'>{errors.course.message}</small>} <br />

          <button className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default App