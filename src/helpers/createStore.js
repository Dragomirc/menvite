import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import reducers from "../client/reducers";

export default () => {
  const store = createStore(reducers, {}, applyMiddleware());

  return store;
};
