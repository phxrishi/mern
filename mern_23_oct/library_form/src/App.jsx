import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const rule=yup.object().shape({
  name: yup.string().required().min(2).max(18),
  email: yup.string().required(),
  password: yup.string().required().min(8).max(20),
});
const App = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: yupResolver(rule) });
  const saveData = (data) => {
    console.log(data, "########");
    reset();
  };

  return (
    <>
      <div className="row mt-4">
        <div className="col-sm-5  shadow p-4 rounded">
          <h1 className="">
            <span className="text-danger">#YUP Form</span>Resolver
          </h1>
          <form onSubmit={handleSubmit(saveData)}>
            <input {...register('name')}
              type="text"
              className="form-control mb-1"
              placeholder="*Name"
            />
            {errors.name && <p className="text-danger mb-2">{errors.name.message}</p>}


            <input {...register('email')}
              type="text"
              className="form-control mb-1"
              placeholder="*Email"
            />
            {errors.email && <p className="text-danger mb-2">{errors.email.message}</p>}

            <input {...register('password')}
              type="Password"
              className="form-control mb-1"
              placeholder="*Password"
            />
            {errors.password && <p className="text-danger mb-2">{errors.password .message}</p>}

            <input
              type="submit"
              className="form-control mb-1 btn btn-secondary text-light"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
