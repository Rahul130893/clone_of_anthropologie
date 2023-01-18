import { LOGIN_FAIL, LOGIN_REQ, LOGIN_SUCC, LOGOUT_SUCC } from "./action";

const initial = {
  auth: false,
  token: "",
  error: false,
};

export const authReducer = (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQ:
      return {
        auth: false,
        token: "",
        error: false,
      };
    case LOGIN_SUCC:
      return {
        auth: true,
        token: payload,
        error: false,
      };
    case LOGIN_FAIL:
      return {
        auth: false,
        token: "",
        error: true,
      };
    case LOGOUT_SUCC:
      return {
        auth: false,
        token: "",
      }
    default:
      return state;
  }
};
