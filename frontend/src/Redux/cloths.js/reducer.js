import * as types from "./actionTypes";

const initial = {
  cloths: [],
    error: "",
  loading: false
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
    default:
      return state;
  }
};
export default ClothReducer
