import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import serialize from "serialize-javascript";
import routes from "../client/routes";

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
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
      </StaticRouter>
    </Provider>
  );

  return `
   <html>
        <head>  
        </head>
        <body>
          <div id="root">${content}</div>
         <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
          <script src="bundle.js"></script>
        </body>
    </html>     
  `;
};
