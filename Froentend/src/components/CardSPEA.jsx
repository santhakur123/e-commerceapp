import React from 'react'

function CardSPEA({itpm}) {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
      <div className="card bg-base-100 w-96 shadow-xl">
  <figure className=" card-body cursor-pointer hover:bg-slate-800 px-10 pt-10 hover-scale-105 duration-280">
    <img
      src={itpm.image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center ">
    <h2 className="card-title">{itpm.title}</h2>
    <div className="bg-color-eoc367 h-30">
        <span className
        ="text-decoration: line-through">{itpm.oldPrice}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="font-bold">{itpm.newPrice}</span>
    </div>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default CardSPEA;