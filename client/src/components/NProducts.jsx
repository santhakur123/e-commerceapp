import React from 'react';
import {useEffect,useState} from "react"
import axios from "axios";
// import list from "../../src/list.json";
import CardN from "../components/CardN.jsx";

function NProducts() {
  const [commerce,setCommerce]=useState([]);
  const [npData,setNpData]=useState([]);
   useEffect(()=>{
    const getCommerce=async ()=>{
      try{
        const res =await axios.get("http://localhost:3000/commerce");
        setCommerce(res.data);
        //filter products where category is neck
        const filteredData=res.data.filter((fata)=>{
            return fata.category==="neck";
      });
      setNpData(filteredData);
      }catch(err){
        console.log(err);
      }
    }
    getCommerce();

   
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
