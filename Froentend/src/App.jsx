import React from 'react'
import Navbar from "./components/Navbar"
import Baner from "./components/Baner"
import Footer from "./components/Footer";
import ExploreSellers  from"./components/ExploreSellers";
import TopPicks from "./components/TopPicks";
import Footer1 from "./components/Footer1.jsx";
import Home from "./home/Home";
import SProducts from "./components/SProducts.jsx";
import NProducts from "./components/NProducts.jsx";
import HProducts from "./components/HProducts.jsx";
 import {Route,Routes} from "react-router-dom";
 import Speaker from "./ProductPage/Speaker.jsx";
 import Neckbands from "./ProductPage/Neckbands.jsx";
 import Headphones from "./ProductPage/Headphones.jsx";
 import EarBuds from "./ProductPage/EarBuds.jsx";
 import Login from "./components/Login.jsx"
 import SignUp from "./components/SignUp.jsx"
 import  { Toaster } from 'react-hot-toast';
 import Show from "./components/Show.jsx";
 import DetailPage from "./ProductPage/DetailPage.jsx";

function App() {
  

  return (
    <>
      
      {/* <Home/>
      <Course/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/speaker" element={<Speaker/>}/>
        <Route path="/neckbands" element={<Neckbands/>}/>
        <Route path="/headphones" element={<Headphones/>}/>
        <Route path="/earbuds" element={<EarBuds/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/commerce/:id" element={<DetailPage/>}/>
      </Routes>
      <Toaster/>

    </>
  )
}

export default App
