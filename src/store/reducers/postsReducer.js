import { DATA } from "../../data";
import { LOAD_POSTS } from "../types";

const initialState = {
  allPosts: null,
  bookedPosts: null,
};

export const postsReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        bookedPosts: action.payload.filter((post) => post.booked),
      };
    default:
      return state;
  }
};

export const loadPostsAction = () => {
  return {
    type: LOAD_POSTS,
    payload: DATA,
  };
};
