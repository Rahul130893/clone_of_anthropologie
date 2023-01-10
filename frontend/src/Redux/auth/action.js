import Axios from "axios";
import { fetchCart } from "../cloths.js/action";

export const LOGIN_REQ = "LOGIN_REQ";
export const LOGIN_SUCC = "LOGIN_SUCC";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_SUCC = "LOGOUT_SUCC"


const logInReq = () => {
  return {
    type: LOGIN_REQ,
  };
};
const logInSucc = (payload) => {
  return {
    type: LOGIN_SUCC,
    payload,
  };
};
const logInFail = (payload) => {
  return {
    type: LOGIN_FAIL,
    payload,
  };
};

const logOutSucc = () => {
  return {
    type: LOGOUT_SUCC,

  }
}

export  const logIn = (payload) => (dispatch) => {
  dispatch(logInReq());
    Axios.post("https://anthropologie.onrender.com/login", payload)
        //   .then((res)=> console.log(res))
        .then((r) => dispatch(logInSucc(r.data)))
        .catch((e) =>
            
          dispatch(logInFail(e.data)));
};

 export const logOut = () => (dispatch) => {
  dispatch(logOutSucc())
  // dispatch(fetchCart(payload))
}


