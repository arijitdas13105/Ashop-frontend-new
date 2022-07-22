import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from "../constants/productConstant";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { products: action.payload };
    case PRODUCT_LIST_FAILS:
      return { error: action.error };

    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state };
    case PRODUCT_DETAILS_SUCCESS:
      return { product: action.payload };
    case PRODUCT_LIST_FAILS:
      return { error: action.eror };

    default:
      return state;
  }
};
