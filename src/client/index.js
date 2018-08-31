import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import App from "./App";
import reducers from "./reducers";
import Loadable from "react-loadable";

const store = createStore(
  reducers,
  window.INITIAL_STATE || {},
  applyMiddleware(thunk)
);

Loadable.preloadReady().then(() =>
  hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.querySelector("#root")
  )
);
