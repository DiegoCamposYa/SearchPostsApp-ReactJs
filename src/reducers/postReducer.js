import { types } from "../types/types";

const initialState = {
  posts: null,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.posts:
      return {
        ...state,
        posts: [...action.payload],
      };

    default:
      return state;
  }
};
