import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddress } from "../actions/cartAction";
import '../style.css'

const ShippingScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // ww'll define state where we will store user address,city,postal code etc
  //To get shipping address we need "cart " so using useSelectore will will extract "cart" from state
  const cartReducer = useSelector((state) => state.cartReducer);
  // destructing shippingaddress from cart
  const { shippingAddress } = cartReducer;

  const [address, setAddress] = useState(shippingAddress.adress); // because we need the to next page so we are filling in intial state
  const [city, setCity] = useState(shippingAddress.city);
  const [postalcode, setPostalcode] = useState(shippingAddress.postalcode);
  const [country, setCountry] = useState(shippingAddress.country);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalcode, country }));
    navigate("/payment");
  };
  return (
    <>
     
      
      <div className="Ashipping-containers">
        <div className="Ashipping-wrapper ">
          <form>
            <div>
              <h1>shipping </h1>
              <h3>Please enter your shipping details. </h3>
            </div>
            <div className="address-input">
              <div className="shipping-names"  >
                <input type="text" placeholder=" First name" />
                <input type="text" placeholder=" Last name" />
              </div>
              <div  className="shipping-user-address" >
                <input type="text" placeholder=" Phone Number" />
                <input type="text" placeholder=" address" />
                <input type="text" placeholder=" Country" />
              </div>

              <div className="shipping-user-city" >
                
                  <input type="text" placeholder=" city" />

                  <input type="text" placeholder=" zip code " />

                  <input type="text" placeholder=" state" />
               
                
              </div>
            </div>

            <button className="shipping-btn" >Continue</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ShippingScreen;
