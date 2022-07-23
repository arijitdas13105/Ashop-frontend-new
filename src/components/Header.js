import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../style.css";

const Header = () => {
  const cartReducer = useSelector((state) => state.cartReducer);
  const { cartItems } = cartReducer;
  return (
    <>
      <nav className="navbar">
        <Link to={"/"}>
          <h1 className="logo"> Arijit </h1>
        </Link>
        <ul className="nav-links">

        <Link  to={"/"}>
          <li className="active">
            <a  />
            Home
          </li>
        </Link>
          
          <Link to={"/products"}>
            <li>
              <a />
              Products
            </li>
          </Link>

        
          
        <Link to={"/about"}>
          <li>
            <a  />
            About
          </li>
        </Link>

          <Link to={"/contact"}>
            <li className="ctn">
            <a  />
            Contact
          </li>
          </Link>
          
        </ul>
        <div className="header-icons ">
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
