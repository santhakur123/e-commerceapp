import React from 'react'
import {useEffect,useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios"
// import list from "../../src/list.json"
import Cards from './Cards.jsx';


function ExploreSellers() {
  const [commerce,setCommerce]=useState([]);
  const [filterData,setFilterData]=useState([]);
   useEffect(()=>{
    const getCommerce=async ()=>{
      try{
        const res = await axios.get("/commerce");;
        setCommerce(res.data);
        //filter products where category is free
        const filteredData=res.data.filter((data)=>{
          return data.category==="Free"
      });
      setFilterData(filteredData);
      }catch(err){
        console.log(err);
      }
    }
    getCommerce();

   
  });
  
  
  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
     <div className="max-w-screen-2xl container mx-auto md:px-22 px-4 ">
      <div>
      <h1 className="font-bold text-xl pb-2 max-w-screen-2xl container mx-auto md:px-20 px-4"> Explore <b> BestSellers</b> </h1></div>
       
      <div>
      <Slider {...settings}>
        {filterData.map((item)=>{
           return <Cards item={item} key={item.id} />
        })}
      </Slider>
      </div>
      </div>
    </>
  )
}

export default ExploreSellers;
