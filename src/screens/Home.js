import React from "react";
import HomeScreen from "./HomeScreen";
import Footer from "../components/Footer";
import Review from "../components/Review";
import ProductScreen from "./ProductScreen";
import '../style.css'
const Home = () => {
  return (
    <>
      
      <HomeScreen />
     {/* <ProductScreen/> */}
      <Review />
      <Footer /> 
      
    </>
  );
};

export default Home;
