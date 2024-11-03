import React from 'react'
import {Link} from "react-router-dom"
import { useForm } from "react-hook-form";
import Login from "./Login.jsx"

function SignUp() {
    const { register
        , handleSubmit,
          formState: { errors } }
           = useForm();
  const onSubmit = data => console.log(data);
  return (
    <>
     <div className="flex h-screen items-center justify-center">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}></button> */}
<div id="my_modal_3" className ="border-[2px] shadow-md p-6 rounded-md w-70">
  <div >
    <form  onSubmit={handleSubmit(onSubmit)} method="div">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <div>
    <h3 className="font-bold text-lg">SignUp</h3>
    <h2 className="font-bold text-lg">Username</h2>
    <input placeholder="Enter Username" type="username"
     {...register("username", { required: true })}/>
     <br/>
     {errors.username && <span className="text-sm text-red-500">This field is required</span>}
    <h3 className="font-bold text-lg mt-3" >Email</h3>
    <input placeholder="Enter Email" type="email" className="mt-3"
    {...register("email", { required: true })}/>
    <br/>
    {errors.email && <span className="text-sm text-red-500">This field is required</span>}
    <h4 className="mt-2 font-bold text-lg">Password</h4>
    <input placeholder=" Enter Password" className="mt-3"
    {...register("password", { required: true })}/>
   <br/><br/>
   {errors.password && <span className="text-sm text-red-500">This field is required</span>}
   <div className="flex justify-around mt-5">
    <button className=" font-bold text-lg bg-pink-500 text-white rounded-md px-3 py-1">SignUp</button>
    <p className="ml-7">Not registered? < Link to="/" className="underline text-blue-500  cursor-pointer" 
      onClick={()=>
        document.getElementById("my_modal_3").showModal()
      } 
       >Login</Link></p>
        
    </div>
    </div>
    </form>
  </div>
</div>
    </div>
    </>
  )
}

export default SignUp
