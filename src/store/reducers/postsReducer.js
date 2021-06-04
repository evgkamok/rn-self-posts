import { DB } from "../../db";
import { CREATE_POST, DELETE_POST, LOAD_POSTS, TOGGLE_BOOKED } from "../types";
import * as FileSystem from "expo-file-system";

const initialState = {
  allPosts: [],
  bookedPosts: [],
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
        allPosts: state.allPosts.filter((post) => post.id !== action.payload),
        bookedPosts: state.bookedPosts.filter(
          (post) => post.id !== action.payload
        ),
      };
    case CREATE_POST:
      return {
        ...state,
        allPosts: [action.payload, ...state.allPosts],
      };
    default:
      return state;
  }
};

export const getPosts = () => async (dispatch) => {
  try {
    const posts = await DB.getPosts();
    dispatch({
      type: LOAD_POSTS,
      payload: posts,
    });
  } catch (e) {
    console.log(e);
  }
};

export const createPost = (post) => async (dispatch) => {
  const imgFileName = post.img.split("/").pop();
  const localAppPath = FileSystem.documentDirectory + imgFileName;

  try {
    await FileSystem.moveAsync({
      to: localAppPath,
      from: post.img,
    });
  } catch (e) {
    console.log("Error", e);
  }

  const payload = {...post,img: localAppPath};
  const id = await DB.createPost(payload);
  payload.id = id;

  dispatch({
    type: CREATE_POST,
    payload: payload
  });
};

export const toggleBooked = (id) => ({ type: TOGGLE_BOOKED, payload: id });
export const deletePost = (id) => ({ type: DELETE_POST, payload: id });
