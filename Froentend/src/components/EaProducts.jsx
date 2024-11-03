import React from 'react';
import list from "../../src/list.json";
import CardE from "../components/CardE.jsx";


function EaProducts() {
    const eaData= list.filter((data)=>{
        return  data.category==="yesun";
    });
  return (
    <>
   
      
      <h1 className="mt-20 ml-5 font-bold  text-2xl"> Wireless Earbuds </h1>
      <div className="max-w-screen-2xl container mx-auto md:px-22 px-4 ">

      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 left-0 right-0 overflow-x-hidden mr-4">
        {
            eaData.map((itom)=>{
                return <CardE key={itom.id} itom={itom}/>
            })
        }
      </div>

    </>
  )
}

export default EaProducts;
