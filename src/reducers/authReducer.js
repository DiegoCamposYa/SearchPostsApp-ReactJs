import { types } from "../types/types";

const initialState = {
  userName: null,
  isAuthenticated: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        userName: action.payload,
        isAuthenticated: true,
      };

    case types.authLogout:
      return {
        userName: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
