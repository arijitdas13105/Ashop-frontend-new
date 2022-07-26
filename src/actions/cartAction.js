import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstant";


 export const addToCart = (data, qty) => async (dispatch, getState) => {

  const cartItem ={
    product: data._id,
    name: data.name,
    image: data.image,
    price: data.price,
    countInStock: data.countInStock,
    qty,
  }
  dispatch({
    type: CART_ADD_ITEM,
    payload:cartItem 
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cartReducer.cartItems));
};



export const deleteFromCart=(id)=>(dispatch,getState)=>{
  dispatch({type:CART_REMOVE_ITEM,
    payload:id
  })
  localStorage.setItem("cartItems",JSON.stringify(getState().cartReducer.cartItems))
}


export const saveShippingAddress=(data)=>(dispatch)=>{
  dispatch({
    type:CART_SAVE_SHIPPING_ADDRESS,
    payload :data
  })
  localStorage.setItem("shippingAddress",JSON.stringify(data))
}