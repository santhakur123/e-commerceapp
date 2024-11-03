import Navbar from "../components/Navbar";
import HProducts from "../components/HProducts";
import Footer from "../components/Footer";
import Footer1 from "../components/Footer1";

function Headphones() {
  return (
    <>
      <Navbar/>
      <div className="min-h-screen">
      <HProducts/>
      </div>
      <Footer1/>
      <Footer/>
    </>
  )
};
export default Headphones;