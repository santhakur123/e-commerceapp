import React from 'react'
import {useState,useEffect} from "react";
import axios from "axios";
// import list from "../../src/list.json";
import CardH from "../components/CardH.jsx";

function HProducts() {
  const [commerce,setCommerce]=useState([]);
  const [hpData,setHPData]=useState([]);
   useEffect(()=>{
    const getCommerce=async ()=>{
      try{
       const res = await axios.get("/commerce");;
        setCommerce(res.data);
        //filter products where category is free
        const filteredData=res.data.filter((data)=>{
          return data.category==="head"
      });
      setHPData(filteredData);
      }catch(err){
        console.log(err);
      }
    }
    getCommerce();

   
  });
    
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
