import React from 'react';
// import list from "../../src/list.json";
import CardE from "../components/CardE.jsx";
import {useState,useEffect} from "react";
import axios from "axios"


function EaProducts() {
  const [commerce,setCommerce]=useState([]);
  const [eaData,setEAData]=useState([]);
   useEffect(()=>{
    const getCommerce=async ()=>{
      try{
        const res = await axios.get("/commerce");;
        setCommerce(res.data);
        //filter products where category is yesun
        const filteredData=res.data.filter((data)=>{
          return data.category==="yesun"
      });
      setEAData(filteredData);
      }catch(err){
        console.log(err);
      }
    }
    getCommerce();

   
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
