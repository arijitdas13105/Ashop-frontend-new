import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteFromCart } from "../actions/cartAction";
import Header from "../components/Header";
import { productDetailsReducer } from "../reducers/productReducers";
import "../style.css";

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartReducerState = useSelector((state) => state.cartReducer);
  const { cartItems } = cartReducerState;
  console.log(cartItems);

  const removeCartHandler = (id) => {
    dispatch(deleteFromCart(id));
    console.log("item deleted");
  };
  return (
    <>
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map((item,i) => {
           
            return (
              <>
                <div className="single-cart-item" key={i}>
                 <div className="single-cart-image" >
               <Link to={`/product/${item.product}`} ><img src={item.image} /></Link> 

                 </div>
                    <div className="product-info">
                      <h3 className="product-name">{item.name}</h3>
                      <h4 className="product-price">
                        Price: ₹ {(item.price * item.qty).toFixed(2)}{" "}
                      </h4>
                      <p className="product-quantity">
                        Qnt:
                        <input
                          type="number"
                          value={item.qty}
                          min="1"
                          max={item.countInStock}
                        />
                      </p>

                      <p
                        className="product-remove"
                        onClick={() => removeCartHandler(item.product)}
                      >
                        <i className="fa fa-trash" aria-hidden="true" />
                        <span className="remove">Remove</span>
                      </p>
                    </div>
                  
                </div>
              </>
            );
          })}
        </div>

        <div className="subtotal">
        <div className="subtotal-names">

        </div>
          <div >
            <p>
              <span className="subtotal-names">Quantity:</span>
              <span>{cartItems.reduce((acc, item) => acc + item.qty, 0)}</span>
            </p>
          </div>
          <div>
            <p>
              <span className="subtotal-names">SubTotal:</span>
              <span>
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </span>
            </p>
          </div>
         
             <button  type="button" className="subtotal-checkout"
            onClick={() => {
              navigate("/shipping");
            }}
          >
            check out
          </button>
         
         
        </div>
      </div>
    </>
  );
};

export default CartScreen;
