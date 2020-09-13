import { types } from "../types/types";

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
