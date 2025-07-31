import React from 'react'
import Navbar from "../components/Navbar";
import EaProducts from "../components/EaProducts";
import Footer from "../components/Footer";
import Footer1 from "../components/Footer1";

function EarBuds() {
  return (
    <>
      <Navbar/>
      <div className="min-h-screen">
      <EaProducts/>
      </div>
      <Footer1/>
      <Footer/>
    </>
  )
}

export default EarBuds;