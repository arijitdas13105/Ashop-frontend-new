import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../style.css";

const Header = () => {
  const cartReducer = useSelector((state) => state.cartReducer);
  const { cartItems } = cartReducer;
  return (
    <>
      <nav className="navbar">
      <Link to={'/'}>
                <h1 className="logo"> Arijit </h1>

      </Link>
        <ul className="nav-links">
          <li className="active">
           
            <a href="#" />
            Home
          </li>
          <li>
           
            <a href="/products" />
            Products
          </li>
          <li>
           
            <a href="#" />
            Explore
          </li>
          <li>
           
            <a href="#" />
            About
          </li>
          <li className="ctn">
           
            <a href="#" />
            Contact
          </li>
        </ul>
        <div className="header-icons " >
          <Link to="/carts">
            <a className="fas fa-shopping-cart"> {cartItems.length} </a>
          </Link>
          <Link to="/login">
            <a className="fas fa-user" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
