import React from 'react';
import Navbar from "../components/Navbar";
import Show from "../components/Show";
import Footer from "../components/Footer";
import Footer1 from "../components/Footer1";

function DetailPage() {
  return (
    <>
      <Navbar/>
      <div className="min-h-screen">
       <Show/>
      </div>
      <Footer1/>
      <Footer/>
    </>
  )
}

export default DetailPage
