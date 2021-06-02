import { DATA } from "../../data";
import { CREATE_POST, DELETE_POST, LOAD_POSTS, TOGGLE_BOOKED } from "../types";

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
    case TOGGLE_BOOKED:
      return {
        ...state,
        allPosts: state.allPosts.map((post) => {
          if (post.id === action.payload) {
            post.booked = !post.booked;
          }
          return post;
        }),
        bookedPosts: state.allPosts.filter((post) => post.booked),
      };
    case DELETE_POST:
      return {
        ...state,
        allPosts: state.allPosts.filter( post => post.id !== action.payload),
        bookedPosts: state.bookedPosts.filter( post => post.id !== action.payload)
      }
    case CREATE_POST:
      return {
        ...state,
        allPosts: [{...action.payload}, ...state.allPosts]
      }
    default:
      return state;
  }
};

export const loadPostsAction = () => ({ type: LOAD_POSTS, payload: DATA });
export const toggleBooked = id => ({ type: TOGGLE_BOOKED, payload: id });
export const deletePost = id => ({ type: DELETE_POST, payload: id});
export const createPost = data => ({ type: CREATE_POST, payload: data});
