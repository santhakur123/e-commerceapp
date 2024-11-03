import React from 'react';
import list from "../../src/list.json";
import CardSPEA from "../components/CardSPEA.jsx";

function SProducts() {
  const spData=list.filter((sata)=>{
    return sata.category==="best";
  })
  return (
    <>
      
      <h1 className="mt-20 ml-5 font-bold  text-2xl"> Speaker </h1>
      <div className="max-w-screen-2xl container mx-auto md:px-22 px-4 ">

      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 left-0 right-0 overflow-x-hidden mr-4">
        {
            spData.map((itpm)=>{
                return <CardSPEA key={itpm.id} itpm={itpm}/>
            })
        }
      </div>
    </>
  )
}

export default SProducts;
