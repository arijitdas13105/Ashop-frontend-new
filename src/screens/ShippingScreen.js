import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddress } from "../actions/cartAction";
import ModalSuccOrder from "../components/ModalSuccOrder";

import "../style.css";

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
  const [show, setShow] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(saveShippingAddress({ address, city, postalcode, country }));
    // navigate("/payment");
    setShow(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setShow(false);
    navigate("/");
  };
  return (
    <>
      <div className="Ashipping-containers">
        <div className="Ashipping-wrapper ">
          <form onSubmit={submitHandler}>
            <div>
              <h1>shipping </h1>
              <h3>Please enter your shipping details. </h3>
            </div>
            <div className="address-input">
              <div className="shipping-names">
                <input type="text" placeholder=" First name" required />
                <input type="text" placeholder=" Last name" required />
              </div>
              <div className="shipping-user-address">
                <input type="text" placeholder=" Phone Number" required />
                <input type="text" placeholder=" address" required />
                <input type="text" placeholder=" Country" required />
              </div>

              <div className="shipping-user-city">
                <input type="text" placeholder=" city" required />

                <input type="text" placeholder=" zip code " required />

                <input type="text" placeholder=" state" required />
              </div>
            </div>

            <button className="shipping-btn">Continue</button>
          </form>
          <ModalSuccOrder onClose={closeModal} show={show} />
          {/* <ModalSuccOrder onClose={()=>setShow(false)}  show={show}/> */}
        </div>
      </div>
    </>
  );
};

export default ShippingScreen;
