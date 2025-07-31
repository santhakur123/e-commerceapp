import React from 'react'
import {Link} from "react-router-dom"

import ExploreSellers from "./ExploreSellers.jsx";

function Cards({item,key}) {
     
  return (
    <>
    
     
     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
     <div className="card bg-base-100 w-96 shadow-xl">
     <Link to ={`/${item.brand}`}>
  <div className="card-body cursor-pointer hover:bg-slate-800 hover:scale-105 duration-280">
  
  <figure>
    <img
      src={item.image}
      alt="item_image" />
  </figure>
    <h2 className="card-title">{item.title}</h2>
    
  </div>
  </Link>
  
</div></div> 
   
    </>
  )
}

export default Cards;
