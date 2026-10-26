import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const rule=yup.object().shape({
  product:yup.string().required().min(2),
  quantity:yup.string().required().min(1),
 price:yup.number().required(),
description:yup.string().min(20)
})

const App = () => {
  const {handleSubmit, reset, register, formState:{errors}}=useForm({resolver:yupResolver(rule)})

  const saveData =(saveData)=>{
    console.log(saveData);
    reset();
  }

  const submission =()=>{
    return(
      alert("your form is submitted successfully")
    )
  }
  return (
    <>
    <div className="row">
      <div className="col-sm-4 mx-auto p-5 shadow rounded">
        <h4 className='text-center mb-4'><span className='text-danger'>#Product</span>Form</h4>
        <form action="" onSubmit={handleSubmit(saveData)}>
          <input {...register('product')} type="text" placeholder='*product' className='form-control mb-2' />
          {errors.product && <small className='text-danger'>{errors.product.message}</small>}

          
          <input {...register('quantity')} type="text" placeholder='*quantity' className='form-control mb-2' />
          {errors.quantity && <small className='text-danger'>{errors.quantity.message}</small>}

          <input {...register('price')} type="text" placeholder='*price' className='form-control mb-2' />
          {errors.price && <small className='text-danger'>{errors.price.message}</small>}

          <input {...register('description')} type="text" placeholder='*description' className='form-control mb-2' />
          {errors.description && <small className='text-danger'>{errors.description.message}</small>} <br />

          <button className='btn btn-primary ' onClick={submission}>Submit</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default App