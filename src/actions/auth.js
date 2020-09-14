import { types } from "../types/types";

export const authLogin = (userName) => {
  return async (dispatch) => {
    try {
      dispatch(login(userName));
    } catch (error) {
      console.error(error);
    }
  };
};

export const starLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logout());
  };
};

export const login = (user) => {
  return {
    type: types.authLogin,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: types.authLogout,
  };
};
