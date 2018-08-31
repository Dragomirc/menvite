require("babel-register");
const express = require("express");
const { matchPath } = require("react-router-dom");
const Loadable = require("react-loadable");
const webpack = require("webpack");
// No files wirtten to the disk / If files changed in watch mode, the
// middleware delays requests until compiling has completed / Supports HMR
const webpackDevMiddleware = require("webpack-dev-middleware");
// Used to hot update Webpack bundles on the server
const webpackHotServerMiddleware = require("webpack-hot-server-middleware");
//Allows to add hot reloading into an exisiting server
const webpackHotMiddleware = require("webpack-hot-middleware");
const clientConfig = require("../../webpack.client");
const serverConfig = require("../../webpack.server");
// const routes = require("../client/routes").default;
// const renderer = require("./helpers/renderer.js").default;
// const createStore = require("./helpers/createStore").default;
const DEV = process.env.NODE_ENV === "development";
const app = express();

let isBuilt = false;
const done = () => {
  Loadable.preloadAll().then(() => {
    !isBuilt &&
      app.listen(3000, () => {
        isBuilt = true;
        console.log("Listening on port 3000");
      });
  });
};
if (DEV) {
  const compiler = webpack([clientConfig, serverConfig]);

  const clientCompiler = compiler.compilers[0];
  const { publicPath } = clientConfig.output;

  const options = { publicPath, stats: { colors: true } };
  const devMiddleware = webpackDevMiddleware(compiler, options);
  app.use(devMiddleware);
  app.use(webpackHotMiddleware(clientCompiler));
  app.use(webpackHotServerMiddleware(compiler));
  devMiddleware.waitUntilValid(done);
}
// app.use(express.static("public"));

// app.get("*", (req, res, next) => {
//   const store = createStore(req);
//   const activeRoutes = routes.filter(route => matchPath(req.path, route)) || [];

//   const promise = activeRoutes.fetchInitialData
//     ? activeRoute.fetchInitialData(store)
//     : Promise.resolve();

//   promise
//     .then(() => {
//       const context = {};
//       const content = renderer(req, store, context);
//       if (context.url) {
//         return res.redirect(301, context.url);
//       }
//       if (context.notFound) {
//         res.status(404);
//       }
//       res.send(content);
//     })
//     .catch(next);
// });
