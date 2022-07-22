import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import { addToCart } from "../actions/cartAction";
import { listProductDetails } from "../actions/productActions";
import "../style.css";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetailsReducer);
  const { product } = productDetails;

  const addToCartHandler = () => {
    dispatch(addToCart(product, qty));
  };

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch]);
  return (
    <>
      <div className="productD-wrapper">
        {/* card left */}
        <div className="productD-left">
          <div className="productD-img-display">
            <img src={product.image} alt="shoe image" className="productD-img"/>
          </div>
        </div>
        {/* card right */}
        <div className="productD-content">
          <div className="product-content-name">
            <div>
              <h2 className="productD-title">{product.name}</h2>
              
              <a href="#" className="productD-brand">
                Brand: {product.brand}{" "}
              </a>

              <p className="productD-new-price">
                New Price: <span> ₹{product.price} (5%)</span>
              </p>

              <div className="productD-rating">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
              <span>4.7(21)</span>

              
            </div>

            </div>

            
          </div>

          <div className="productD-detail">
           
           <div className="productD-About">
            <h2>About this item: </h2>
            <p>{product.description}</p>
           </div>

           <div className="productD-Desc-Detail">
            <ul>
              <li>
                Color: <span>Black</span>
              </li>
              <li>
                Available:{" "}
                <span>
                  {product.countInStock > 0 ? "instock" : "out of stock"}{" "}
                </span>
              </li>
              <li>
                Category: <span>Shoes</span>
              </li>
              <li>
                Shipping Area: <span>All over the world</span>
              </li>
              <li>
                Shipping Fee: <span>Free</span>
              </li>
            </ul>
           </div>
            
            
          </div>
          <div className="purchaseD-info">
            {product.countInStock > 0 && (
              <>
                <input
                  type="number"
                  value={qty}
                  onChange={(e) => setQty(e.target.valueAsNumber)}
                  min="0"
                  max={product.countInStock}
                />
               
                  <button
                  type="button"
                  className="btnD"
                  onClick={() => addToCartHandler(product)}
                >
                  Add to Cart <i className="fas fa-shopping-cart" />
                </button>
                
               
                
              </>
            )}
          </div>
          <div className="social-links">
            <p>Share At: </p>
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-whatsapp" />
            </a>
            <a href="#">
              <i className="fab fa-pinterest" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
