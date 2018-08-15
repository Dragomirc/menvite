import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import serialize from "serialize-javascript";
import routes from "../../client/routes";
import App from "../../client/App";

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  return `
  <!DOCTYPE html>
   <html>
        <head>
          <title></title> 
          </head>
        <body>
          <div id="root">${content}</div>
         <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
          <script src="bundle.js"></script>
        </body>
    </html>     
  `;
};
