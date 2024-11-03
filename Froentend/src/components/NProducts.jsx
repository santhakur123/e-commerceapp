import React from 'react';
import list from "../../src/list.json";
import CardN from "../components/CardN.jsx";

function NProducts() {
    const npData=list.filter((fata)=>{
        return fata.category==="neck";
    })
  return (
    <>
      
      <h1 className="mt-20 ml-5 font-bold  text-2xl"> NeckBands </h1>
      <div className="max-w-screen-2xl container mx-auto md:px-22 px-4 ">

      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 left-0 right-0 overflow-x-hidden mr-4">
        {
            npData.map((itam)=>{
                return <CardN key={itam.id} itam={itam}/>
            })
        }
      </div>
    </>
  )
}

export default NProducts
