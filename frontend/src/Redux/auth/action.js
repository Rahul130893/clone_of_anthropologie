import Axios from "axios";

export const LOGIN_REQ = "LOGIN_REQ";
export const LOGIN_SUCC = "LOGIN_SUCC";
export const LOGIN_FAIL = "LOGIN_FAIL";

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

const logIn = (payload) => (dispatch) => {
  dispatch(logInReq());
    Axios.post("https://anthropologie.onrender.com/login", payload)
        //   .then((res)=> console.log(res))
        .then((r) => dispatch(logInSucc(r.data)))
        .catch((e) =>
            
          dispatch(logInFail(e.data)));
};

export default logIn;
