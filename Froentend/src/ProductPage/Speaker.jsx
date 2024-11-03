import React from 'react'
import Navbar from "../components/Navbar";
import SProducts from "../components/SProducts";
import Footer from "../components/Footer";
import Footer1 from "../components/Footer1";

function Speaker() {
  return (
    <>
      <Navbar/>
      <div className="min-h-screen">
      <SProducts/>
      </div>
      <Footer1/>
      <Footer/>
    </>
  )
}

export default Speaker;
