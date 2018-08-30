import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Loadable from "react-loadable";
import { getBundles } from "react-loadable/webpack";
import serialize from "serialize-javascript";
import App from "../../client/App";
import stats from "../../../public/react-loadable.json";
import manifest from "../../../public/manifest.json";

export default (req, store, context) => {
  let modules = [];
  const content = renderToString(
    <Provider store={store}>
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <StaticRouter location={req.path} context={context}>
          <App />
        </StaticRouter>
      </Loadable.Capture>
    </Provider>
  );

  let bundles = getBundles(stats, modules);

  return `
  <!DOCTYPE html>
   <html>
        <head>
          <title></title> 
          </head>
        <body>
          <div id="root">${content}</div>
         <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
         <script src="${manifest["main.js"]}"></script>
         <script src="${manifest["vendors.js"]}"></script>
      
           ${bundles
             .map(bundle => {
               return `<script src="${bundle.publicPath}"></script>`;
             })
             .join("\n")}
          
        </body>
    </html>     
  `;
};
