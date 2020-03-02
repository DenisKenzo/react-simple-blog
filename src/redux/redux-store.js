import {combineReducers, createStore} from "redux";
import mainReducer from './main-reducer'

  let reducers = combineReducers({
    reducerData: mainReducer,
  });

  let store = createStore(reducers);

export default store;
