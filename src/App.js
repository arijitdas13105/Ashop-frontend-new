import "./App.css";
import Home from "./screens/Home";

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductDetails from "./screens/ProductDetails";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";

import ProductScreen from "./screens/ProductScreen";



function App() {
  return (
    <> 
    <Header />
      <Routes>
       <Route exact path='/' element={ <Home />}  />
      
       <Route  path='/product/:id' element={<ProductDetails/>} />
       <Route  path='/carts' element={<CartScreen/>} />
       <Route  path='/shipping' element={<ShippingScreen/>} /> 
        <Route exact path='/products' element={ <ProductScreen />}  />
        <Route exact path='https://ashop-server.herokuapp.com/api/products' element={ <ProductScreen />}  />

         
      </Routes>
    </>
  );
}

export default App;

