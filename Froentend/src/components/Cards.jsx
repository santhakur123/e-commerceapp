import React from 'react'

import ExploreSellers from "./ExploreSellers.jsx";

function Cards({item}) {
    
  return (
    <>
     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
     <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body cursor-pointer hover:bg-slate-800 hover:scale-105 duration-280">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
    <h2 className="card-title">{item.title}</h2>
    
  </div>
  
</div></div> 
    </>
  )
}

export default Cards;
