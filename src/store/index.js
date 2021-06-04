import { createStore, combineReducers, applyMiddleware } from "redux";
import { postsReducer } from "./reducers/postsReducer"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
  posts: postsReducer
})

export default createStore(rootReducer, applyMiddleware(thunk));
