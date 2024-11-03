import React from 'react';
import SignUp from "./SignUp.jsx"
import {Link } from "react-router-dom"
import Home from "../home/Home";
import { useForm } from "react-hook-form";

function Login() {
    const { register
        , handleSubmit,
          formState: { errors } }
           = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}></button> */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog" >
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <div>
    <h3 className="font-bold text-lg">Login</h3>
    <h3 className="font-bold text-lg mt-3" >Email</h3>
    <input placeholder="Enter Email" type="email" className="mt-3"
     {...register("email", { required: true })} 
    />
    {errors.email && <span className="text-sm text-red-500">This field is required</span>}
    <div>
    <h4 className="mt-2 font-bold text-lg">Password</h4>
    <input placeholder=" Enter Password" type="password" className="mt-3"
    {...register("password", { required: true })}/>
    <br/>
    {errors.password && <span className="text-sm text-red-500">This field is required</span>}
    </div>
   <br/><br/>
   <div className="flex justify-around mt-5">
    <button className="ml-3 font-bold text-lg bg-pink-500 text-white rounded-md px-3 py-1">Login</button>
    <p>Not registered? <Link to="/signup"><span className="underline text-blue-500  cursor-pointer" 
        >Signup</span></Link></p>
        
    </div>
    </div>
    
    </form>
  </div>
</dialog>
    </div>
  )
}

export default Login;
