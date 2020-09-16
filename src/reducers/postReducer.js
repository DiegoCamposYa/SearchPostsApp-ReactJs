import { types } from "../types/types";

const initialState = {
  posts: null,
  searchText: "",
  numberTotalPost: null,
  loading: false,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.posts:
      return {
        ...state,
        posts: [...action.payload],
      };

    case types.searchText:
      return {
        ...state,
        searchText: action.payload,
      };

    case types.numberTotalPost:
      return {
        ...state,
        numberTotalPost: action.payload,
      };

    case types.addNewPost:
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
      };

    case types.showLoading:
      return {
        ...state,
        loading: true,
      };

    case types.hideLoading:
      return {
        ...state,
        loading: false,
      };

    case types.postsLogout:
      return {
        posts: null,
        searchText: "",
        numberTotalPost: null,
        loading: false,
      };

    default:
      return state;
  }
};
