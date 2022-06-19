import Axios from "axios";
import * as types from "./actionTypes";

const FetchDataReq = (payload) => {
  return {
    type: types.FETCH_DATA_REQ,
    payload,
  };
};
const FetchDataSucc = (payload) => {
  return {
    type: types.FETCH_DATA_SUCC,
    payload,
  };
};
const FetchDataFail = (payload) => {
  return {
    type: types.FETCH_DATA_FAIL,
    payload,
  };
};

const FetchData = (payload) => {
  return (dispatch) => {
    dispatch(FetchDataReq);

    Axios.get("https://ov9fh4.sse.codesandbox.io/cloths", {
      params: {
        ...payload,
      },
    })
      .then((r) => dispatch(FetchDataSucc(r.data)))
      .catch((e) => dispatch(FetchDataFail(e.data)));
  };
};

const Single_FetchDataReq = (payload) => {
  return {
    type: types.SINGLE_FETCH_DATA_REQ,
    payload,
  };
};
const Single_FetchDataSucc = (payload) => {
  return {
    type: types.SINGLE_FETCH_DATA_SUCC,
    payload,
  };
};
const Single_FetchDataFail = (payload) => {
  return {
    type: types.SINGLE_FETCH_DATA_FAIL,
    payload,
  };
};

const Single_FetchData = (id) => (dispatch) => {
  dispatch(Single_FetchDataReq());
  Axios.get(`https://ov9fh4.sse.codesandbox.io/cloths/${id}`)
    .then((r) => dispatch(Single_FetchDataSucc(r.data)))
    .catch((e) => Single_FetchDataFail(e.data));
};

const Add_Pro_Req = (payload) => {
  return {
    type: types.ADD_PRO_CART_REQ,
    payload,
  };
};
const Add_Pro_Succ = (payload) => {
  return {
    type: types.ADD_PRO_CART_SUCC,
    payload,
  };
};
const Add_Pro_Fail = (payload) => {
  return {
    type: types.ADD_PRO_CART_FAIL,
    payload,
  };
};

const AddProCart = (product) => (dispatch) => {
  dispatch(Add_Pro_Req());
  Axios.post("https://ov9fh4.sse.codesandbox.io/cart", product)
    .then((r) => dispatch(Add_Pro_Succ(r.data)))
    .catch((e) => dispatch(Add_Pro_Fail(e.data)));
};

const Fetch_Cart_Req = (payload) => {
  return {
    type: types.FETCH_CART_REQ,
    payload,
  };
};
const Fetch_Cart_Succ = (payload) => {
  return {
    type: types.FETCH_CART_SUCC,
    payload,
  };
};
const Fetch_Cart_Fail = (payload) => {
  return {
    type: types.FETCH_CART_FAIL,
    payload,
  };
};

const fetchCart = (payload) => (dispatch) => {
  dispatch(fetchCart());
  Axios.get("https://ov9fh4.sse.codesandbox.io/cart", {
    params: {
      ...payload,
    },
  })
    .then((r) => dispatch(types.FETCH_CART_SUCC(r.data)))
    .catch((e) => dispatch(types.FETCH_CART_FAIL(e.data)));
};

export { FetchData, Single_FetchData, AddProCart, fetchCart };
