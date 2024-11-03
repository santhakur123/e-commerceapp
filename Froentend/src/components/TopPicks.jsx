import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../../src/list.json"
import CardsP from "./CardsP.jsx";

function TopPicks() {
    const getData=list.filter((bata)=>{
        return  bata.category==="good";
    });
    console.log(getData);
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
      <h1 className="font-bold text-xl pb-2 max-w-screen-2xl container mx-auto  mt-5 md:px-20 px-4"> TOP PICKS<b> FOR YOU</b> </h1></div>
       
      <div>
      <Slider {...settings}>
        {getData.map((itm)=>{
           return  <CardsP itm={itm} key={itm.id} />
        })}
      </Slider>
      </div>
      </div> 
    </>
  )
}

export default TopPicks;
