import React from 'react'
import {Link} from "react-router-dom"

function CardsP({itm}) {
  return (
    <>
  <Link to={`/commerce/${itm.id}`}>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 hover-scale-105 duration-280">
      <div className="card bg-base-100 w-96 shadow-xl hover-scale-105 duration-280">
  <figure  className=" card-body cursor-pointer hover:bg-slate-800 px-10 pt-10 ">
  
    <img
      src={itm.image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{itm.title}</h2>
    <div className="bg-color-eoc367 h-30">
        <span className
        ="text-decoration: line-through">{itm.oldPrice}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="font-bold">{itm.newPrice}</span>
    </div>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</div>
</Link>
    </>
  )
}

export default CardsP;
