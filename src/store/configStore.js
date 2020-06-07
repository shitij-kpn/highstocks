import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import queryReducer from "./../reducers/queryReducer";
import dataReducer from "./../reducers/dataReducer";

export default () => {
  const store = createStore(
    combineReducers({
      queryReducer,
      dataReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};
