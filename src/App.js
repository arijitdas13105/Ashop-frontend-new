import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductDetails from "./screens/ProductDetails";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";



function App() {
  return (
    <> 
    <Header />
      <Routes>
       <Route exact path='/' element={ <Home />}  />
      
       <Route  path='/product/:id' element={<ProductDetails/>} />
       <Route  path='/carts' element={<CartScreen/>} />
       <Route  path='/shipping' element={<ShippingScreen/>} /> 
        <Route exact path='/register' element={ <RegisterScreen />}  />
        <Route exact path='/login' element={ <LoginScreen />}  />
         
      </Routes>
    </>
  );
}

export default App;

