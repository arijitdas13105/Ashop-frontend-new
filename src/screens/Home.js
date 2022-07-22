import React from "react";
import HomeScreen from "./HomeScreen";
import About from "../components/About";
import Footer from "../components/Footer";
import Review from "../components/Review";
import Contact from "../components/Contact";
import ProductScreen from "./ProductScreen";
import '../style.css'
import Header from "../components/Header";
const Home = () => {
  return (
    <>
      
      <HomeScreen />
     <ProductScreen/>
      <Review />
      <Footer /> 
      {/*<About />
      
      <Contact />*/}
    </>
  );
};

export default Home;
