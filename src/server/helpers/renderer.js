import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Loadable from "react-loadable";
import { getBundles } from "react-loadable/webpack";
import serialize from "serialize-javascript";
import App from "../../client/App";
import stats from "../../../build/react-loadable.json";

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

  const convertLoadableModulesToScripts = usedModules => {
    return Object.keys(stats)
      .filter(
        chunkName => usedModules.indexOf(chunkName.replace(".js", "")) > -1
      )
      .map(k => `<script  src="${stats[k]}"></script>`)
      .join("");
  };
  let bundles = getBundles(stats, modules);
  //let bundles = convertLoadableModulesToScripts(modules);
  console.log(
    "Draogmir",
    Object.keys(stats).filter(
      chunkName => modules.indexOf(chunkName.replace(".js", "")) > -1
    )
  );
  console.log("bundles", bundles);
  return `
  <!DOCTYPE html>
   <html>
        <head>
          <title></title> 
          </head>
        <body>
          <div id="root">${content}</div>
         <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
           ${bundles
             .map(bundle => {
               console.log(`<script src="${bundle.publicPath}"></script>`);
               return `<script src="${bundle.publicPath}"></script>`;
               // alternatively if you are using publicPath option in webpack config
               // you can use the publicPath value from bundle, e.g:
               // return `<script src="${bundle.publicPath}"></script>`
             })
             .join("\n")}

        </body>
    </html>     
  `;
};
//          <script src="bundle.js"></script>
