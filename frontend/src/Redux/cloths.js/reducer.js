import * as types from "./actionTypes";

const initial = {
  cloths: [],
    error: "",
    currentProduct:{},
    loading: false,
  cart:[]
};

const ClothReducer = (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_DATA_REQ:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case types.FETCH_DATA_SUCC:
      return {
        ...state,
        cloths: payload,
        error: "",
        loading: false,
      };
    case types.FETCH_DATA_FAIL:
      return {
        ...state,

        error: payload,
        loading: false,
      };
    case types.SINGLE_FETCH_DATA_REQ:
      return {
        ...state,
        error: "",

        loading: true,
      };
    case types.SINGLE_FETCH_DATA_SUCC:
      return {
        ...state,
        currentProduct: payload,
        error: "",
        loading: false,
      };
    case types.SINGLE_FETCH_DATA_FAIL:
      return {
        ...state,

        error: payload,
        loading: false,
      };
    case types.ADD_PRO_CART_REQ:
      return {
        ...state,
        error: "",

        loading: true,
      };
    case types.ADD_PRO_CART_SUCC:
      return {
        ...state,
        cart: [...state.cart, payload],
        error: "",
        loading: false,
      };
    case types.ADD_PRO_CART_FAIL:
      return {
        ...state,

        error: payload,
        loading: false,
      };
    case types.FETCH_CART_REQ:
      return {
        ...state,
        error: "",

        loading: true,
      };
    case types.FETCH_CART_SUCC:
      return {
        ...state,
        cart: [...payload],
        error: "",
        loading: false,
      };
    case types.FETCH_CART_FAIL:
      return {
        ...state,

        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default ClothReducer
