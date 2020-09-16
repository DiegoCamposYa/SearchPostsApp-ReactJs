import { getPostsByTag } from "../services/PostsService";
import { types } from "../types/types";

export const postsByTag = (tagText) => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const { data } = await getPostsByTag(tagText);
      if (data) {
        dispatch(postsLoaded(data.data));
        dispatch(numberTotalPost(data.total));
        dispatch(setSearchText(tagText));
      }
    } catch (error) {
      console.error(error);
      dispatch(hideLoading());
    } finally {
      dispatch(hideLoading());
    }
  };
};

export const addNewPosts = (tagText, numberPage) => {
  return async (dispatch) => {
    try {
      const { data } = await getPostsByTag(tagText, numberPage);
      if (data) {
        dispatch(setPosts(data.data));
      }
    } catch (error) {
      console.error(error);
    }
  };
};

const postsLoaded = (posts) => {
  return {
    type: types.posts,
    payload: posts,
  };
};

const setPosts = (posts) => {
  return {
    type: types.addNewPost,
    payload: posts,
  };
};

const numberTotalPost = (numberPosts) => {
  return {
    type: types.numberTotalPost,
    payload: numberPosts,
  };
};

const setSearchText = (searchText) => {
  return {
    type: types.searchText,
    payload: searchText,
  };
};

const showLoading = () => {
  return {
    type: types.showLoading,
  };
};

const hideLoading = () => {
  return {
    type: types.hideLoading,
  };
};

export const postsLogout = () => {
  return {
    type: types.postsLogout,
  };
};
