import {combineReducers, createStore} from "redux";
import postsReducer from './posts-reducer'
import specificPostReducer from "./specific-post-reducer";

  let reducers = combineReducers({
    postsReducer: postsReducer,
    singleReducer: specificPostReducer
  });

  let store = createStore(reducers);

export default store;
