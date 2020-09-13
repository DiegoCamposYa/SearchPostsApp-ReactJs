import { getPostsByTag } from "../services/PostsService";
import { types } from "../types/types";

export const postsByTag = (tagText) => {
  return async (dispatch) => {
    try {
      const { data } = await getPostsByTag(tagText);

      if (data) {
        dispatch(postsLoaded(data.data));
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
