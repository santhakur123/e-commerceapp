import React from 'react'
import {Link} from "react-router-dom"

function Baner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className=" order-2 md:order-1 md:w-1/2 mt-12  md:mt-15">
        <div className="space-y-5">
        <h1 className="text-4xl font-bold mt-10"> Hello, welcome here to learn something <span className="text-pink-500">new  everyday!!!</span></h1>
        <p className="text-xl"> With the lots, of Love and Greetings we offer you and recommened you a good quality of items from which you are available to get quality of content </p>
        
        <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
<Link to="/">
<button className="btn btn-secondary space-x-15">Submit</button></Link>
</div>
        </div>
        <div className="  order-1 md:w-1/2  ">
        <img src="https://img.freepik.com/free-photo/side-view-man-athletic-wear-earbuds-outdoors_23-2148773857.jpg?t=st=1730306892~exp=1730310492~hmac=8b11d7994e7249de2c3667231cdabd8b744b5e1dfe24de69f3a67623f01c1479&w=360" alt="" className="h-92 w-90 mt-20 mx-20"/>
        </div>
      </div>
    </>
  )
}

export default Baner;
