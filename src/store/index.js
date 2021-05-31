import { createStore, combineReducers } from "redux";
import { postsReducer } from "./reducers/postsReducer"

const rootReducer = combineReducers({
  posts: postsReducer
})

export default createStore(rootReducer);
