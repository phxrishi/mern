import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const rule=yup.object().shape({
  sname:yup.string().required().min(2),
  fname:yup.string().required().min(2),
  mname:yup.string().required().min(2),
  email:yup.string().required().email(),
  phone:yup.string().required().max(10).min(10),
  dob:yup.string().required(),
  gender:yup.string().required(),
  address:yup.string().required().min(5),
  course:yup.string().required(),
  branch:yup.string().required(),
  sem:yup.string().required()
  
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
        <h4 className='text-center mb-4'><span className='text-danger'>#College</span>AddmissionForm</h4>
        <form action="" onSubmit={handleSubmit(saveData)}>
          <input {...register('sname')} type="text" placeholder='Student Name' className='form-control mb-4' />
          {errors.sname && <small className='text-danger'>{errors.sname.message}</small>}

          <input {...register('fname')} type="text" placeholder='*Fathers Name' className='form-control mb-4' />
          {errors.fname && <small className='text-danger'>{errors.fname.message}</small>}

          <input {...register('mname')} type="text" placeholder='*Mothers Name' className='form-control mb-4' />
          {errors.mname && <small className='text-danger'>{errors.mname.message}</small>}

        

          <input {...register('email')} type="text" placeholder='*Email' className='form-control' />
          {errors.email && <small className='text-danger'>{errors.email.message}</small>} <br />

           <input {...register('phone')} type="text" placeholder='*phone' className='form-control ' />
          {errors.phone && <small className='text-danger'>{errors.phone.message}</small>} <br />


           <input {...register('dob')} type="date" placeholder='*DOB' className='form-control ' />
          {errors.dob && <small className='text-danger'>{errors.dob.message}</small>} <br />

           <input {...register('address')} type="text" placeholder='*Address' className='form-control ' />
          {errors.address && <small className='text-danger'>{errors.address.message}</small>} <br />

          <input {...register('course')} type="text" placeholder='*course' className='form-control ' />
          {errors.course && <small className='text-danger'>{errors.course.message}</small>} <br />

        
           <select {...register('gender')} className='form-control'>
            <option value="">*Select Gender</option>
           <option value="Male">Male</option>
           <option value="Female">Female</option>
           </select>
          {errors.gender && <small className='text-danger'>{errors.gender.message}</small>} <br />

          <select {...register('branch')} className='form-control'>
            <option value="">*Select branch</option>
           <option value="Male">Btech</option>
           <option value="Female">BCA</option>
           <option value="Male">Mtech</option>
           <option value="Female">MCA</option>
           <option value="Male">Btech</option>
           <option value="Female">BCA</option>
           </select>
          {errors.branch && <small className='text-danger'>{errors.branch.message}</small>} <br />

         
          <select {...register('sem')} className='form-control'>
            <option value="">*Select semester</option>
           <option value="Male">1st semester</option>
           <option value="Female">2nd semester</option>
            <option value="Male">3rd semester</option>
           <option value="Female">4th semester</option>
            <option value="Male">5th semester</option>
           <option value="Female">6th semester</option>
           </select>
          {errors.sem && <small className='text-danger'>{errors.sem.message}</small>} <br />

         
          <button className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default App