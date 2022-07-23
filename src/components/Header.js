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
          <h1 className="logo"> Ashop </h1>
        </Link>
        <ul className="nav-links">

        <Link  to={"/"}>
          <li className="active">
          
            Home
          </li>
        </Link>
          
          <Link to={"/products"}>
            <li >
             
              Products
            </li>
          </Link>

        
          
        <Link to={"/#"}>
          <li>
           
            About
          </li>
        </Link>

          <Link to={"/#"}>
            <li className="ctn">
            
            Contact
          </li>
          </Link>
          
        </ul>
        <div className="header-icons ">
          <Link to="/carts">
            <a className="fas fa-shopping-cart"> {cartItems.length} </a>
          </Link>
          <Link to="/#">
            <a className="fas fa-user" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
