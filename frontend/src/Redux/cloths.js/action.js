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

    Axios.get("https://anthropologie.onrender.com/cloth", {
      params: {
        ...payload,
      },
    })
      .then((r) => dispatch(FetchDataSucc(r.data.cloths)))
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

const Single_FetchData = (_id) => (dispatch) => {
  dispatch(Single_FetchDataReq());
  Axios.get(`https://anthropologie.onrender.com/cloth/${_id}`)
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
  Axios.post("https://anthropologie.onrender.com/cart", product)
    .then((r) => dispatch(Add_Pro_Succ(r.data)))
    .catch((e) => dispatch(Add_Pro_Fail(e.message)));
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

const fetchCart = (id) => (dispatch) => {
  dispatch(Fetch_Cart_Req());
  Axios.get(`https://anthropologie.onrender.com/cart/singleUser/${id}`)
    .then((r) => dispatch(Fetch_Cart_Succ(r.data)))
    .catch((e) => dispatch(Fetch_Cart_Fail(e.data)));
};


const delet_Cart_Req = (payload) => {
  return {
    type: types.DELET_CART_REQ,
    payload,
  };
};
const delet_Cart_Succ = (payload) => {
  return {
    type: types.DELET_CART_SUCC,
    payload,
  };
};
const delet_Cart_Fail = (payload) => {
  return {
    type: types.DELET_CART_FAIL,
    payload,
  };
};
export const deletCartItmes = (id) => (dispatch) => {
  dispatch(delet_Cart_Req());
  Axios.delete(`https://anthropologie.onrender.com/cart/${id}`)
    .then((r) => {
      dispatch(delet_Cart_Succ(r.data));
    })
    

    .catch((e) => dispatch(delet_Cart_Fail(e.message)));
};

export { FetchData, Single_FetchData, AddProCart, fetchCart};
