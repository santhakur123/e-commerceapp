import React from 'react'
import list from "../../src/list.json";
import CardH from "../components/CardH.jsx";

function HProducts() {
    const hpData=list.filter((pata)=>{
        return pata.category==="head";
    })
  return (
    <>
      
      <h1 className="mt-20 ml-5 font-bold  text-2xl"> HeadPhones </h1>
      <div className="max-w-screen-2xl container mx-auto md:px-22 px-4 ">

      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 left-0 right-0 overflow-x-hidden mr-4">
        {
            hpData.map((itsm)=>{
                return <CardH key={itsm.id} itsm={itsm}/>
            })
        }
      </div>

    </>
  )
}

export default HProducts;
