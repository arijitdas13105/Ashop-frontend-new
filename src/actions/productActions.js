import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILS,
  PRODUCT_DETAILS_REQUEST,   
  PRODUCT_DETAILS_SUCCESS,
} from "../constants/productConstant";


export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    // const { data } = await axios.get("api/products");
    // const { data } = await axios.get("https://fakestoreapi.com/products");
    const { data } = await axios.get("https://arijitdas13105-ashop-backend.onrender.com/api/products");
  //  const { data } = await axios.get("https://ashop-server.herokuapp.com/api/products");
    // console.log('api/products', data);
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAILS,  payload:error });
  }
};

export const listProductDetails=(id)=>async(dispatch)=> {
  try {
    dispatch({type:PRODUCT_DETAILS_REQUEST})
    const {data }= await axios.get(`https://arijitdas13105-ashop-backend.onrender.com//api/product/${id}`)
    dispatch({
        type:PRODUCT_DETAILS_SUCCESS,
        payload :data
    })
} catch (error) {
    dispatch({
        type:PRODUCT_LIST_FAILS,
        payload:error
    })
}
 

}



// export const listProductDetails=(id)=>async(dispatch)=> {
//   try {
//       dispatch({type:PRODUCT_DETAILS_REQUEST})
//       const {data }= await axios.get(`/api/product/${id}`)
//       dispatch({
//           type:PRODUCT_DETAILS_SUCCESS,
//           payload :data
//       })
//   } catch (error) {
//       dispatch({
//           type:PRODUCT_LIST_FAILS,
//           payload:error
//       })
//   }
  
//   }
