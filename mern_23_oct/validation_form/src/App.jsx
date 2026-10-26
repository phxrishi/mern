import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

const rule=yup.object().shape({
  name:yup.string().required(),
  email:yup.string().required(),
  mobile:yup.string().required().min(10),
  password:yup.string().required()
})



const App = () => {

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors }
    } = useForm({ resolver: yupResolver(rule) });
    const saveData = (data) => {
      console.log(data);
      reset();
    };

  return (
   <>
   <div className="container-fluid bg-dark">
    <div className="row">
      <div className="col-sm-4 mx-auto bg-light mt-5 mb-5 p-3">
        <h5 className='text-bold mx-4'>Registration Page</h5>
       <form className='mx-4' onSubmit={handleSubmit(saveData)}>
         Name
        <input {...register('name')} type="text" className='form-control rounded-0 mb-1' />
        {errors.name && <p className="text-danger mb-2">{errors.name.message}</p>}

        Email ID
        <input  {...register('email')} type="email" className='form-control rounded-0 mb-1' />
        {errors.email && <p className="text-danger mb-2">{errors.email.message}</p>}

        Mobile No.
        <input {...register('mobile')} type="text" className='form-control rounded-0 mb-1' />
        {errors.mobile && <p className="text-danger mb-2">{errors.mobile.message}</p>}

        Password 
        <input {...register('password')} type="text" className='form-control rounded-0 mb-1' />
        {errors.password && <p className="text-danger mb-2">{errors.password.message}</p>}



        <button className='button  form-control mt-3 mb-5 rounded-0'>Register</button>

       </form>
      </div>
    </div>
   </div>
   </>
  )
}

export default App