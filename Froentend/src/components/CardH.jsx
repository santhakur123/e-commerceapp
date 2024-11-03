import React from 'react'

function CardH({itsm}) {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
      <div className="card bg-base-100 w-96 shadow-xl">
  <figure className=" card-body cursor-pointer hover:bg-slate-800 px-10 pt-10hover-scale-105 duration-280 ">
    <img
      src={itsm.image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center ">
    <h2 className="card-title">{itsm.title}</h2>
    <div className="bg-color-eoc367 h-30">
        <span className
        ="text-decoration: line-through">{itsm.oldPrice}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="font-bold">{itsm.newPrice}</span>
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

export default CardH;