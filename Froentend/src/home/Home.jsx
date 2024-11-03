import React from 'react'
import Navbar from "../components/Navbar"
import Baner from "../components/Baner"
import Footer from "../components/Footer";
import ExploreSellers  from"../components/ExploreSellers";
import TopPicks from "../components/TopPicks";
import Footer1 from "../components/Footer1.jsx";

function Home() {
  return (
    <>
      <Navbar/>
      <Baner/>
      <ExploreSellers/>
      <TopPicks/>
      <Footer1/>
      <Footer/>
    </>
  )
}

export default Home
