import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const rule=yup.object().shape({
  fname:yup.string().required().min(2),
  lname:yup.string().required().min(2),
  email:yup.string().required().email(),
  phone:yup.string().required().max(10).min(10),
  dob:yup.string().required(),
  gender:yup.string().required(),
  address:yup.string().required().min(5),
  state:yup.string().required(),
  pc:yup.string().required().min(6).max(6),
  city:yup.string().required()
  
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
        <h4 className='text-center mb-4'><span className='text-danger'>#Complete</span>PersonalDetailsForm</h4>
        <form action="" onSubmit={handleSubmit(saveData)}>
          <input {...register('fname')} type="text" placeholder='*FirstName' className='form-control mb-4' />
          {errors.fname && <small className='text-danger'>{errors.fname.message}</small>}

          <input {...register('lname')} type="text" placeholder='*LastName' className='form-control mb-4' />
          {errors.lname && <small className='text-danger'>{errors.lname.message}</small>}

          
          <input {...register('email')} type="text" placeholder='*Email' className='form-control' />
          {errors.email && <small className='text-danger'>{errors.email.message}</small>} <br />

           <input {...register('phone')} type="text" placeholder='*phone' className='form-control ' />
          {errors.phone && <small className='text-danger'>{errors.phone.message}</small>} <br />


           <input {...register('dob')} type="date" placeholder='*DOB' className='form-control ' />
          {errors.dob && <small className='text-danger'>{errors.dob.message}</small>} <br />

           <input {...register('address')} type="text" placeholder='*Address' className='form-control ' />
          {errors.address && <small className='text-danger'>{errors.address.message}</small>} <br />

          <input {...register('state')} type="text" placeholder='*State' className='form-control ' />
          {errors.state && <small className='text-danger'>{errors.state.message}</small>} <br />

            <input {...register('city')} type="text" placeholder='*city' className='form-control ' />
          {errors.city && <small className='text-danger'>{errors.city.message}</small>} <br />

            <input {...register('pc')} type="text" placeholder='*Pin code' className='form-control ' />
          {errors.pc && <small className='text-danger'>{errors.pc.message}</small>} <br />


           <select {...register('gender')} className='form-control'>
            <option value="">*Select Gender</option>
           <option value="Male">Male</option>
           <option value="Female">Female</option>
           </select>
          {errors.gender && <small className='text-danger'>{errors.gender.message}</small>} <br />

         
          <button className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default App