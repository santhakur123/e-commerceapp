import React from "react";
import Navbar from "../components/Navbar";
import NProducts from "../components/NProducts";
import Footer from "../components/Footer";
import Footer1 from "../components/Footer1";

function Neckbands() {
  return (
    <>
      <Navbar/>
      <div className="min-h-screen">
      <NProducts/>
      </div>
      <Footer1/>
      <Footer/>
    </>
  )
};

export default Neckbands;;
