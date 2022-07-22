import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import{composeWithDevTools} from 'redux-devtools-extension'
import { productListReducer ,productDetailsReducer} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducer";

  
// const cartItemFormStorage=localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem('cartItems')):[]

const cartItemFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const shippingAddressFormStorage=localStorage.getItem("shippingAddress")? JSON.parse(localStorage.getItem("shippingAddress")):[]
const reducer= combineReducers({
    productListReducer : productListReducer ,
    productDetailsReducer:productDetailsReducer,
    cartReducer:cartReducer
})

const initialState = {
    cartReducer: {
      cartItems: cartItemFromStorage,
      shippingAddress:shippingAddressFormStorage
    },
  };



const middleware=[thunk]
const store=createStore(
    reducer,initialState,composeWithDevTools(applyMiddleware(...middleware))
)
export default store