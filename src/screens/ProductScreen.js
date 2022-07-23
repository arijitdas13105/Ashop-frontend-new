
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { addToCart } from "../actions/cartAction";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

const ProductScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const productList = useSelector((state) => state.productListReducer);
  // let pro = useSelector((state) => state.productListReducer);
  // const {products, setProducts} = useState();
  const { products } = productList;
  

  const addToCartHandler=(id)=>{
    dispatch(addToCart(id,qty))
  }

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>         
      <h1 className="heading">
        Latest <span>Products</span>
      </h1>
      <div className="gallery">
      {console.log(products.Array)}
        {products.map((product, index) => {
          {/* console.log(product._id); */}
          return (
              <div  key={index} className="product-content" >
                <Link to={`/product/${product._id}`}>
                  <img src={product.image} alt="product-image" className="product-image" />
                </Link>

                <h3> {product.name} </h3>
                <h6> ₹ {product.price} </h6>
                <button onClick={()=>addToCartHandler(product,id)} className="product-button" >Add to cart</button>
              </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductScreen;

