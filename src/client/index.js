//Startup point for the client side application
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(thunk));
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {routes.map(({ path, exact, component: C, ...rest }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={props => <C {...props} {...rest} />}
          />
        ))}
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
